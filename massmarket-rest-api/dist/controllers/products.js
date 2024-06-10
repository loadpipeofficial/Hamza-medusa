"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const util_1 = require("./util");
const client_1 = require("../massmarket/client");
exports.productsController = {
    //create product
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
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
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //add the product
            if (rc) {
                const promises = [];
                for (let prod of input.products) {
                    promises.push(rc.createProduct(prod));
                }
                output.productIds = yield Promise.all(promises);
                //TODO: better success check
                output.success =
                    output.productIds.length == input.products.length;
            }
            return output;
        }), 201);
    }),
    //update product
    put: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
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
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //update the product
            if (rc) {
                //TODO: update the product
                output.success = true;
            }
            return output;
        }), 200);
    }),
};
function validateCreateProductInput(res, input) {
    if (!(0, util_1.validateStoreIdAndKeycard)(res, input))
        return false;
    return true;
}
function validateUpdateProductInput(res, productId, input) {
    if (!(0, util_1.validateRequiredHexString)(res, productId, 'productId'))
        return false;
    if (!(0, util_1.validateStoreIdAndKeycard)(res, input))
        return false;
    return true;
}
//# sourceMappingURL=products.js.map