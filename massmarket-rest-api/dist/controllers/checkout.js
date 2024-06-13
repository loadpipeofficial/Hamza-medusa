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
const viem_1 = require("viem");
exports.checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    doCheckout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const input = body;
            //TODO: REMOVE (dummy checkout)
            const output = {
                success: true,
                contractAddress: '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                amount: '1100000',
                orderId: '0x3DcA1518DB5A058F29EBfDab76739faf8Fb4511a',
                chainId: 11155111,
                ttl: 1,
                currency: '',
            };
            if (!validateCheckoutInput(res, input)) {
                console.log('validation failed');
                return null;
            }
            //get the client
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //do the full checkout
            if (rc) {
                const cartId = yield rc.createCart();
                console.log('CART ID: ', cartId);
                //add a product to cart
                yield rc.addToCart(cartId, '0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642');
                const commitId = yield rc.commitCart(cartId);
                console.log('COMMIT: ', commitId);
                const events = yield rc.pullEvents();
                //parse the events
                for (let n = events.length - 1; n >= 0; n--) {
                    const event = events[n];
                    if ((_a = event === null || event === void 0 ? void 0 : event.cartFinalized) === null || _a === void 0 ? void 0 : _a.cartId) {
                        output.orderId = (0, viem_1.keccak256)(event.cartFinalized.cartId);
                        output.ttl = 1718372232; //event.cartFinalized.ttl;
                        output.amount = '21000000000000000';
                        output.currency = event.cartFinalized.currency;
                    }
                }
                output.success = true;
            }
            console.log('returning output');
            return output;
        }), 200);
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