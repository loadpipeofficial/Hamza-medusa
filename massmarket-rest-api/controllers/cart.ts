import { Request, Response } from 'express';
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

export const cartController = {
    post: async (req: Request, res: Response) => {
        try {
            const input: ICreateCartInput = req.body;
            const output: ICreateCartOutput = {
                success: true,
                cartId: '0x0',
            };

            res.status(201).json(output);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    },

    put: async (req: Request, res: Response) => {
        try {
            const cartId = req.params.id;
            const input: IAddCartItemInput = req.body;
            const output: IAddCartItemOutput = {
                success: true,
            };

            res.status(201).json(output);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    },

    postId: async (req: Request, res: Response) => {
        try {
            const cartId = req.params.id;
            const input: ICommitCartInput = req.body;
            const output: ICommitCartOutput = {
                success: true,
            };

            res.status(200).json(output);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const cartId = req.params.id;
            const input: IAbandonCartInput = req.body;
            const output: IAbandonCartOutput = {
                success: true,
            };

            res.status(204).json(output);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    },
};
