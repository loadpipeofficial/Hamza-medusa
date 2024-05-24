'use client';
import { Cart, PaymentSession } from '@medusajs/medusa';
import { Button } from '@medusajs/ui';
import React, { useState, useEffect, useRef } from 'react';
import ErrorMessage from '../error-message';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { ITransactionOutput, IMultiPaymentInput } from 'web3';
import { MasterSwitchClient } from 'web3/master-switch-client';
import { ethers, BigNumberish } from 'ethers';
import { useCompleteCart, useUpdateCart } from 'medusa-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { clearCart } from '@lib/data';
import { getCurrencyPrecision } from 'currency.config';

const MEDUSA_SERVER_URL =
    process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000';

type PaymentButtonProps = {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
};

// Extend the Window interface
declare global {
    interface Window {
        ethereum: ethers.Eip1193Provider;
    }
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ cart }) => {
    const notReady =
        !cart ||
        !cart.shipping_address ||
        !cart.billing_address ||
        !cart.email ||
        cart.shipping_methods.length < 1
            ? true
            : false;

    //TODO: what we need this fo?
    const paymentSession = cart.payment_session as PaymentSession;

    return <CryptoPaymentButton notReady={notReady} cart={cart} />;
};

// TODO: (For G) Typescriptify this function with verbose error handling
const CryptoPaymentButton = ({
    cart,
    notReady,
}: {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
    notReady: boolean;
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const completeCart = useCompleteCart(cart.id);
    const updateCart = useUpdateCart(cart.id);
    const { openConnectModal } = useConnectModal();
    const { connector: activeConnector, isConnected } = useAccount();
    const router = useRouter();
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect({
            connector: new InjectedConnector(),
        });

    // useEffect hook to check if connection status changes
    // if !isConnected, connect to wallet
    useEffect(() => {
        if (!isConnected) {
            if (openConnectModal) openConnectModal();
        }
    }, [openConnectModal, isConnected]);

    const translateToNativeAmount = (order: any, chainId: number) => {
        const { amount, currency_code } = order;
        const precision = getCurrencyPrecision(currency_code, chainId);
        const adjustmentFactor = Math.pow(10, precision.native - precision.db);
        const nativeAmount = BigInt(amount) * BigInt(adjustmentFactor);
        return ethers.toBigInt(nativeAmount);
    };

    const createSwitchInput = async (
        data: any,
        payer: string,
        chainId: number
    ) => {
        //TODO: typeSafety of the data
        if (data.orders) {
            const switchInput: IMultiPaymentInput[] = [];
            data.orders.forEach((o: any) => {
                o.amount = translateToNativeAmount(o, chainId);
                const input: IMultiPaymentInput = {
                    currency: o.currency_code,
                    receiver: o.wallet_address,
                    payments: [
                        {
                            id: ethers.toBigInt(
                                ethers.keccak256(ethers.toUtf8Bytes(o.order_id))
                            ),
                            payer: payer,
                            amount: o.amount,
                            currency: o.currency_code,
                            receiver: o.wallet_address,
                        },
                    ],
                };
                switchInput.push(input);
            });

            return switchInput;
        }
        return [];
    };

    const cartRef = useRef<
        Array<{ variant_id: string; reduction_quantity: number }>
    >(
        cart.items.map((item) => ({
            variant_id: item.variant_id,
            reduction_quantity: item.quantity, // or any logic to determine the reduction quantity
        }))
    );

    /**
     * Sends the given payment data to the Switch by way of the user's connnected
     * wallet.
     * @param data
     * @returns {transaction_id, payer_address, escrow_contract_address, success }
     */
    const doWalletPayment = async (data: any) => {
        try {
            //get provider and such
            const rawchainId = await window.ethereum.request({
                method: 'eth_chainId',
            });

            //get chain id
            const chainId = parseInt(rawchainId, 16);
            const provider = new ethers.BrowserProvider(
                window.ethereum,
                chainId
            );
            const signer: ethers.Signer = await provider.getSigner();

            //create the contract client
            const escrow_contract_address =
                '0x0Ac64d6d09bB3B7ab6999f9BE3b9f017220fb1e9';
            const switchClient: MasterSwitchClient = new MasterSwitchClient(
                provider,
                signer,
                '0x0Ac64d6d09bB3B7ab6999f9BE3b9f017220fb1e9' //TODO: get contract address dynamically
            );

            //create the inputs
            const switchInput: IMultiPaymentInput[] = await createSwitchInput(
                data,
                await signer.getAddress(),
                chainId
            );

            //send payment to switch
            console.log(switchInput);
            const output: ITransactionOutput =
                await switchClient.placeMultiplePayments(switchInput);

            console.log(output);
            const transaction_id = output.transaction_id;
            const payer_address = output.receipt.from;

            return {
                transaction_id,
                payer_address,
                escrow_contract_address,
                success: transaction_id && transaction_id.length ? true : false,
            };
        } catch (e) {
            console.error('error has occured during transaction', e);
            setErrorMessage('Checkout was not completed.');
            setSubmitting(false);
        }

        return {};
    };

    /**
     * Retrieves data from server that will be needed for checkout, including currencies,
     * amounts, wallet addresses, etc.
     * @param cartId
     * @returns
     */
    const retrieveCheckoutData = async (cartId: string) => {
        const response = await axios.get(
            `${MEDUSA_SERVER_URL}/custom/checkout?cart_id=${cartId}`
        );
        return response.status == 200 && response.data ? response.data : {};
    };

    /**
     * Redirects to order confirmation on successful checkout
     * @param orderId
     * @param countryCode
     */
    const redirectToOrderConfirmation = (
        orderId: string,
        countryCode: string
    ) => {
        //finally, if all good, redirect to order confirmation page
        if (orderId?.length) {
            router.push(`/${countryCode}/order/confirmed/${orderId}`);
        }
    };

    /**
     * Does most of checkout:
     * - sends payment to wallet
     * - updates orders & payments after successful wallet payment
     * - update inventory post-checkout
     * - clears the cart
     * - redirects to the order confirmation
     * @param cartId
     */
    const completeCheckout = async (cartId: string) => {
        //retrieve data (cart id, currencies, amounts etc.) that will be needed for wallet checkout
        const data = await retrieveCheckoutData(cartId);

        if (data) {
            //this sends the payment to the wallet for on-chain processing
            const output = await doWalletPayment(data);
            console.log(
                `${JSON.stringify(cartRef)} cartref ${cartRef.current} ${typeof cartRef.current}`
            );
            //finalize the checkout, if wallet payment was successful
            if (output.success) {
                const response = await axios.post(
                    `${MEDUSA_SERVER_URL}/custom/checkout`,
                    {
                        cartProducts: JSON.stringify(cartRef.current),
                        cart_id: data.cart_id,
                        transaction_id: data.transaction_id,
                        payer_address: data.payer_address,
                        escrow_contract_address: data.escrow_contract_address,
                    }
                );

                console.log(response.status);
                //TODO: examine response

                //country code needed for redirect (get before killing cart)
                const countryCode =
                    cart.shipping_address?.country_code?.toLowerCase();

                //clear cart
                clearCart();

                //redirect to confirmation page
                redirectToOrderConfirmation(
                    data?.orders?.length ? data.orders[0].order_id : null,
                    countryCode
                );
            } else {
                setSubmitting(false);
                setErrorMessage('Checkout was not completed.');
            }
        } else {
            throw new Error('Checkout failed to complete.');
        }
    };

    /**
     * Handles the click of the checkout button
     * @returns
     */
    const handlePayment = async () => {
        try {
            setSubmitting(true);

            //here connect wallet and sign in, if not connected
            connect();

            updateCart.mutate(
                { context: {} },
                {
                    onSuccess: ({}) => {
                        //this calls the CartCompletion routine
                        completeCart.mutate(void 0, {
                            onSuccess: ({ data, type }) => {
                                //TODO: data is undefined
                                try {
                                    //this does wallet payment, and everything after
                                    completeCheckout(cart.id);
                                } catch (e) {
                                    console.error(e);
                                    setSubmitting(false);
                                    setErrorMessage(
                                        'Checkout was not completed.'
                                    );
                                }
                            },
                            onError: ({}) => {
                                setSubmitting(false);
                                setErrorMessage('Checkout was not completed.');
                            },
                        });
                    },
                }
            );

            return;
        } catch (e) {
            console.error(e);
            setSubmitting(false);
            setErrorMessage('Checkout was not completed.');
        }
    };

    return (
        <>
            <Button
                size="large"
                isLoading={submitting}
                disabled={notReady}
                color="white"
                onClick={handlePayment}
            >
                Place Order: Crypto
            </Button>
            <ErrorMessage error={errorMessage} />
        </>
    );
};

export default PaymentButton;
