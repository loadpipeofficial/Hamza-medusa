import { Request, Response } from 'express';
import { RelayClientWrapper } from '../massmarket/client';
import { ENDPOINT, serveRequest } from './util';

export const test2Controller = {
    get: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async () => {
                /*
                const rc = new RelayClientWrapper(
                    ENDPOINT,
                    '0xb3196680cda22f98635bbc104e1f5e829ee8e71db27b5d6c9241d0e20c64e109',
                    '0x7e683da67b0079c20a4856bfbd92b3c90b63f51bd57f7a9d2643aaba5c6b659b'
                );

                await rc.writeManifest();
                */

                await RelayClientWrapper.get(
                    ENDPOINT,
                    `0x${req.query.id}`,
                    `0x${req.query.kc}`
                );

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
};
