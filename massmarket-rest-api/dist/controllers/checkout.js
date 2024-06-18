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
const viem_1 = require("viem");
const crypto_1 = require("crypto");
exports.checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    doCheckout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const input = body;
            console.log(JSON.stringify(body));
            console.log(JSON.stringify(input));
            //TODO: REMOVE (dummy checkout)
            const output = {
                success: true,
                contractAddress: '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                amount: '21000000000',
                orderId: (0, viem_1.bytesToHex)((0, crypto_1.randomBytes)(32)),
                chainId: 11155111,
                ttl: 0,
                currency: '',
            };
            if (!validateCheckoutInput(res, input)) {
                console.log('validation failed');
                return null;
            }
            /*
            const output: ICheckoutOutput = {
                success: false,
                contractAddress:
                    '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                amount: '0',
                orderId: '0x',
                chainId: 11155111,
                ttl: 0,
                currency: '',
            };


            //get the client
            const rc = await RelayClientWrapper.get(
                ENDPOINT,
                input.storeId,
                input.keycard
            );

            //do the full checkout
            if (rc) {
                const cartId = await rc.createCart();
                console.log('CART ID: ', cartId);

                //add products to cart
                for(const item of input.items) {
                    await rc.addToCart(
                        cartId,
                        item.productId, //'0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642'
                        item.quantity
                    );
                }

                //commit cart
                await rc.commitCart(cartId);
                const events = await rc.pullEvents();

                //parse the events
                for (let n = events.length - 1; n >= 0; n--) {
                    const event = events[n];
                    if (event?.cartFinalized?.cartId) {
                        output.orderId = keccak256(
                            event.cartFinalized.cartId
                        );
                        output.ttl = event.cartFinalized.paymentTtl;
                        output.amount = event.cartFinalized.totalInCrypto;
                        output.currency = '';
                        output.success = true;
                    }
                }
            }
            */
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