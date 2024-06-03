import {
    AbstractCartCompletionStrategy,
    Cart,
    CartCompletionResponse,
    IdempotencyKey,
    IdempotencyKeyService,
    ProductService,
    CartService,
    Logger,
} from '@medusajs/medusa';
import OrderService from '../services/order';
import { PaymentService } from '@medusajs/medusa/dist/services';
import { Payment } from '../models/payment';
import { Order } from '../models/order';
import { LineItem } from '../models/line-item';
import { PaymentDataInput } from '@medusajs/medusa/dist/services/payment';
import { RequestContext } from '@medusajs/medusa/dist/types/request';
import PaymentRepository from '@medusajs/medusa/dist/repositories/payment';

type InjectedDependencies = {
    idempotencyKeyService: IdempotencyKeyService;
    productService: ProductService;
    paymentService: PaymentService;
    cartService: CartService;
    orderService: OrderService;
    paymentRepository: typeof PaymentRepository;
    logger: Logger;
};

interface IPaymentGroupData {
    store_id: string;
    currency_code: string;
    items: string[];
    total: bigint;
}

/**
 * @name CartCompletionStrategy
 *
 * @description Defines a Cart completion strategy which is called when the cart's complete
 * method is called (on the client side). Breaks up cart items into multiple payments,
 * for each unique store-currency pair; creates payments and orders for each. This is
 * made specifically for our use case of crypto payments in (potentially) multiple currencies,
 * including native & token currencies.
 *
 * @author John R. Kosinski
 */
class CartCompletionStrategy extends AbstractCartCompletionStrategy {
    protected readonly idempotencyKeyService: IdempotencyKeyService;
    protected readonly cartService: CartService;
    protected readonly productService: ProductService;
    protected readonly paymentService: PaymentService;
    protected readonly orderService: OrderService;
    protected readonly paymentRepository: typeof PaymentRepository;
    protected readonly logger: Logger;

    constructor({
        idempotencyKeyService,
        productService,
        paymentService,
        cartService,
        orderService,
        paymentRepository,
        logger,
    }: InjectedDependencies) {
        super(arguments[0]);
        this.idempotencyKeyService = idempotencyKeyService;
        this.cartService = cartService;
        this.paymentService = paymentService;
        this.productService = productService;
        this.orderService = orderService;
        this.paymentRepository = paymentRepository;
        this.logger = logger;
    }

    /**
     * @description
     * - breaks up the cart into groups based on store id and currency.
     * - each item group is a unique pairing of store id and currency.
     * - a payment is created for each item group, to pay for that group of items.
     * - an order is created for each payment.
     *
     * @param cartId
     * @param idempotencyKey
     * @param context
     * @returns
     */

    async complete(
        cartId: string,
        idempotencyKey: IdempotencyKey,
        context: RequestContext
    ): Promise<CartCompletionResponse> {
        try {
            //get the cart
            const cart = await this.cartService.retrieve(cartId, {
                relations: [
                    'items.variant.product.store',
                    'items.variant.prices', //TODO: we need prices?
                ],
            });

            //group payments by store and currency
            const groups: IPaymentGroupData[] = this.createPaymentGroups(cart);

            //create payments
            const payments: Payment[] = await this.createCartPayments(
                cart,
                groups
            );

            //create orders
            const orders: Order[] = await this.createOrdersForPayments(
                cart,
                payments,
                groups
            );

            //update payments with order ids
            await this.updatePaymentFromOrder(payments, orders);

            //create & return the response
            const response: CartCompletionResponse = {
                response_code: 200,
                response_body: {
                    payment_count: payments.length,
                    message: 'payment successful',
                    payments,
                    orders,
                    cartId: cartId,
                },
            };

            return response;
        } catch (e) {
            const response: CartCompletionResponse = {
                response_code: 500,
                response_body: {
                    payment_count: 0,
                    message: e.toString(),
                    payments: [],
                    cartId: cartId,
                },
            };

            //return an error response
            this.logger.debug(response);
            return response;
        }
    }

    private createPaymentInput(
        cart: Cart,
        store_id: string,
        currency_code: string
    ): PaymentDataInput {
        //divide the cart items
        const itemsFromStore = cart.items.filter(
            (i: LineItem) => i.currency_code === currency_code
        );

        //get total amount for the items
        const amount = itemsFromStore.reduce(
            (a, i) => a + i.unit_price * i.quantity,
            0
        );

        //create payment input
        const output: PaymentDataInput = {
            currency_code: currency_code,
            provider_id: 'crypto',
            amount,
            data: {},
        };

        return output;
    }

    private createPaymentGroups(cart: Cart): IPaymentGroupData[] {
        //temp holding for groups
        const groups: { [key: string]: IPaymentGroupData } = {};

        if (cart && cart.items) {
            cart.items.forEach((i: LineItem) => {
                //create key from unique store/currency pair
                const currency: string = i.currency_code;

                const store: string = i.variant?.product?.store?.id;
                const key = `${store}_${currency}`;

                //create new group, or add item id to existing group
                if (!groups[key]) {
                    groups[key] = {
                        store_id: store,
                        currency_code: currency,
                        items: [],
                        total: BigInt(0),
                    };
                }
                groups[key].items.push(i.id);
                groups[key].total += BigInt(i.unit_price * i.quantity);
            });
        }

        return Object.keys(groups).map((key) => groups[key]);
    }

    private async createCartPayments(
        cart: Cart,
        paymentGroups: IPaymentGroupData[]
    ): Promise<Payment[]> {
        //for each unique group, make payment input to create a payment
        const paymentInputs: PaymentDataInput[] = [];
        paymentGroups.forEach((group) => {
            paymentInputs.push(
                this.createPaymentInput(
                    cart,
                    group.store_id,
                    group.currency_code
                )
            );
        });

        //create the payments
        const promises: Promise<Payment>[] = [];
        for (let i = 0; i < paymentInputs.length; i++) {
            promises.push(this.paymentService.create(paymentInputs[i]));
        }

        const payments: Payment[] = await Promise.all(promises);
        return payments;
    }

    private async createOrdersForPayments(
        cart: Cart,
        payments: Payment[],
        paymentGroups: IPaymentGroupData[]
    ): Promise<Order[]> {
        const promises: Promise<Order>[] = [];
        for (let i = 0; i < payments.length; i++) {
            promises.push(
                this.orderService.createFromPayment(
                    cart,
                    payments[i],
                    paymentGroups[i].store_id
                )
            );
        }

        return await Promise.all(promises);
    }

    private async updatePaymentFromOrder(
        payments: Payment[],
        orders: Order[]
    ): Promise<void> {
        const promises: Promise<Payment>[] = [];
        for (let n = 0; n < payments.length; n++) {
            if (orders.length > n) {
                promises.push(this.updatePayment(payments[n], orders[n]));
            }
        }
        await Promise.all(promises);
    }

    private async updatePayment(
        payment: Payment,
        order: Order
    ): Promise<Payment> {
        const fullOrder = await this.orderService.getOrderWithStore(order.id);
        payment.order_id = order.id;
        payment.cart_id = order.cart_id;
        payment.receiver_address =
            fullOrder.store?.owner?.wallet_address ?? 'NA';
        return await this.paymentRepository.save(payment);
    }
}

export default CartCompletionStrategy;
