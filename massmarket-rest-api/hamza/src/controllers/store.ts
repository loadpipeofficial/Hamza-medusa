import { Request, Response } from 'express';
import { ICreateStoreInput, ICreateStoreOutput } from '../entity/index.js';
import { RelayClientWrapper } from '../massmarket/client.js';
import { serveRequest, ENDPOINT } from './utils.js';

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

                const data = await RelayClientWrapper.createAndInitializeStore(
                    ENDPOINT,
                    input.keycard
                );
                output.storeId = data.shopId;
                output.keyCard = data.keyCard;

                //TODO: check for zeroAddress
                output.success =
                    output.storeId.length > 0 && output.keyCard.length > 0;

                return output;
            },
            201
        );
    },

    enrollKeycard: async (req: Request, res: Response) => {
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

                output.storeId = input.storeId;

                //TODO: check for zeroAddress
                output.keyCard = await RelayClientWrapper.enrollNewKeycard(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                return output;
            },
            201
        );
    },
};
