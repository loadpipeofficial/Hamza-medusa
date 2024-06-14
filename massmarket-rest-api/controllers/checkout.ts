import { Request, Response } from 'express';
import { ENDPOINT, serveRequest, validateStoreIdAndKeycard } from './util';
import { ICheckoutInput, ICheckoutOutput } from '../entity';
import { RelayClientWrapper } from '../massmarket/client';
import { keccak256 } from 'viem';

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
                    success: false,
                    contractAddress:
                        '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                    amount: '0',
                    orderId: '0x',
                    chainId: 11155111,
                    ttl: 0,
                    currency: '',
                };

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
                    const cartId = await rc.createCart();
                    console.log('CART ID: ', cartId);

                    //add a product to cart
                    await rc.addToCart(
                        cartId,
                        '0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642'
                    );

                    const commitId = await rc.commitCart(cartId);
                    console.log('COMMIT: ', commitId);

                    const events = await rc.pullEvents();

                    //parse the events
                    for (let n = events.length - 1; n >= 0; n--) {
                        const event = events[n];
                        if (event?.cartFinalized?.cartId) {
                            output.orderId = keccak256(
                                event.cartFinalized.cartId
                            );
                            output.ttl = event.cartFinalized.paymentTtl;
                            output.amount = event.cartFinalized.totalInCrypto;
                            output.currency = '';
                            output.success = true;
                        }
                    }
                }

                console.log('returning output', output);
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
