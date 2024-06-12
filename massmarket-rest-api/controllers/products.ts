import { Request, Response } from 'express';
import {
    ENDPOINT,
    serveRequest,
    validateRequiredHexString,
    validateStoreIdAndKeycard,
} from './util';
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
    createProducts: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICreateProductInput = body;
                const output: ICreateProductOutput = {
                    success: false,
                    productIds: [],
                };

                //validation
                if (!validateCreateProductInput(res, input)) {
                    return null;
                }

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

                    //TODO: better success check
                    output.success =
                        output.productIds.length == input.products.length;
                }

                return output;
            },
            201
        );
    },

    //update product
    updateProduct: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const productId = id;
                const input: IUpdateProductInput = body;
                const output: IUpdateProductOutput = {
                    success: false,
                };

                //validation
                if (!validateUpdateProductInput(res, productId, input)) {
                    return null;
                }

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

function validateCreateProductInput(
    res: Response,
    input: ICreateProductInput
): boolean {
    if (!validateStoreIdAndKeycard(res, input)) return false;
    return true;
}

function validateUpdateProductInput(
    res: Response,
    productId: HexString,
    input: IUpdateProductInput
): boolean {
    if (!validateRequiredHexString(res, productId, 'productId')) return false;
    if (!validateStoreIdAndKeycard(res, input)) return false;
    return true;
}
