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
const viem_1 = require("viem");
const client_1 = require("../massmarket/client");
const util_1 = require("./util");
exports.testController = {
    //0x0585a14d58822b6521c55e601a001589552f02eb4c9f8a744e4e2f3f9bc9b2d4
    enrollNewKeycard: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            /*
            const rc = new RelayClientWrapper(
                ENDPOINT,
                '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6',
                '0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b'
                //0x80338c01e519d6f980e6fdaad3b7c76bfc9909a46ce6d4096b7a4a39c2c82214
            );
            */
            //await rc.writeManifest();
            const rc = yield client_1.RelayClientWrapper.enrollNewKeycard(util_1.ENDPOINT, 
            //'0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6'
            '0xec06f1f5463714196949f148c3b843422ef893b5f4c6240e24c6ad8955887142');
            console.log('new keycard enrolled: ', rc.keyCardToString());
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
    writeManifest: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            const rc = new client_1.RelayClientWrapper(util_1.ENDPOINT, '0xec06f1f5463714196949f148c3b843422ef893b5f4c6240e24c6ad8955887142', '0x0585a14d58822b6521c55e601a001589552f02eb4c9f8a744e4e2f3f9bc9b2d4'
            //0x80338c01e519d6f980e6fdaad3b7c76bfc9909a46ce6d4096b7a4a39c2c82214
            );
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
    connectNewKC: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            const rc = new client_1.RelayClientWrapper(util_1.ENDPOINT, '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6', 
            //'0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b'
            '0x80338c01e519d6f980e6fdaad3b7c76bfc9909a46ce6d4096b7a4a39c2c82214');
            //await rc.writeManifest();
            //console.log(await rc.createCart());
            yield rc.pullEvents();
            return {
                success: true,
            };
        }), 200);
    }),
    checkout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const rc = new client_1.RelayClientWrapper(util_1.ENDPOINT, '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6', '0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b');
            //await rc.writeManifest();
            const cartId = yield rc.createCart();
            console.log('CART ID: ', cartId);
            //add a product to cart
            yield rc.addToCart(cartId, '0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642');
            const commitId = yield rc.commitCart(cartId);
            console.log('COMMIT: ', commitId);
            const events = yield rc.pullEvents();
            const output = {
                orderId: '',
                ttl: 0,
                currency: '',
                success: false,
                amount: '',
            };
            //parse the events
            for (let n = events.length - 1; n >= 0; n--) {
                const event = events[n];
                if ((_a = event === null || event === void 0 ? void 0 : event.cartFinalized) === null || _a === void 0 ? void 0 : _a.cartId) {
                    output.orderId = (0, viem_1.keccak256)(event.cartFinalized.cartId);
                    output.ttl = event.cartFinalized.paymentTtl;
                    output.amount = event.cartFinalized.totalInCrypto;
                    output.currency = '';
                    output.success = true;
                    console.log(event.cartFinalized);
                }
            }
            console.log('returning output', output);
            return output;
        }), 200);
    }),
    checkout2: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, () => __awaiter(void 0, void 0, void 0, function* () {
            const rc = new client_1.RelayClientWrapper(util_1.ENDPOINT, '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6', '0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b');
            //await rc.writeManifest();
            //console.log('CART ID: ', await rc.createCart());
            //add a product to cart
            //await rc.addToCart(
            //    '0xa639fccce044c4539ddf0db8500d95cd3c1a5e64b2cb45a28f170aa3967d3b91',
            //    '0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642'
            //);
            const commitId = yield rc.commitCart('0xa639fccce044c4539ddf0db8500d95cd3c1a5e64b2cb45a28f170aa3967d3b91');
            console.log('COMMIT: ', commitId);
            /*
            CartFinalizedId:
            27, 123,   5, 219,  16,  87, 162, 224,
            2, 174, 217,  34, 179, 102,  52,  62,
            3,  91, 219, 134, 114, 239, 242,  22,
            105, 235,  48,  73,  61, 108,  65,  81
            */
            return {
                success: true,
            };
        }), 200);
    }),
};
//# sourceMappingURL=test.js.map