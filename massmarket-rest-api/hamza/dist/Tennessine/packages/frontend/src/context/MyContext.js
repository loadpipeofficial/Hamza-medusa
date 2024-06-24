// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAccount, useEnsName, useBalance, useEnsAvatar, useWalletClient, } from "wagmi";
import { RelayClient } from "@massmarket/client";
import { hardhat, sepolia, mainnet } from "viem/chains";
import { http, createPublicClient, hexToBytes, bytesToHex } from "viem";
import { useAuth } from "@/context/AuthContext";
import * as abi from "@massmarket/contracts";
import { IStatus } from "../types";
import { privateKeyToAccount } from "viem/accounts";
export const MyContext = createContext({
    walletAddress: null,
    balance: null,
    avatar: null,
    name: null,
    relayClient: null,
    publicClient: null,
    inviteSecret: null,
    clientWallet: null,
    keyCardEnrolled: null,
    setKeyCardEnrolled: () => { },
    setInviteSecret: () => { },
    setWallet: () => { },
    getTokenInformation: () => new Promise(() => {
        return { name: "", symbol: "", decimals: 0 };
    }),
});
export const MyContextProvider = (props) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [relayClient, setRelayClient] = useState(null);
    const [balance, setBalance] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [ensName, setEnsName] = useState(null);
    const [clientWallet, setWallet] = useState(null);
    const [inviteSecret, setInviteSecret] = useState(null);
    const { address, isConnected } = useAccount();
    const name = useEnsName({ address })?.data || null;
    const ensAvatar = useEnsAvatar({ name: ensName })?.data;
    const { data: _wallet, status: walletStatus } = useWalletClient();
    const { setIsAuthenticated } = useAuth();
    const [keyCardEnrolled, setKeyCardEnrolled] = useState(null);
    if (typeof window == "undefined") {
        console.warn("not a browser session");
        return;
    }
    const shopId = localStorage.getItem("shopId") || process.env.NEXT_PUBLIC_STORE_ID;
    if (!shopId) {
        throw Error("missing shop ID");
    }
    const savedKC = localStorage.getItem("keyCard");
    useEffect(() => {
        if (savedKC) {
            setKeyCardEnrolled(savedKC);
        }
    }, []);
    let usedChain;
    const chainName = process.env.NEXT_PUBLIC_CHAIN_NAME;
    switch (chainName) {
        case "hardhat":
            usedChain = hardhat;
            break;
        case "sepolia":
            usedChain = sepolia;
            break;
        case "mainnet":
            usedChain = mainnet;
            break;
        default:
            throw new Error(`unhandled chain name ${chainName}`);
    }
    const publicClient = createPublicClient({
        chain: usedChain,
        transport: http(),
    });
    const { data } = useBalance({
        address: address,
    });
    const getTokenInformation = async (erc20Addr) => {
        const name = (await publicClient.readContract({
            address: erc20Addr,
            abi: abi.ERC20,
            functionName: "name",
            args: [],
        }));
        const symbol = (await publicClient.readContract({
            address: erc20Addr,
            abi: abi.ERC20,
            functionName: "symbol",
            args: [],
        }));
        const decimals = (await publicClient.readContract({
            address: erc20Addr,
            abi: abi.ERC20,
            functionName: "decimals",
            args: [],
        }));
        return { name, symbol, decimals };
    };
    useEffect(() => {
        if (_wallet && walletStatus == "success") {
            setWallet(_wallet);
        }
    }, [walletStatus]);
    useEffect(() => {
        if (clientWallet) {
            address && setWalletAddress(address);
            data?.formatted && setBalance(data.formatted);
            ensAvatar && setAvatar(ensAvatar);
            ensName && setEnsName(name);
        }
    }, [isConnected, clientWallet, data, ensAvatar, name]);
    useEffect(() => {
        let keyCard = new Uint8Array(32);
        crypto.getRandomValues(keyCard);
        if (!keyCardEnrolled && !savedKC) {
            localStorage.setItem("keyCardToEnroll", bytesToHex(keyCard));
        }
        else {
            keyCard = hexToBytes(savedKC);
        }
        const privateKey = inviteSecret ? inviteSecret : bytesToHex(keyCard);
        const user = {
            relayEndpoint: process.env.NEXT_PUBLIC_RELAY_ENDPOINT ||
                "wss://relay-beta.mass.market/v1",
            keyCardWallet: privateKeyToAccount(privateKey),
            shopId: shopId,
            chain: usedChain,
            keyCardEnrolled: !!keyCardEnrolled,
        };
        const _relayClient = new RelayClient(user);
        setRelayClient(_relayClient);
        if (keyCardEnrolled) {
            (async () => {
                console.log("connecting to client...");
                const authenticated = await _relayClient.connect();
                console.log({ authenticated });
                if (authenticated) {
                    setIsAuthenticated(IStatus.Complete);
                }
                else {
                    setIsAuthenticated(IStatus.Failed);
                }
            })();
        }
        console.log(`relay client set ${user.relayEndpoint} with shop: ${shopId}`);
    }, [keyCardEnrolled]);
    const value = {
        name,
        walletAddress,
        balance,
        avatar,
        ensName,
        relayClient,
        publicClient,
        inviteSecret,
        clientWallet,
        keyCardEnrolled,
        setInviteSecret,
        setWallet,
        getTokenInformation,
        setKeyCardEnrolled,
    };
    return (<MyContext.Provider value={value}>{props.children}</MyContext.Provider>);
};
export const useMyContext = () => useContext(MyContext);
//# sourceMappingURL=MyContext.js.map