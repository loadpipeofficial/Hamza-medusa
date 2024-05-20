'use client';
import { useState, useEffect } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
    createAuthenticationAdapter,
    RainbowKitAuthenticationProvider,
    RainbowKitProvider,
    AuthenticationStatus,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import {
    chains,
    config,
    darkThemeConfig,
} from '@/components/providers/rainbowkit/rainbowkit-utils/rainbow-utils';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();
import { SiweMessage } from 'siwe';
import { getCustomer, getToken } from '@lib/data';
import { revalidateTag } from 'next/cache';
import { signOut } from '@modules/account/actions';
import { cookies } from 'next/headers';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const MEDUSA_SERVER_URL =
    process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000';
const VERIFY_MSG = `${MEDUSA_SERVER_URL}/custom/verify`;
const GET_NONCE = `${MEDUSA_SERVER_URL}/custom/nonce`;

async function sendVerifyRequest(message: any, signature: any) {
    return await axios({
        method: 'post',
        data: {
            message,
            signature,
        },
        url: `${VERIFY_MSG}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
}

export function RainbowWrapper({ children }: { children: React.ReactNode }) {
    const { setCustomerAuthData, token, wallet_address, status, setStatus } =
        useCustomerAuthStore();
    const router = useRouter();

    useEffect(() => {
        // getCustomer()
        //     .then((customer) => {
        //         setStatus(
        //             customer?.has_account ? 'authenticated' : 'unauthenticated'
        //         );
        //     })
        //     .catch(() => {
        //         console.log('rainbow-provider: customer not found');
        //     });

        getCustomer().then((customer) => {
            if (!customer) {
                setStatus('unauthenticated');
                setCustomerAuthData({
                    wallet_address: null,
                    customer_id: '',
                    preferred_currency_code: null,
                    token: null,
                });
            }
        });

        !wallet_address && setStatus('unauthenticated');
        wallet_address && setStatus('authenticated');
    }, [wallet_address]);

    const walletSignature = createAuthenticationAdapter({
        getNonce: async () => {
            console.log('FETCHING NONCE.....');
            const response = await fetch(GET_NONCE);
            const data = await response.text();
            console.log('NONCE DATA: ', data);
            return data;
        },

        createMessage: ({ nonce, address, chainId }) => {
            console.log(
                `Creating message with nonce: ${nonce}, address: ${address}, chainId: ${chainId}`
            );
            const message = new SiweMessage({
                domain: window.location.host,
                address,
                statement: 'Sign in with Ethereum to the app.',
                uri: window.location.origin,
                version: '1',
                chainId,
                nonce,
            });
            console.log('Message Created', message);
            return message;
        },

        getMessageBody: ({ message }) => {
            console.log('Preparing message:', message);
            const preparedMessage = message.prepareMessage();
            console.log('Message prepared:', preparedMessage);
            return preparedMessage;
        },

        verify: async ({ message, signature }) => {
            try {
                console.log(
                    'Verifying message with signature:',
                    message,
                    signature
                );
                const response = await sendVerifyRequest(message, signature);

                let data = response.data;
                if (data.status == true && data.data?.created == true) {
                    //if just creating, then a second request is needed
                    const authResponse = await sendVerifyRequest(
                        message,
                        signature
                    );
                    data = authResponse.data;
                }

                if (data.status == true) {
                    const tokenResponse = await getToken({
                        wallet_address: message.address,
                        email: data.data.email,
                        password: '',
                    });
                    console.log('token response is ', tokenResponse);
                    Cookies.set('_medusa_jwt', tokenResponse);
                    setStatus('authenticated');
                    setCustomerAuthData({
                        wallet_address: message.address,
                        customer_id: data.data.customer_id,
                        preferred_currency_code:
                            data.data.preferred_currency.code,
                        token: tokenResponse,
                    });
                } else {
                    setStatus('unauthenticated');
                    throw new Error(data.message);
                }

                return false;
            } catch (e) {
                console.error('Error in signing in:', e);
                return false;
            }
        },

        signOut: async () => {
            setStatus('unauthenticated');
            setCustomerAuthData({
                token: null,
                wallet_address: null,
                customer_id: '',
                preferred_currency_code: null,
            });
            await signOut();
            router.replace('/');
            return;
        },
    });

    return (
        <div>
            <WagmiConfig config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitAuthenticationProvider
                        adapter={walletSignature}
                        status={status}
                    >
                        <RainbowKitProvider
                            theme={darkThemeConfig}
                            chains={chains}
                            modalSize="compact"
                        >
                            {children}
                        </RainbowKitProvider>
                    </RainbowKitAuthenticationProvider>
                </QueryClientProvider>
            </WagmiConfig>
        </div>
    );
}
