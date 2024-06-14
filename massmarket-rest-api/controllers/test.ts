import { Request, Response } from 'express';
import { keccak256 } from 'viem';
import { RelayClientWrapper } from '../massmarket/client';
import { ENDPOINT, serveRequest } from './util';

export const testController = {
    enrollNewKeycard: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async () => {
                /*
                const rc = new RelayClientWrapper(
                    ENDPOINT,
                    '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6',
                    '0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b'
                    //0x80338c01e519d6f980e6fdaad3b7c76bfc9909a46ce6d4096b7a4a39c2c82214
                );
                */

                //await rc.writeManifest();

                const rc = await RelayClientWrapper.enrollNewKeycard(
                    ENDPOINT,
                    '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6'
                );

                console.log('new keycard enrolled: ', rc.keyCardToString());

                return {
                    success: true,
                };
            },
            200
        ); /*
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
    },

    connectNewKC: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async () => {
                const rc = new RelayClientWrapper(
                    ENDPOINT,
                    '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6',
                    //'0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b'
                    '0x80338c01e519d6f980e6fdaad3b7c76bfc9909a46ce6d4096b7a4a39c2c82214'
                );

                //await rc.writeManifest();
                //console.log(await rc.createCart());
                await rc.pullEvents();

                return {
                    success: true,
                };
            },
            200
        );
    },

    checkout: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async () => {
                const rc = new RelayClientWrapper(
                    ENDPOINT,
                    '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6',
                    '0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b'
                );

                //await rc.writeManifest();
                const cartId = await rc.createCart();
                console.log('CART ID: ', cartId);

                //add a product to cart
                await rc.addToCart(
                    cartId,
                    '0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642'
                );

                const commitId = await rc.commitCart(cartId);
                console.log('COMMIT: ', commitId);

                const events = await rc.pullEvents();

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
                    if (event?.cartFinalized?.cartId) {
                        output.orderId = keccak256(event.cartFinalized.cartId);
                        output.ttl = 1718372232; //event.cartFinalized.ttl;
                        output.amount = event.cartFinalized.totalInCrypto;
                        output.currency = '';
                        output.success = true;

                        console.log(event.cartFinalized);
                    }
                }

                console.log('returning output', output);
                return output;
            },
            200
        );
    },

    checkout2: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async () => {
                const rc = new RelayClientWrapper(
                    ENDPOINT,
                    '0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6',
                    '0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b'
                );

                //await rc.writeManifest();
                //console.log('CART ID: ', await rc.createCart());

                //add a product to cart
                //await rc.addToCart(
                //    '0xa639fccce044c4539ddf0db8500d95cd3c1a5e64b2cb45a28f170aa3967d3b91',
                //    '0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642'
                //);

                const commitId = await rc.commitCart(
                    '0xa639fccce044c4539ddf0db8500d95cd3c1a5e64b2cb45a28f170aa3967d3b91'
                );
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
            },
            200
        );
    },
};
