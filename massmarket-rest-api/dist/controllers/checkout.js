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
exports.checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const input = body;
            //TODO: REMOVE (dummy checkout)
            const output = {
                success: true,
                receiverAddress: '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                amount: BigInt(11),
                orderId: '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                chainId: 11155111,
                ttl: 1,
            };
            if (!validateCheckoutInput(res, input))
                return null;
            /*
            //get the client
            const rc = await RelayClientWrapper.get(
                ENDPOINT,
                input.storeId,
                input.keycard
            );

            //do the full checkout
            if (rc) {
                //create the cart
                output.cartId = await rc.createCart();

                //add items to cart
                for (let item of input.items) {
                    await rc.addToCart(
                        output.cartId,
                        item.productId,
                        item.quantity
                    );
                }

                //commit the cart
                await rc.commitCart(output.cartId);

                output.paymentAddress =
                    '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c';
                output.success = true;
            }
            */
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