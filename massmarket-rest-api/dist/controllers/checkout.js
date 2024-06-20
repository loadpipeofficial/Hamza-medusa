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
function isZeroAddress(value) {
    if (!value)
        return true;
    value = value.trim();
    if (value.length < 1)
        return true;
    if (value.replace('0', '') === 'x')
        return true;
    return false;
}
exports.checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    doCheckout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            const input = body;
            console.log(JSON.stringify(body));
            console.log(JSON.stringify(input));
            //TODO: REMOVE (dummy checkout)
            /*
            const output: ICheckoutOutput = {
                success: true,
                contractAddress:
                    '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                amount: '21000000000',
                orderId: bytesToHex(randomBytes(32)),
                chainId: 11155111,
                ttl: 0,
                currency: '',
            };*/
            //validate input
            if (!validateCheckoutInput(res, input)) {
                console.log('validation failed');
                return null;
            }
            //create default output
            const output = {
                success: false,
                contractAddress: '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                amount: '0',
                orderId: '0x',
                chainId: 11155111,
                ttl: 0,
                currency: '',
            };
            //get the client
            const rc = yield client_1.RelayClientWrapper.get(util_1.ENDPOINT, input.storeId, input.keycard);
            //do the full checkout
            if (rc) {
                const cartId = yield rc.createCart();
                console.log('CART ID: ', cartId);
                return null;
                //add products to cart
                for (const item of input.items) {
                    yield rc.addToCart(cartId, item.productId, //'0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642'
                    item.quantity);
                }
                //commit cart
                if (isZeroAddress(input.paymentCurrency))
                    input.paymentCurrency = undefined;
                yield rc.commitCart(cartId, input.paymentCurrency);
                const events = yield rc.pullEvents();
                //parse the events
                for (let n = events.length - 1; n >= 0; n--) {
                    const event = events[n];
                    if ((_a = event === null || event === void 0 ? void 0 : event.cartFinalized) === null || _a === void 0 ? void 0 : _a.cartId) {
                        output.orderId = (0, viem_1.keccak256)(event.cartFinalized.cartId);
                        output.ttl = event.cartFinalized.paymentTtl;
                        output.amount = event.cartFinalized.totalInCrypto;
                        output.currency = (_b = input.paymentCurrency) !== null && _b !== void 0 ? _b : '';
                        output.success = true;
                    }
                }
            }
            console.log('returning output', output);
            return output;
        }), 200);
    }),
};
function validateCheckoutInput(res, input) {
    if (!(0, util_1.validateStoreIdAndKeycard)(res, input))
        return false;
    if (!input.items || !input.items.length) {
        console.log('items missing');
        //res.status(400).json({
        //    msg: 'Required: items',
        //});
        return false;
    }
    return true;
}
//# sourceMappingURL=checkout.js.map