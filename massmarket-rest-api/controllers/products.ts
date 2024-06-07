import { Request, Response } from 'express';
import { ENDPOINT, serveRequest } from './util';
import {
    HexString,
    ICreateProductInput,
    ICreateProductOutput,
    IUpdateProductInput,
    IUpdateProductOutput,
} from '../entity';
import { RelayClientWrapper } from '../massmarket/client';

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
                    productIds: [],
                };

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //add the product
                if (rc) {
                    const promises: Promise<HexString>[] = [];
                    for (let prod of input.products) {
                        promises.push(rc.createProduct(prod));
                    }

                    output.productIds = await Promise.all(promises);

                    output.success = true;
                }

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

                //get the client
                const rc = await RelayClientWrapper.get(
                    ENDPOINT,
                    input.storeId,
                    input.keycard
                );

                //update the product
                if (rc) {
                    //TODO: update the product

                    output.success = true;
                }
                return output;
            },
            200
        );
    },
};
