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
exports.testController = {
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        /*
        serveRequest(
            req,
            res,
            async () => {
                const rc = await RelayClientWrapper.login(
                    'relay-beta.mass.market/v1',
                    '0x03f3ab83d5270c9cfe5b4fa78815c503d4d7946d202a51f383946b9dc63a75cc',
                    '0x65c1196c888ae6bb110077201346dfe426b220ce1d49a366102a2d85e7ad0e35'
                );
                console.log('got the thing');
                return {
                    success: true,
                };
            },
            200
        );
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