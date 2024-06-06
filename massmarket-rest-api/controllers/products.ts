import { Request, Response } from 'express';
import {
    ICreateProductInput,
    ICreateProductOutput,
    IUpdateProductInput,
    IUpdateProductOutput,
} from '../entity';
import { RelayClientWrapper } from '../massmarket/client';

export const productsController = {
    post: async (req: Request, res: Response) => {
        try {
            const input: ICreateProductInput = req.body;
            const output: ICreateProductOutput = {
                success: true,
                productId: '0x01',
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
            const prodId = req.params.id;
            const input: IUpdateProductInput = req.body;
            const output: IUpdateProductOutput = {
                success: true,
            };

            res.status(200).json({});
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    },
};
