import React, { useEffect, useState } from 'react';
import { getDefaultWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, optimismSepolia, sepolia } from 'wagmi/chains';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '';
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || '';

export const darkThemeConfig = darkTheme({
    accentColor: '#94D42A',
    accentColorForeground: 'white',
    borderRadius: 'large',
    fontStack: 'system',
    overlayBlur: 'small',
});
export const { chains, publicClient, webSocketPublicClient } = configureChains(
    [optimismSepolia, sepolia],
    [
        alchemyProvider({
            apiKey: ALCHEMY_API_KEY,
        }),
        jsonRpcProvider({
            rpc: () => {
                return {
                    http: 'https://opt-sepolia.g.alchemy.com/v2/VrVSe8y0T1pBnrwgzgFr2vtHl9Dtj3Fn',
                };
            },
        }),
        publicProvider(),
    ]
);

export const SwitchNetwork = () => {
    const { chain } = useNetwork();
    const { error, isLoading, pendingChainId, switchNetwork } =
        useSwitchNetwork();

    if (!chain) return <div>Loading...</div>;

    return (
        <div>
            <p>The currently selected chain is {chain.name}</p>
            <button
                disabled={!switchNetwork || isLoading}
                onClick={() => switchNetwork(11155111)}
            >
                Switch to Sepolia testnet or{' '}
            </button>
            <button
                disabled={!switchNetwork || isLoading}
                onClick={() => switchNetwork(11155420)}
            >
                Switch to Optimism Sepolia testnet
            </button>
            {error && <p>Error: {error.message}</p>}
            {isLoading && pendingChainId && (
                <p>Switching to chain ID {pendingChainId}...</p>
            )}
        </div>
    );
};

const { connectors } = getDefaultWallets({
    appName: 'op_sep',
    projectId: PROJECT_ID,
    chains,
});
// Config in v1.x.wagmi Client in 2.x.wagmi?
export const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});
