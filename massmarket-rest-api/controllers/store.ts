import { Request, Response } from 'express';
import { ICreateStoreInput, ICreateStoreOutput } from '../entity';
import { serveRequest } from './util';

export const storeController = {
    //create store
    post: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICreateStoreInput = body;
                const output: ICreateStoreOutput = {
                    success: true,
                    storeId: '0x01',
                    keyCard: '0x02',
                };
                return output;
            },
            201
        );
    },
};
