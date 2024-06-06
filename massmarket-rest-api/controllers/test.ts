import { Request, Response } from 'express';
//import { RelayClientWrapper } from '../massmarket/client';
import { serveRequest } from './util';

export const testController = {
    get: async (req: Request, res: Response) => {
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
    },
};
