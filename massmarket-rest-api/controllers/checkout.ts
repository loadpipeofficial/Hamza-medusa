import { Request, Response } from 'express';
import { serveRequest } from './util';
import { ICheckoutInput, ICheckoutOutput } from '../entity';

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
                    success: true,
                    cartId: '0x0',
                    paymentAddress: '0x0',
                };
                return output;
            },
            201
        );
    },
};
