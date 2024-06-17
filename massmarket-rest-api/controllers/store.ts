import { Request, Response } from 'express';
import { ICreateStoreInput, ICreateStoreOutput } from '../entity';
import { RelayClientWrapper } from '../massmarket/client';
import { serveRequest } from './util';

/*
{
    "success":true,
    "storeId":"0xb3196680cda22f98635bbc104e1f5e829ee8e71db27b5d6c9241d0e20c64e109",
    "keyCard":"0x7e683da67b0079c20a4856bfbd92b3c90b63f51bd57f7a9d2643aaba5c6b659b"
}
*/

export const storeController = {
    //create store
    createStore: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICreateStoreInput = body;
                const output: ICreateStoreOutput = {
                    success: false,
                    storeId: '0x0',
                    keyCard: '0x0',
                };

                const data =
                    await RelayClientWrapper.createAndInitializeStore();
                output.storeId = data.storeId;
                output.keyCard = data.keyCard;

                //TODO: check for zeroAddress
                output.success =
                    output.storeId.length > 0 && output.keyCard.length > 0;

                return output;
            },
            201
        );
    },
};
