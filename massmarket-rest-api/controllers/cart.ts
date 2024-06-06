import { Request, Response } from 'express';
import { serveRequest } from './util';
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

export const cartController = {
    //create cart
    post: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICreateCartInput = body;
                const output: ICreateCartOutput = {
                    success: true,
                    cartId: '0x0',
                };
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
                return output;
            },
            204
        );
    },
};
