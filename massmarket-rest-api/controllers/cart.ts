import { Request, Response } from 'express';
import { ENDPOINT, serveRequest } from './util';
import {
    IAbandonCartOutput,
    IAbandonCartInput,
    ICreateCartInput,
    ICreateCartOutput,
    IAddCartItemInput,
    IAddCartItemOutput,
    ICommitCartInput,
    ICommitCartOutput,
} from '../entity';
import { RelayClientWrapper } from '../massmarket/client';
import { refCount } from 'rxjs';

export const cartController = {
    //create cart
    post: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICreateCartInput = body;
                const output: ICreateCartOutput = {
                    success: false,
                    cartId: '0x0',
                };

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                if (rc) {
                    //create the cart
                    output.cartId = await rc.createCart();
                    output.success = output.cartId.length > 0;
                }

                return output;
            },
            201
        );
    },

    //add item to cart
    put: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const cartId = id;
                const input: IAddCartItemInput = body;
                const output: IAddCartItemOutput = {
                    success: true,
                };

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //add to cart
                if (rc) {
                    //create the cart
                    await rc.addToCart(
                        cartId,
                        input.item.productId,
                        input.item.quantity
                    );
                    output.success = true;
                }

                return output;
            },
            201
        );
    },

    //commit cart
    postId: async (req: Request, res: Response) => {
        serveRequest(req, res, async (id, body) => {
            const cartId = id;
            const input: ICommitCartInput = body;
            const output: ICommitCartOutput = {
                success: true,
            };

            //get the client
            const rc = await RelayClientWrapper.get(
                ENDPOINT,
                input.storeId,
                input.keycard
            );

            //add to cart
            if (rc) {
                //create the cart
                await rc.commitCart(cartId);

                output.success = true;
            }

            return output;
        });
    },

    //abandon cart
    delete: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const cartId = id;
                const input: IAbandonCartInput = body;
                const output: IAbandonCartOutput = {
                    success: true,
                };

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //add to cart
                if (rc) {
                    //create the cart
                    await rc.abandonCart(cartId);
                    output.success = true;
                }

                return output;
            },
            204
        );
    },
};
