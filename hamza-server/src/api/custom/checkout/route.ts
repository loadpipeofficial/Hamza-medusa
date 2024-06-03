import { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';
import OrderService from '../../../services/order';
import { readRequestBody } from '../../../utils/request-body';

interface ICheckoutData {
    order_id: string;
    wallet_address: string;
    currency_code: string;
    amount: number;
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const orderService: OrderService = req.scope.resolve('orderService');
    const logger: Logger = req.scope.resolve('logger');
    const { cart_id } = req.query;

    try {
        const orders = await orderService.getOrdersForCart(cart_id.toString());
        const output: ICheckoutData[] = [];
        orders.forEach((o) => {
            output.push({
                order_id: o.id,
                wallet_address: o.store?.owner?.wallet_address ?? '',
                currency_code: o.payments[0].currency_code,
                amount: o.payments[0].amount,
            });
        });
        res.send({ orders: output });
    } catch (e) {
        logger.error(e);
        res.send({ message: e.message });
    }
};

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const orderService: OrderService = req.scope.resolve('orderService');
    const logger: Logger = req.scope.resolve('logger');
    //const { cart_id, transaction_id, payer_address, escrow_contract_address } =
    //    req.body;
    const {
        cartProducts,
        cart_id,
        transaction_id,
        payer_address,
        escrow_contract_address = [],
    } = readRequestBody(req.body, [
        'cartProducts',
        'cart_id',
        'transaction_id',
        'payer_address',
        'escrow_contract_address',
    ]);

    try {
        logger.debug(
            `Cart in the route: ${cartProducts} ${typeof cartProducts}`
        );
        await orderService.finalizeCheckout(
            cartProducts,
            cart_id,
            transaction_id,
            payer_address,
            escrow_contract_address
        );
        res.send(true);
    } catch (e) {
        logger.error(e);
        res.send({ message: e.message });
    }
};
