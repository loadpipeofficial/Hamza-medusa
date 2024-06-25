import { Request, Response } from 'express';
import { ENDPOINT, serveRequest, validateStoreIdAndKeycard } from './utils.js';
import {
    IAddItemInput,
    ICheckoutInput,
    ICheckoutOutput,
} from '../entity/index';
import { RelayClientWrapper } from '../massmarket/client.js';
import { bytesToHex, keccak256 } from 'viem';
import { randomBytes } from 'crypto';

function isZeroAddress(value: any): boolean {
    if (!value) return true;

    value = value.trim();
    if (value.length < 1) return true;

    if (value.replaceAll('0', '') === 'x') return true;

    return false;
}

const FAKE_CHECKOUT = 0;

export const checkoutController = {
    //checkout
    //creates cart, adds items to it, and commits it
    doCheckout: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const input: ICheckoutInput = body;
                console.log(JSON.stringify(body));
                console.log(JSON.stringify(input));

                let output = {};
                if (FAKE_CHECKOUT) {
                    output = {
                        success: true,
                        contractAddress:
                            '0x3d9DbbD22E4903274171ED3e94F674Bb52bCF015',
                        payeeAddress:
                            '0x74b7284836f753101bd683c3843e95813b381f18',
                        isPaymentEndpoint: true,
                        paymentId:
                            '0x97ca469adfbee1dae8a61f800dc630eaa30607956273e0b568d3ffe5684c5c8c',
                        amount: '0x0000000000000000000000000000000000000000000000000000000000002904',
                        orderHash:
                            '0x32648674fb21af6d32bd931ec228a8fa82bffd2794cce0474f2744fc1cfda7a1',
                        chainId: 11155111,
                        ttl: 1719308448,
                        currency: '0xbe9fe9b717c888a2b2ca0a6caa639afe369249c5',
                    };
                } else {
                    //validate input
                    if (!validateCheckoutInput(res, input)) {
                        console.log('validation failed');
                        return null;
                    }

                    /*
                    input.storeId =
                        '0x382e9fdf10295e01ad4c7e4dc7e3cecf461016addbe8e15e55736983af39426c';
                    input.keycard =
                        '0x1d24055a9122ab48d62e9f65f37335f844d7de6858edf61d3ca115efbe82be86';
                    input.items[0].productId =
                        '0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024';
                    input.paymentCurrency =
                        '0xbe9fe9b717c888a2b2ca0a6caa639afe369249c5';
                        */

                    //create default output
                    const checkoutOutput: ICheckoutOutput = {
                        success: false,
                        contractAddress:
                            '0x3d9DbbD22E4903274171ED3e94F674Bb52bCF015',
                        payeeAddress: '0x0',
                        isPaymentEndpoint: true,
                        paymentId: '0x0',
                        amount: '0',
                        orderHash: '0x',
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

                        //TODO: handle empty payment currency

                        //add products to cart
                        for (const item of input.items) {
                            console.log('ADDING TO CART ', item.productId);
                            await rc.addToCart(
                                cartId,
                                item.productId,
                                item.quantity
                            );
                        }

                        //commit cart
                        if (isZeroAddress(input.paymentCurrency))
                            input.paymentCurrency = undefined;

                        /*
                        {
                            "paymentId":"l8pGmt++4droph+ADcYw6qMGB5Vic+C1aNP/5WhMXIw=",
                            "subTotal":"0.01",
                            "salesTax":"0.00",
                            "total":"0.01",
                            "ttl":"1719308448",
                            "orderHash":"MmSGdPshr20yvZMewiio+oK//SeUzOBHTydE/Bz9p6E=",
                            "currencyAddr":"vp/ptxfIiKKyygpsqmOa/jaSScU=",
                            "totalInCrypto":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQQ=",
                            "payeeAddr":"dLcoSDb3UxAb1oPDhD6VgTs4Hxg=",
                            "isPaymentEndpoint":true,
                            "shopSignature":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="}
                        */
                        console.log('COMMITTING CART');
                        await rc.commitCart(cartId, input.paymentCurrency);
                        const event = await rc.getCartFinalizedEvent(cartId);
                        checkoutOutput.orderHash = bytesToHex(event.orderHash);
                        checkoutOutput.ttl = parseInt(event.ttl);
                        checkoutOutput.amount = bytesToHex(event.totalInCrypto);
                        checkoutOutput.currency = input.paymentCurrency
                            ? bytesToHex(event.currencyAddr)
                            : '0x0000000000000000000000000000000000000000';
                        checkoutOutput.payeeAddress = bytesToHex(
                            event.payeeAddr
                        );
                        checkoutOutput.paymentId = bytesToHex(event.paymentId);
                        checkoutOutput.isPaymentEndpoint =
                            event.isPaymentEndpoint;
                        checkoutOutput.success = true;

                        output = checkoutOutput;
                    }

                    await rc.disconnect();
                }

                console.log('returning output', output);
                return output;
            },
            200
        );
    },
};

function validateCheckoutInput(res: Response, input: ICheckoutInput): boolean {
    if (!validateStoreIdAndKeycard(res, input)) return false;

    if (!input.items || !input.items.length) {
        console.log('items missing');
        //res.status(400).json({
        //    msg: 'Required: items',
        //});
        return false;
    }
    return true;
}
