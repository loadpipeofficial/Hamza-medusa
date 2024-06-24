// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function formatEthAdd(walletAdd) {
    return `${walletAdd.slice(0, 6)}...${walletAdd.slice(-4)}`;
}
export function formatPK(pk) {
    return `${pk.slice(0, 3)}...${pk.slice(-3)}`;
}
export const parseMetadata = (metadata) => {
    const textDecoder = new TextDecoder();
    const result = textDecoder.decode(metadata);
    const _meta = JSON.parse(result);
    return _meta;
};
export const decodeMetadata = (metadata) => {
    const textDecoder = new TextDecoder();
    return textDecoder.decode(metadata);
};
export const createQueryString = (name, value, searchParams) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
};
//# sourceMappingURL=utils.js.map