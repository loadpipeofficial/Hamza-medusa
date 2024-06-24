import { ENDPOINT, serveRequest, validateRequiredHexString, validateStoreIdAndKeycard, } from './utils';
import { RelayClientWrapper } from '../massmarket/client';
export const productsController = {
    //create product
    createProducts: async (req, res) => {
        serveRequest(req, res, async (id, body) => {
            const input = body;
            const output = {
                success: false,
                productIds: [],
            };
            //validation
            if (!validateCreateProductInput(res, input)) {
                return null;
            }
            //get the client
            const rc = await RelayClientWrapper.get(ENDPOINT, input.storeId, input.keycard);
            //add the product
            if (rc) {
                const promises = [];
                for (let prod of input.products) {
                    promises.push(rc.createProduct(prod));
                }
                output.productIds = await Promise.all(promises);
                //TODO: better success check
                output.success =
                    output.productIds.length == input.products.length;
            }
            return output;
        }, 201);
    },
    //update product
    updateProduct: async (req, res) => {
        serveRequest(req, res, async (id, body) => {
            const productId = id;
            const input = body;
            const output = {
                success: false,
            };
            //validation
            if (!validateUpdateProductInput(res, productId, input)) {
                return null;
            }
            //get the client
            const rc = await RelayClientWrapper.get(ENDPOINT, input.storeId, input.keycard);
            //update the product
            if (rc) {
                //TODO: update the product
                output.success = true;
            }
            return output;
        }, 200);
    },
};
function validateCreateProductInput(res, input) {
    if (!validateStoreIdAndKeycard(res, input))
        return false;
    return true;
}
function validateUpdateProductInput(res, productId, input) {
    if (!validateRequiredHexString(res, productId, 'productId'))
        return false;
    if (!validateStoreIdAndKeycard(res, input))
        return false;
    return true;
}
//# sourceMappingURL=products.js.map