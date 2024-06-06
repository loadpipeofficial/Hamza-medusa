import { Request, Response } from 'express';
import { ICreateStoreInput, ICreateStoreOutput } from '../entity';

export const storeController = {
    post: async (req: Request, res: Response) => {
        try {
            const input: ICreateStoreInput = req.body;
            const output: ICreateStoreOutput = {
                success: true,
                storeId: '0x01',
                keyCard: '0x02',
            };

            res.status(201).json(output);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    },
};
