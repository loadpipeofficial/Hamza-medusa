import { Request, Response } from 'express';
import { ENDPOINT, serveRequest, validateStoreIdAndKeycard } from './util';
import { ICheckoutInput, ICheckoutOutput } from '../entity';
import { RelayClientWrapper } from '../massmarket/client';

export const checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    doCheckout: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICheckoutInput = body;

                //TODO: REMOVE (dummy checkout)
                const output: ICheckoutOutput = {
                    success: true,
                    contractAddress:
                        '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                    amount: '1100000',
                    orderId: '0x3DcA1518DB5A058F29EBfDab76739faf8Fb4511a',
                    chainId: 11155111,
                    ttl: 1,
                };

                /*
                if (!validateCheckoutInput(res, input)) {
                    console.log('validation failed');
                    return null;
                }

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

                    output.paymentAddress =
                        '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c';
                    output.success = true;
                }
                */

                console.log('returning output');
                return output;
            },
            200
        );
    },
};

function validateCheckoutInput(res: Response, input: ICheckoutInput): boolean {
    if (!validateStoreIdAndKeycard(res, input)) return false;

    if (!input.items || !input.items.length) {
        res.status(400).json({
            msg: 'Required: items',
        });
        return false;
    }
    return true;
}
