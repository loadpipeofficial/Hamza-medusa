// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: MIT
import { bytesToHex, hexToBytes, } from "viem";
import * as abi from "@massmarket/contracts";
import { eventId } from "./utils.js";
import { privateKeyToAccount } from "viem/accounts";
export class BlockchainClient {
    shopId;
    constructor(shopId = bytesToHex(eventId())) {
        this.shopId = shopId;
    }
    createShop(wallet) {
        return wallet.writeContract({
            address: abi.addresses.ShopReg,
            abi: abi.ShopReg,
            functionName: "mint",
            args: [BigInt(this.shopId), wallet.account.address],
        });
    }
    createInviteSecret(wallet, token) {
        // Save the public key onchain
        return wallet.writeContract({
            address: abi.addresses.ShopReg,
            abi: abi.ShopReg,
            functionName: "publishInviteVerifier",
            args: [BigInt(this.shopId), token],
        });
    }
    async redeemInviteSecret(secret, wallet) {
        const message = "enrolling:" + wallet.account.address.toLowerCase();
        const tokenAccount = privateKeyToAccount(secret);
        const sig = await tokenAccount.signMessage({
            message,
        });
        const sigBytes = hexToBytes(sig);
        const v = sigBytes[64];
        const r = bytesToHex(sigBytes.slice(0, 32));
        const s = bytesToHex(sigBytes.slice(32, 64));
        return wallet.writeContract({
            address: abi.addresses.ShopReg,
            abi: abi.ShopReg,
            functionName: "redeemInvite",
            args: [BigInt(this.shopId), v, r, s, wallet.account.address],
        });
    }
}
//# sourceMappingURL=blockchainClient.js.map