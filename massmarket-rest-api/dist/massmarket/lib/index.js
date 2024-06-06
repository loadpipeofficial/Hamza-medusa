"use strict";
// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: MIT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RelayClient_instances, _RelayClient_handlePingRequest, _RelayClient_decodeMessage, _RelayClient_signTypedDataMessage, _RelayClient_signAndSendEvent, _RelayClient_authenticate;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayClient = exports.ManifestField = void 0;
const isows_1 = require("isows");
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const events_1 = require("events");
const compiled_1 = require("./protobuf/compiled");
var mmproto = compiled_1.market.mass;
const constants_1 = require("./protobuf/constants");
const abi = __importStar(require("../abi/index"));
exports.ManifestField = mmproto.UpdateManifest.ManifestField;
const UpdateItemField = mmproto.UpdateItem.ItemField;
function randomBytes(n) {
    const b = new Uint8Array(n);
    crypto.getRandomValues(b);
    return b;
}
function convertFirstCharToLowerCase(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letter) => `${letter.toUpperCase()}`);
}
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
function formatArray(array) {
    if (typeof array[0] === 'number') {
        return array.map((num) => BigInt(num));
    }
    else {
        return array.map((m) => (0, viem_1.bytesToHex)(m));
    }
}
// TODO: there are a lot of assumptions backed in here that should be commented
function formatMessageForSigning(obj) {
    const snakeCase = {};
    for (const [key, value] of Object.entries(obj)) {
        // TODO: Refactor this. Nested ternary operators are hard to read and a nightmare to change.
        snakeCase[camelToSnake(key)] = Array.isArray(value)
            ? formatArray(value)
            : typeof value === 'string'
                ? value
                : typeof value === 'number'
                    ? BigInt(value)
                    : (0, viem_1.bytesToHex)(value);
    }
    return snakeCase;
}
class RelayClient extends events_1.EventEmitter {
    constructor({ relayEndpoint, keyCardWallet, chain = chains_1.hardhat, storeId, keyCardEnrolled, }) {
        super();
        _RelayClient_instances.add(this);
        this.keyCardWallet = keyCardWallet;
        this.endpoint = relayEndpoint;
        this.useTLS = relayEndpoint.startsWith('wss');
        this.chain = chain;
        this.storeId = storeId;
        this.DOMAIN_SEPARATOR = {
            name: 'MassMarket',
            version: '1',
            chainId: this.chain.id,
            verifyingContract: abi.addresses.StoreReg,
        };
        this.firstEvent = null;
        this.keyCardEnrolled = keyCardEnrolled;
    }
    encodeAndSend(encoder, object = {}) {
        if (!object.requestId) {
            object.requestId = RelayClient.requestId();
        }
        const id = object.requestId;
        const payload = encoder.encode(object).finish();
        const typed = new Uint8Array(payload.length + 1);
        typed[0] = constants_1.MESSAGE_TYPES.get(encoder);
        typed.set(payload, 1);
        console.log(`[send] reqId=${(0, viem_1.bytesToHex)(id)} typeCode=${typed[0]}`);
        this.connection.send(typed);
        return new Promise((resolve, reject) => {
            this.once((0, viem_1.bytesToHex)(id), (result) => {
                if (result.error) {
                    const { code, message } = result.error;
                    console.error(`network error[${code}]: ${message}`);
                    reject(result.error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
    createEventStream() {
        let requestId = null;
        const parentInstance = this;
        let enqueueFn;
        const enqueueWrapperFn = (controller) => {
            return (enqueueFn = (event) => {
                requestId = event.requestId;
                controller.enqueue(event);
            });
        };
        return new ReadableStream({
            start(controller) {
                try {
                    if (parentInstance.firstEvent) {
                        requestId = parentInstance.firstEvent.requestId;
                        controller.enqueue(parentInstance.firstEvent);
                        parentInstance.firstEvent = null;
                    }
                    parentInstance.on('event', enqueueWrapperFn(controller));
                }
                catch (error) {
                    console.log({ error });
                }
            },
            pull() {
                if (requestId) {
                    parentInstance.encodeAndSend(mmproto.EventPushResponse, {
                        requestId,
                    });
                }
            },
            cancel() {
                parentInstance.removeListener('event', enqueueFn);
            },
        }, { highWaterMark: 0 });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connection ||
                this.connection.readyState === isows_1.WebSocket.CLOSING ||
                this.connection.readyState === isows_1.WebSocket.CLOSED) {
                this.connection = new isows_1.WebSocket(this.endpoint + '/sessions');
                this.connection.addEventListener('error', (error) => {
                    console.error(`WebSocket error: ${error}`);
                });
                this.connection.addEventListener('message', __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_decodeMessage).bind(this));
            }
            return new Promise((resolve, reject) => {
                if (this.connection.readyState === isows_1.WebSocket.OPEN) {
                    resolve();
                }
                else {
                    this.connection.addEventListener('open', () => __awaiter(this, void 0, void 0, function* () {
                        console.log('ws open');
                        if (this.keyCardEnrolled) {
                            const res = yield __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_authenticate).call(this);
                            if (res) {
                                console.log('authentication success');
                                resolve(res);
                            }
                            else {
                                console.log('authentication failed');
                                reject(res);
                            }
                        }
                        else {
                            resolve('ws connected without authentication');
                        }
                    }));
                }
            });
        });
    }
    disconnect() {
        return new Promise((resolve) => {
            if (typeof this.connection === 'undefined' ||
                this.connection.readyState === isows_1.WebSocket.CLOSED) {
                resolve('already closed');
                return;
            }
            this.connection.addEventListener('close', resolve);
            this.connection.close(1000);
        });
    }
    recoverSignedAddress(cartId, signature) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = {
                CreateCart: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                ],
            };
            const address = yield (0, viem_1.recoverTypedDataAddress)({
                domain: this.DOMAIN_SEPARATOR,
                types,
                primaryType: 'CreateCart',
                message: {
                    event_id: cartId,
                },
                signature,
            });
            return address;
        });
    }
    enrollKeycard(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicKey = (0, viem_1.toBytes)(this.keyCardWallet.publicKey).slice(1);
            const types = {
                Enrollment: [{ name: 'keyCard', type: 'string' }],
            };
            const message = {
                keyCard: Buffer.from(publicKey).toString('hex'),
            };
            // formatMessageForSigning(message); will turn keyCard into key_card
            // const sig = await this.#signTypedDataMessage(types, message);
            const signature = yield wallet.signTypedData({
                types,
                domain: this.DOMAIN_SEPARATOR,
                primaryType: 'Enrollment',
                message,
            });
            const body = JSON.stringify({
                key_card: Buffer.from(publicKey).toString('base64'),
                signature: RelayClient.hexToBase64(signature),
                store_token_id: RelayClient.hexToBase64(this.storeId),
            });
            const endpointURL = new URL(this.endpoint);
            endpointURL.protocol = this.useTLS ? 'https' : 'http';
            endpointURL.pathname += '/enroll_key_card';
            console.log(`posting to ${endpointURL.href}`);
            const response = yield fetch(endpointURL.href, {
                method: 'POST',
                body,
            });
            if (response.ok) {
                this.keyCardEnrolled = true;
            }
            return response;
        });
    }
    createStore() {
        return __awaiter(this, arguments, void 0, function* (id = (0, viem_1.bytesToHex)(RelayClient.eventId()), wallet) {
            const r = yield wallet.writeContract({
                address: abi.addresses.StoreReg,
                abi: abi.StoreReg,
                functionName: 'mint',
                args: [BigInt(id), wallet.account.address],
            });
            this.storeId = id;
            return r;
        });
    }
    createInviteSecret(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.storeId)
                throw new Error('A store ID is needed before creating an invite');
            const privateKey = (0, viem_1.bytesToHex)(randomBytes(32));
            const token = (0, accounts_1.privateKeyToAccount)(privateKey);
            // Save the public key onchain
            yield wallet.writeContract({
                address: abi.addresses.StoreReg,
                abi: abi.StoreReg,
                functionName: 'publishInviteVerifier',
                args: [BigInt(this.storeId), token.address],
            });
            return privateKey;
        });
    }
    redeemInviteSecret(secret, wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.storeId)
                throw new Error('A store ID is need before creating an invite');
            const message = 'enrolling:' + wallet.account.address.toLowerCase();
            const tokenAccount = (0, accounts_1.privateKeyToAccount)(secret);
            const sig = yield tokenAccount.signMessage({
                message,
            });
            const sigBytes = (0, viem_1.hexToBytes)(sig);
            const v = sigBytes[64];
            const r = (0, viem_1.bytesToHex)(sigBytes.slice(0, 32));
            const s = (0, viem_1.bytesToHex)(sigBytes.slice(32, 64));
            return wallet.writeContract({
                address: abi.addresses.StoreReg,
                abi: abi.StoreReg,
                functionName: 'redeemInvite',
                args: [BigInt(this.storeId), v, r, s, wallet.account.address],
            });
        });
    }
    uploadBlob(blob) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const response = (yield this.encodeAndSend(mmproto.GetBlobUploadURLRequest));
            const ipfsHash = yield fetch(response.url, {
                method: 'POST',
                body: blob,
            });
            return ipfsHash.json();
        });
    }
    writeStoreManifest() {
        return __awaiter(this, arguments, void 0, function* (publishedTagId = null) {
            yield this.connect();
            let pId = RelayClient.eventId();
            if (publishedTagId) {
                pId = (0, viem_1.hexToBytes)(publishedTagId);
            }
            const storeManifest = {
                eventId: RelayClient.eventId(),
                storeTokenId: (0, viem_1.hexToBytes)(this.storeId),
                domain: 'socks.mass.market',
                publishedTagId: pId,
            };
            const types = {
                StoreManifest: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'store_token_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'domain',
                        type: 'string',
                    },
                    {
                        name: 'published_tag_id',
                        type: 'bytes32',
                    },
                ],
            };
            return __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, storeManifest);
        });
    }
    createItem(price, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const jsonString = JSON.stringify(metadata);
            const encoder = new TextEncoder();
            const utf8Encoded = encoder.encode(jsonString);
            const iid = RelayClient.eventId();
            const item = {
                eventId: iid,
                price: price,
                metadata: utf8Encoded,
            };
            const types = {
                CreateItem: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'price',
                        type: 'string',
                    },
                    {
                        name: 'metadata',
                        type: 'bytes',
                    },
                ],
            };
            yield __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, item);
            return (0, viem_1.bytesToHex)(iid);
        });
    }
    updateItem(itemId, field, value) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield this.connect();
            const fieldMap = new Map([
                [
                    UpdateItemField.ITEM_FIELD_PRICE,
                    { name: 'price', type: 'string' },
                ],
                [
                    UpdateItemField.ITEM_FIELD_METADATA,
                    { name: 'metadata', type: 'bytes' },
                ],
            ]);
            const fieldType = (_a = fieldMap.get(field)) === null || _a === void 0 ? void 0 : _a.name;
            const getValue = () => {
                if (field === UpdateItemField.ITEM_FIELD_METADATA) {
                    const jsonString = JSON.stringify(value);
                    const encoder = new TextEncoder();
                    const utf8Encoded = encoder.encode(jsonString);
                    return utf8Encoded;
                }
                else {
                    return value;
                }
            };
            const update = {
                eventId: RelayClient.eventId(),
                itemId: (0, viem_1.hexToBytes)(itemId),
                field: field,
                [fieldType]: getValue(),
            };
            const types = {
                UpdateItem: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'item_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'field',
                        type: 'int256',
                    },
                    fieldMap.get(field),
                ],
            };
            return __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, update);
        });
    }
    updateManifest(field, value) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield this.connect();
            const fieldMap = new Map([
                [
                    exports.ManifestField.MANIFEST_FIELD_DOMAIN,
                    {
                        name: 'string',
                        type: 'string',
                    },
                ],
                [
                    exports.ManifestField.MANIFEST_FIELD_PUBLISHED_TAG,
                    {
                        name: 'tag_id',
                        type: 'bytes32',
                    },
                ],
                [
                    exports.ManifestField.MANIFEST_FIELD_ADD_ERC20,
                    {
                        name: 'erc20_addr',
                        type: 'address',
                    },
                ],
                [
                    exports.ManifestField.MANIFEST_FIELD_REMOVE_ERC20,
                    {
                        name: 'erc20_addr',
                        type: 'address',
                    },
                ],
            ]);
            const fieldType = (_a = fieldMap.get(field)) === null || _a === void 0 ? void 0 : _a.name;
            const manifest = {
                eventId: RelayClient.eventId(),
                field: field,
                [snakeToCamel(fieldType)]: field === exports.ManifestField.MANIFEST_FIELD_DOMAIN
                    ? value
                    : (0, viem_1.hexToBytes)(value),
            };
            const types = {
                UpdateManifest: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'field',
                        type: 'int256',
                    },
                    fieldMap.get(field),
                ],
            };
            return __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, manifest);
        });
    }
    createTag(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const tagId = RelayClient.eventId();
            const tag = {
                eventId: tagId,
                name: name,
            };
            const types = {
                CreateTag: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'name',
                        type: 'string',
                    },
                ],
            };
            yield __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, tag);
            return (0, viem_1.bytesToHex)(tagId);
        });
    }
    addItemToTag(tagId, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const tag = {
                eventId: RelayClient.eventId(),
                tagId: (0, viem_1.hexToBytes)(tagId),
                itemId: (0, viem_1.hexToBytes)(itemId),
            };
            const types = {
                AddToTag: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'tag_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'item_id',
                        type: 'bytes32',
                    },
                ],
            };
            return __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, tag);
        });
    }
    removeFromTag(tagId, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const tag = {
                eventId: RelayClient.eventId(),
                tagId: (0, viem_1.hexToBytes)(tagId),
                itemId: (0, viem_1.hexToBytes)(itemId),
            };
            const types = {
                RemoveFromTag: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'tag_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'item_id',
                        type: 'bytes32',
                    },
                ],
            };
            return __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, tag);
        });
    }
    abandonCart(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const cart = {
                eventId: RelayClient.eventId(),
                cartId: (0, viem_1.hexToBytes)(cartId),
            };
            const types = {
                CartAbandoned: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    { name: 'cart_id', type: 'bytes32' },
                ],
            };
            return yield __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, cart);
        });
    }
    createCart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const reqId = RelayClient.eventId();
            const cart = {
                eventId: reqId,
            };
            const types = {
                CreateCart: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                ],
            };
            yield __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, cart);
            return (0, viem_1.bytesToHex)(reqId);
        });
    }
    changeCart(cartId, itemId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const cart = {
                eventId: RelayClient.eventId(),
                cartId: (0, viem_1.hexToBytes)(cartId),
                itemId: (0, viem_1.hexToBytes)(itemId),
                quantity,
            };
            const types = {
                ChangeCart: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'cart_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'item_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'quantity',
                        type: 'int32',
                    },
                ],
            };
            return __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, cart);
        });
    }
    // null erc20Addr means vanilla ethererum is used
    commitCart(cartId_1) {
        return __awaiter(this, arguments, void 0, function* (cartId, erc20Addr = null, escrowAddr = null) {
            let erc20AddrBytes = null;
            let escrowAddrBytes = null;
            if (escrowAddr) {
                escrowAddrBytes = (0, viem_1.hexToBytes)(escrowAddr);
                if (escrowAddrBytes.length !== 20) {
                    return Promise.reject(new Error('escrowAddr must be 20 bytes'));
                }
            }
            if (erc20Addr) {
                erc20AddrBytes = (0, viem_1.hexToBytes)(erc20Addr);
                if (erc20AddrBytes.length !== 20) {
                    return Promise.reject(new Error('erc20Addr must be 20 bytes'));
                }
            }
            yield this.connect();
            return this.encodeAndSend(mmproto.CommitCartRequest, {
                cartId: (0, viem_1.hexToBytes)(cartId),
                erc20Addr: erc20AddrBytes,
                escrowAddr: escrowAddrBytes,
            });
        });
    }
    changeStock(itemIds, diffs) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const stock = {
                eventId: RelayClient.eventId(),
                itemIds: itemIds.map((d) => (0, viem_1.hexToBytes)(d)),
                diffs: diffs,
            };
            const types = {
                ChangeStock: [
                    {
                        name: 'event_id',
                        type: 'bytes32',
                    },
                    {
                        name: 'item_ids',
                        type: 'bytes32[]',
                    },
                    {
                        name: 'diffs',
                        type: 'int32[]',
                    },
                ],
            };
            return __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, stock);
        });
    }
    getRandomStoreId() {
        return (0, viem_1.bytesToHex)(randomBytes(32));
    }
    static generatePk() {
        return (0, viem_1.bytesToHex)(randomBytes(32));
    }
    static hexToBase64(hex) {
        const u8 = new Uint8Array((0, viem_1.toBytes)(hex));
        return Buffer.from(u8).toString('base64');
    }
    static requestId() {
        return randomBytes(16);
    }
    static eventId() {
        return randomBytes(32);
    }
}
exports.RelayClient = RelayClient;
_RelayClient_instances = new WeakSet(), _RelayClient_handlePingRequest = function _RelayClient_handlePingRequest(ping) {
    const pr = mmproto.PingResponse.encode({
        requestId: ping.requestId,
    }).finish();
    const typedPr = new Uint8Array(pr.length + 1);
    typedPr[0] = 2;
    typedPr.set(pr, 1);
    this.connection.send(typedPr);
}, _RelayClient_decodeMessage = function _RelayClient_decodeMessage(me) {
    return __awaiter(this, void 0, void 0, function* () {
        const _data = me.data instanceof Blob
            ? yield new Response(me.data).arrayBuffer()
            : me.data;
        const data = new Uint8Array(_data);
        const prefix = data[0];
        const pbMessage = constants_1.MESSAGE_PREFIXES.get(prefix);
        if (!pbMessage) {
            console.warn('unkown message', prefix);
            return;
        }
        const payload = data.slice(1);
        const message = pbMessage.decode(payload);
        console.log(`[recv] reqId=${(0, viem_1.bytesToHex)(message.requestId)} typeCode=${prefix}`);
        console.log(message);
        switch (pbMessage) {
            case mmproto.PingRequest:
                __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_handlePingRequest).call(this, message);
                break;
            case mmproto.EventPushRequest:
                // TODO: add signature verification
                this.emit('event', message);
                break;
            default:
                this.emit((0, viem_1.bytesToHex)(message.requestId), message);
        }
    });
}, _RelayClient_signTypedDataMessage = function _RelayClient_signTypedDataMessage(types, message) {
    return this.keyCardWallet.signTypedData({
        types,
        primaryType: Object.keys(types)[0],
        domain: this.DOMAIN_SEPARATOR,
        message: formatMessageForSigning(message),
    });
}, _RelayClient_signAndSendEvent = function _RelayClient_signAndSendEvent(types, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const sig = yield __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signTypedDataMessage).call(this, types, message);
        let key = convertFirstCharToLowerCase(Object.keys(types)[0]);
        const eventRequest = {
            event: {
                signature: (0, viem_1.hexToBytes)(sig),
                [key]: message,
            },
        };
        return this.encodeAndSend(mmproto.EventWriteRequest, eventRequest);
    });
}, _RelayClient_authenticate = function _RelayClient_authenticate() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = (yield this.encodeAndSend(mmproto.AuthenticateRequest, {
            publicKey: (0, viem_1.toBytes)(this.keyCardWallet.publicKey).slice(1),
        }));
        const types = {
            Challenge: [{ name: 'challenge', type: 'string' }],
        };
        const sig = yield __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signTypedDataMessage).call(this, types, {
            challenge: (0, viem_1.bytesToHex)(response.challenge).slice(2),
        });
        return this.encodeAndSend(mmproto.ChallengeSolvedRequest, {
            signature: (0, viem_1.toBytes)(sig),
        });
    });
};
//# sourceMappingURL=index.js.map