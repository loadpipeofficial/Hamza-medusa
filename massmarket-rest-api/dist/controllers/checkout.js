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
exports.checkoutController = void 0;
const util_1 = require("./util");
const client_1 = require("../massmarket/client");
exports.checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const input = body;
            const output = {
                success: false,
                cartId: '0x0',
                paymentAddress: '0x0',
            };
            if (!validateCheckoutInput(res, input))
                return null;
            //get the client
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //do the full checkout
            if (rc) {
                //create the cart
                output.cartId = yield rc.createCart();
                //add items to cart
                for (let item of input.items) {
                    yield rc.addToCart(output.cartId, item.productId, item.quantity);
                }
                //commit the cart
                yield rc.commitCart(output.cartId);
                //TODO: get payment address
                output.paymentAddress = '0x0';
                output.success = true;
            }
            return output;
        }), 201);
    }),
};
function validateCheckoutInput(res, input) {
    if (!(0, util_1.validateStoreIdAndKeycard)(res, input))
        return false;
    if (!input.items || !input.items.length) {
        res.status(400).json({
            msg: 'Required: items',
        });
        return false;
    }
    return true;
}
//# sourceMappingURL=checkout.js.map