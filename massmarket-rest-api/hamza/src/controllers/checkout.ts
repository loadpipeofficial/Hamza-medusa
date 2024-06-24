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

const FAKE_CHECKOUT = 1;

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
                            '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                        amount: '21000000000',
                        orderId: bytesToHex(randomBytes(32)),
                        chainId: 11155111,
                        ttl: 0,
                        currency: '',
                    };
                } else {
                    //validate input
                    if (!validateCheckoutInput(res, input)) {
                        console.log('validation failed');
                        return null;
                    }

                    //create default output
                    const checkoutOutput: ICheckoutOutput = {
                        success: false,
                        contractAddress:
                            '0x0DcA1518DB5A058F29EBfDab76739faf8Fb4544c',
                        payeeAddress: '0x0',
                        isPaymentEndpoint: true,
                        paymentId: '0x0',
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
                        checkoutOutput.orderId = bytesToHex(event.orderHash);
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
