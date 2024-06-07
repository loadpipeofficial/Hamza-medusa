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

                if (!validateCreateCartInput(res, input)) return null;

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //create the cart
                if (rc) {
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
                    success: false,
                };

                if (!validateAddItemInput(res, input)) return null;

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //add to cart
                if (rc) {
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
                success: false,
            };

            if (!validateCommitCartInput(res, input)) return null;

            //get the client
            const rc = await RelayClientWrapper.get(
                ENDPOINT,
                input.storeId,
                input.keycard
            );

            //commit the cart
            if (rc) {
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
                    success: false,
                };

                if (!validateAbandonCartInput(res, input)) return null;

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //abandon cart
                if (rc) {
                    await rc.abandonCart(cartId);
                    output.success = true;
                }

                return output;
            },
            204
        );
    },
};

function validateCreateCartInput(
    res: Response,
    input: ICreateCartInput
): boolean {
    return true;
}

function validateAddItemInput(
    res: Response,
    input: IAddCartItemInput
): boolean {
    return true;
}

function validateCommitCartInput(
    res: Response,
    input: ICommitCartInput
): boolean {
    return true;
}

function validateAbandonCartInput(
    res: Response,
    input: IAbandonCartInput
): boolean {
    return true;
}
