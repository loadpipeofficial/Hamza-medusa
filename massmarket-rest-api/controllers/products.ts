import { Request, Response } from 'express';
import { serveRequest } from './util';
import {
    ICreateProductInput,
    ICreateProductOutput,
    IUpdateProductInput,
    IUpdateProductOutput,
} from '../entity';

export const productsController = {
    //create product
    post: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICreateProductInput = body;
                const output: ICreateProductOutput = {
                    success: true,
                    productId: '0x01',
                };
                return output;
            },
            201
        );
    },

    //update product
    put: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: IUpdateProductInput = body;
                const output: IUpdateProductOutput = {
                    success: true,
                };
                return output;
            },
            200
        );
    },
};
