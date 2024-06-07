import { Request, Response } from 'express';
import { ENDPOINT, serveRequest } from './util';
import { ICheckoutInput, ICheckoutOutput } from '../entity';
import { RelayClientWrapper } from '../massmarket/client';

export const checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    post: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICheckoutInput = body;
                const output: ICheckoutOutput = {
                    success: false,
                    cartId: '0x0',
                    paymentAddress: '0x0',
                };

                if (!validateCheckoutInput(res, input)) return null;

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //do the full checkout
                if (rc) {
                    //create the cart
                    output.cartId = await rc.createCart();

                    //add items to cart
                    for (let item of input.items) {
                        await rc.addToCart(
                            output.cartId,
                            item.productId,
                            item.quantity
                        );
                    }

                    //commit the cart
                    await rc.commitCart(output.cartId);

                    //TODO: get payment address
                    output.paymentAddress = '0x0';
                    output.success = true;
                }

                return output;
            },
            201
        );
    },
};

function validateCheckoutInput(res: Response, input: ICheckoutInput): boolean {
    return true;
}
