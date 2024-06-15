import { Request, Response } from 'express';
import { ENDPOINT, serveRequest, validateStoreIdAndKeycard } from './util';
import { IAddItemInput, ICheckoutInput, ICheckoutOutput } from '../entity';
import { RelayClientWrapper } from '../massmarket/client';
import { bytesToHex, keccak256 } from 'viem';
import { randomBytes } from 'crypto';

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
                    amount: '21000000000',
                    orderId: bytesToHex(randomBytes(32)),
                    chainId: 11155111,
                    ttl: 0,
                    currency: '',
                };

                /*
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

                    //add products to cart
                    for(const item of input.items) {
                        await rc.addToCart(
                            cartId,
                            item.productId, //'0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642'
                            item.quantity
                        );
                    }

                    //commit cart
                    await rc.commitCart(cartId);
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
                */

                console.log('returning output', output);
                return output;
            },
            200
        );
    },
};

function validateCheckoutInput(res: Response, input: ICheckoutInput): boolean {
    //if (!validateStoreIdAndKeycard(res, input)) return false;

    if (!input.items || !input.items.length) {
        console.log('items missing');
        res.status(400).json({
            msg: 'Required: items',
        });
        return false;
    }
    return true;
}
