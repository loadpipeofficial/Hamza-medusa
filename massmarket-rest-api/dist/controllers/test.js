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
exports.testController = void 0;
const client_1 = require("../massmarket/client");
const util_1 = require("./util");
exports.testController = {
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            const rc = new client_1.RelayClientWrapper(util_1.ENDPOINT, '0xb3196680cda22f98635bbc104e1f5e829ee8e71db27b5d6c9241d0e20c64e109', '0x7e683da67b0079c20a4856bfbd92b3c90b63f51bd57f7a9d2643aaba5c6b659b');
            yield rc.writeManifest();
            return {
                success: true,
            };
        }), 200); /*
            console.log('creating cart...');
            //const cartId = await rc.createCart();
            //console.log('cart id', cartId);
            //await rc.pullEvents();

            console.log('abandon cart');
            rc.cartId =
                '0x36dd49db45b8d3f177bb5c5346a672d783acbaaff647bce3a2811e24447752a5';
            await rc.abandonCart();
            const id = await rc.commitCartEth();
            */
        //console.log('rc', cartId);
    }),
};
//# sourceMappingURL=test.js.map