import {
    AbstractPaymentProcessor,
    Cart,
    CartService,
    PaymentProcessorContext,
    PaymentProcessorError,
    PaymentProcessorSessionResponse,
    PaymentSessionStatus,
    Logger,
} from '@medusajs/medusa'; //TODO: need?
import { ethers, TransactionResponse } from 'ethers';

async function verifyPaymentTransactionId(
    transactionId: any
): Promise<boolean> {
    try {
        const provider = new ethers.JsonRpcProvider('https://rpc.sepolia.org');
        const tx: TransactionResponse =
            await provider.getTransaction(transactionId);
        if (tx) {
            //TODO: more verification is needed
            //tx.from
            return true;
        }
    } catch (e) {
        console.error(e);
    }
    return false;
}

/**
 * @description This is being used as a test right now for payment processing using
 * crypto wallets; if used it will be changed alot. Right now only a test.
 * @author John R. Kosinski
 */
class CryptoPaymentService extends AbstractPaymentProcessor {
    static identifier = 'crypto';
    cartService: CartService;

    constructor(container, config) {
        console.log('CryptoPaymentService::config');
        //console.log(config);
        super(container, config);
        this.cartService = container.cartService;
    }

    async capturePayment(
        paymentSessionData: Record<string, unknown>
    ): Promise<
        PaymentProcessorError | PaymentProcessorSessionResponse['session_data']
    > {
        console.log('CryptoPaymentService: capturePayment');
        //console.log(paymentSessionData);
        return {
            session_data: paymentSessionData,
        };
    }

    async authorizePayment(
        paymentSessionData: Record<string, unknown>,
        context: Record<string, unknown>
    ): Promise<
        | PaymentProcessorError
        | {
              status: PaymentSessionStatus;
              data: PaymentProcessorSessionResponse['session_data'];
          }
    > {
        console.log('CryptoPaymentService: authorizePayment');
        //console.log(paymentSessionData);
        let payment_status = paymentSessionData.payment_status;
        if (!payment_status) payment_status = 'ok';

        return {
            status:
                payment_status == 'ok'
                    ? PaymentSessionStatus.AUTHORIZED
                    : PaymentSessionStatus.ERROR,
            data: {
                session_data: paymentSessionData,
            },
        };
    }

    async cancelPayment(
        paymentSessionData: Record<string, unknown>
    ): Promise<
        PaymentProcessorError | PaymentProcessorSessionResponse['session_data']
    > {
        console.log('CryptoPaymentService: cancelPayment');
        return {
            session_data: paymentSessionData,
        };
    }

    async initiatePayment(
        context: PaymentProcessorContext
    ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
        console.log('CryptoPaymentService: initiatePayment');
        //console.log(context);

        //get the store id
        let walletAddresses: string[] = [];
        if (
            context.resource_id ||
            !context.paymentSessionData?.wallet_address ||
            !context.paymentSessionData.wallet_address.toString().length
        ) {
            walletAddresses = await this.getCartWalletAddresses(
                context.resource_id.toString()
            );
        }

        const { email, currency_code, amount, resource_id, customer } = context;

        const session_data: any = {
            amount: Math.round(100),
            currency: 'USD',
            notes: { resource_id },
            wallet_addresses: walletAddresses.join(','),
            payment: {
                capture: 'manual',
                payment_status: 'ok',
                capture_options: {
                    refund_speed: 'normal',
                    automatic_expiry_period: 5,
                    manual_expiry_period: 10,
                },
            },
        };
        return {
            session_data: session_data as any,
        };
    }

    async deletePayment(
        paymentSessionData: Record<string, unknown>
    ): Promise<
        PaymentProcessorError | PaymentProcessorSessionResponse['session_data']
    > {
        console.log('CryptoPaymentService: deletePayment');
        //console.log(paymentSessionData);
        return {
            session_data: paymentSessionData,
        };
    }

    async getPaymentStatus(
        paymentSessionData: Record<string, unknown>
    ): Promise<PaymentSessionStatus> {
        console.log('CryptoPaymentService: getPaymentStatus');
        //console.log(paymentSessionData);

        try {
            const payment_status =
                paymentSessionData.session_data['session_data']?.payment
                    ?.payment_status ?? '';
            console.log(payment_status);
            return payment_status === 'failed'
                ? PaymentSessionStatus.ERROR
                : PaymentSessionStatus.AUTHORIZED;
        } catch (e) {
            console.error(e);
        }

        return PaymentSessionStatus.AUTHORIZED;
    }

    async refundPayment(
        paymentSessionData: Record<string, unknown>,
        refundAmount: number
    ): Promise<
        PaymentProcessorError | PaymentProcessorSessionResponse['session_data']
    > {
        console.log('CryptoPaymentService: refundPayment');
        //console.log(paymentSessionData);
        return {
            session_data: paymentSessionData,
        };
    }

    async retrievePayment(
        paymentSessionData: Record<string, unknown>
    ): Promise<
        PaymentProcessorError | PaymentProcessorSessionResponse['session_data']
    > {
        console.log('CryptoPaymentService: retrievePayment');
        //console.log(paymentSessionData);
        return {
            session_data: paymentSessionData,
        };
    }

    async updatePayment(
        context: PaymentProcessorContext
    ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse | void> {
        console.log('CryptoPaymentService: updatePayment');
        //console.log(context);
        return this.initiatePayment(context);
    }

    async updatePaymentData(
        sessionId: string,
        data: Record<string, unknown>
    ): Promise<
        PaymentProcessorError | PaymentProcessorSessionResponse['session_data']
    > {
        console.log('CryptoPaymentService: updatePaymentData');
        return {
            session_data: {
                method: 'updatePaymentData',
                actor: 'stephen chow',
                sessionId: sessionId,
            },
        };
    }

    private async getCartWalletAddresses(cartId: string): Promise<string[]> {
        const output: string[] = [];

        try {
            //get cart; cart has items, items have variants, variants have products,
            // products have stores, stores have owners, owners have wallets
            const cart: Cart = await this.cartService.retrieve(cartId, {
                relations: ['items.variant.product.store.owner'],
            });

            //add unique wallet addresses to output
            if (cart && cart.items) {
                cart.items.forEach((i) => {
                    const wallet: string =
                        i.variant?.product?.store?.owner?.wallet_address;
                    if (wallet && output.findIndex((s) => s === wallet) < 0) {
                        output.push(wallet);
                    }
                });
            }
        } catch (e) {
            console.error(e);
        }

        return output;
    }
}

export default CryptoPaymentService;
