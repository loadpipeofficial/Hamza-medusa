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
exports.cartController = void 0;
const util_1 = require("./util");
const client_1 = require("../massmarket/client");
exports.cartController = {
    //create cart
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const input = body;
            const output = {
                success: false,
                cartId: '0x0',
            };
            //get the client
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //create the cart
            if (rc) {
                output.cartId = yield rc.createCart();
                output.success = output.cartId.length > 0;
            }
            return output;
        }), 201);
    }),
    //add item to cart
    put: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const cartId = id;
            const input = body;
            const output = {
                success: true,
            };
            //get the client
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //add to cart
            if (rc) {
                yield rc.addToCart(cartId, input.item.productId, input.item.quantity);
                output.success = true;
            }
            return output;
        }), 201);
    }),
    //commit cart
    postId: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const cartId = id;
            const input = body;
            const output = {
                success: true,
            };
            //get the client
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //commit the cart
            if (rc) {
                yield rc.commitCart(cartId);
                output.success = true;
            }
            return output;
        }));
    }),
    //abandon cart
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const cartId = id;
            const input = body;
            const output = {
                success: true,
            };
            //get the client
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //abandon cart
            if (rc) {
                yield rc.abandonCart(cartId);
                output.success = true;
            }
            return output;
        }), 204);
    }),
};
//# sourceMappingURL=cart.js.map