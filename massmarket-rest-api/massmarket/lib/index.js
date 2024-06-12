"use strict";
// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: MIT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RelayClient_instances, _RelayClient_handlePingRequest, _RelayClient_decodeMessage, _RelayClient_signTypedDataMessage, _RelayClient_signAndSendEvent, _RelayClient_authenticate;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayClient = exports.ManifestField = void 0;
var isows_1 = require("isows");
var viem_1 = require("viem");
var accounts_1 = require("viem/accounts");
var chains_1 = require("viem/chains");
var events_1 = require("events");
var constants_1 = require("./protobuf/constants");
var compiled_1 = require("./protobuf/compiled");
var mmproto = compiled_1.market.mass;
var abi = require("../abi/index");
exports.ManifestField = mmproto.UpdateManifest.ManifestField;
var UpdateItemField = mmproto.UpdateItem.ItemField;
function randomBytes(n) {
    var b = new Uint8Array(n);
    crypto.getRandomValues(b);
    return b;
}
function convertFirstCharToLowerCase(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, function (match, letter) { return "".concat(letter.toUpperCase()); });
}
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, function (letter) { return "_".concat(letter.toLowerCase()); });
}
function formatArray(array) {
    if (typeof array[0] === 'number') {
        return array.map(function (num) { return BigInt(num); });
    }
    else {
        return array.map(function (m) { return (0, viem_1.bytesToHex)(m); });
    }
}
// TODO: there are a lot of assumptions backed in here that should be commented
function formatMessageForSigning(obj) {
    var snakeCase = {};
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
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
var RelayClient = /** @class */ (function (_super) {
    __extends(RelayClient, _super);
    function RelayClient(_a) {
        var relayEndpoint = _a.relayEndpoint, keyCardWallet = _a.keyCardWallet, _b = _a.chain, chain = _b === void 0 ? chains_1.hardhat : _b, storeId = _a.storeId, keyCardEnrolled = _a.keyCardEnrolled;
        var _this = _super.call(this) || this;
        _RelayClient_instances.add(_this);
        _this.keyCardWallet = keyCardWallet;
        _this.endpoint = relayEndpoint;
        _this.useTLS = relayEndpoint.startsWith('wss');
        _this.chain = chain;
        _this.storeId = storeId;
        _this.DOMAIN_SEPARATOR = {
            name: 'MassMarket',
            version: '1',
            chainId: _this.chain.id,
            verifyingContract: abi.addresses.StoreReg,
        };
        _this.firstEvent = null;
        _this.keyCardEnrolled = keyCardEnrolled;
        return _this;
    }
    RelayClient.prototype.encodeAndSend = function (encoder, object) {
        var _this = this;
        if (object === void 0) { object = {}; }
        if (!object.requestId) {
            object.requestId = RelayClient.requestId();
        }
        var id = object.requestId;
        var payload = encoder.encode(object).finish();
        var typed = new Uint8Array(payload.length + 1);
        typed[0] = constants_1.MESSAGE_TYPES.get(encoder);
        typed.set(payload, 1);
        console.log("[send] reqId=".concat((0, viem_1.bytesToHex)(id), " typeCode=").concat(typed[0]));
        console.log('sending');
        this.connection.send(typed);
        console.log('sent');
        var output = new Promise(function (resolve, reject) {
            _this.once((0, viem_1.bytesToHex)(id), function (result) {
                if (result.error) {
                    var _a = result.error, code = _a.code, message = _a.message;
                    console.error("network error[".concat(code, "]: ").concat(message));
                    reject(result.error);
                }
                else {
                    resolve(result);
                }
            });
        });
        console.log('returning promise');
        return output;
    };
    RelayClient.prototype.createEventStream = function () {
        var requestId = null;
        var parentInstance = this;
        var enqueueFn;
        var enqueueWrapperFn = function (controller) {
            return (enqueueFn = function (event) {
                requestId = event.requestId;
                controller.enqueue(event);
            });
        };
        return new ReadableStream({
            start: function (controller) {
                try {
                    if (parentInstance.firstEvent) {
                        requestId = parentInstance.firstEvent.requestId;
                        controller.enqueue(parentInstance.firstEvent);
                        parentInstance.firstEvent = null;
                    }
                    parentInstance.on('event', enqueueWrapperFn(controller));
                }
                catch (error) {
                    console.log({ error: error });
                }
            },
            pull: function () {
                if (requestId) {
                    parentInstance.encodeAndSend(mmproto.EventPushResponse, {
                        requestId: requestId,
                    });
                }
            },
            cancel: function () {
                parentInstance.removeListener('event', enqueueFn);
            },
        }, { highWaterMark: 0 });
    };
    RelayClient.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.connection ||
                    this.connection.readyState === isows_1.WebSocket.CLOSING ||
                    this.connection.readyState === isows_1.WebSocket.CLOSED) {
                    this.connection = new isows_1.WebSocket(this.endpoint + '/sessions');
                    this.connection.addEventListener('error', function (error) {
                        console.error("WebSocket error: ".concat(error));
                    });
                    this.connection.addEventListener('message', __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_decodeMessage).bind(this));
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.connection.readyState === isows_1.WebSocket.OPEN) {
                            resolve('');
                        }
                        else {
                            _this.connection.addEventListener('open', function () { return __awaiter(_this, void 0, void 0, function () {
                                var res;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('ws open');
                                            if (!this.keyCardEnrolled) return [3 /*break*/, 2];
                                            return [4 /*yield*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_authenticate).call(this)];
                                        case 1:
                                            res = _a.sent();
                                            if (res) {
                                                console.log('authentication success');
                                                resolve(res);
                                            }
                                            else {
                                                console.log('authentication failed');
                                                reject(res);
                                            }
                                            return [3 /*break*/, 3];
                                        case 2:
                                            resolve('ws connected without authentication');
                                            _a.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                    })];
            });
        });
    };
    RelayClient.prototype.disconnect = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof _this.connection === 'undefined' ||
                _this.connection.readyState === isows_1.WebSocket.CLOSED) {
                resolve('already closed');
                return;
            }
            _this.connection.addEventListener('close', resolve);
            _this.connection.close(1000);
        });
    };
    RelayClient.prototype.recoverSignedAddress = function (cartId, signature) {
        return __awaiter(this, void 0, void 0, function () {
            var types, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        types = {
                            CreateCart: [
                                {
                                    name: 'event_id',
                                    type: 'bytes32',
                                },
                            ],
                        };
                        return [4 /*yield*/, (0, viem_1.recoverTypedDataAddress)({
                                domain: this.DOMAIN_SEPARATOR,
                                types: types,
                                primaryType: 'CreateCart',
                                message: {
                                    event_id: cartId,
                                },
                                signature: signature,
                            })];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, address];
                }
            });
        });
    };
    RelayClient.prototype.enrollKeycard = function (wallet) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKey, types, message, signature, body, endpointURL, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        publicKey = (0, viem_1.toBytes)(this.keyCardWallet.publicKey).slice(1);
                        types = {
                            Enrollment: [{ name: 'keyCard', type: 'string' }],
                        };
                        message = {
                            keyCard: Buffer.from(publicKey).toString('hex'),
                        };
                        return [4 /*yield*/, wallet.signTypedData({
                                types: types,
                                domain: this.DOMAIN_SEPARATOR,
                                primaryType: 'Enrollment',
                                message: message,
                                account: wallet.account,
                            })];
                    case 1:
                        signature = _a.sent();
                        body = JSON.stringify({
                            key_card: Buffer.from(publicKey).toString('base64'),
                            signature: RelayClient.hexToBase64(signature),
                            store_token_id: RelayClient.hexToBase64(this.storeId),
                        });
                        endpointURL = new URL(this.endpoint);
                        endpointURL.protocol = this.useTLS ? 'https' : 'http';
                        endpointURL.pathname += '/enroll_key_card';
                        console.log("posting to ".concat(endpointURL.href));
                        return [4 /*yield*/, fetch(endpointURL.href, {
                                method: 'POST',
                                body: body,
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.ok) {
                            this.keyCardEnrolled = true;
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    RelayClient.prototype.createStore = function () {
        return __awaiter(this, arguments, void 0, function (id, wallet) {
            var r;
            if (id === void 0) { id = (0, viem_1.bytesToHex)(RelayClient.eventId()); }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(abi.addresses.StoreReg);
                        console.log(abi.StoreReg.length);
                        return [4 /*yield*/, wallet.writeContract({
                                address: abi.addresses.StoreReg,
                                abi: abi.StoreReg,
                                functionName: 'mint',
                                args: [BigInt(id), wallet.account.address],
                                account: wallet.account,
                                chain: chains_1.sepolia,
                            })];
                    case 1:
                        r = _a.sent();
                        this.storeId = id;
                        return [2 /*return*/, r];
                }
            });
        });
    };
    RelayClient.prototype.createInviteSecret = function (wallet) {
        return __awaiter(this, void 0, void 0, function () {
            var privateKey, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.storeId)
                            throw new Error('A store ID is needed before creating an invite');
                        privateKey = (0, viem_1.bytesToHex)(randomBytes(32));
                        token = (0, accounts_1.privateKeyToAccount)(privateKey);
                        // Save the public key onchain
                        return [4 /*yield*/, wallet.writeContract({
                                address: abi.addresses.StoreReg,
                                abi: abi.StoreReg,
                                functionName: 'publishInviteVerifier',
                                args: [BigInt(this.storeId), token.address],
                                account: wallet.account,
                                chain: chains_1.sepolia,
                            })];
                    case 1:
                        // Save the public key onchain
                        _a.sent();
                        return [2 /*return*/, privateKey];
                }
            });
        });
    };
    RelayClient.prototype.redeemInviteSecret = function (secret, wallet) {
        return __awaiter(this, void 0, void 0, function () {
            var message, tokenAccount, sig, sigBytes, v, r, s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.storeId)
                            throw new Error('A store ID is need before creating an invite');
                        message = 'enrolling:' + wallet.account.address.toLowerCase();
                        tokenAccount = (0, accounts_1.privateKeyToAccount)(secret);
                        return [4 /*yield*/, tokenAccount.signMessage({
                                message: message,
                            })];
                    case 1:
                        sig = _a.sent();
                        sigBytes = (0, viem_1.hexToBytes)(sig);
                        v = sigBytes[64];
                        r = (0, viem_1.bytesToHex)(sigBytes.slice(0, 32));
                        s = (0, viem_1.bytesToHex)(sigBytes.slice(32, 64));
                        return [2 /*return*/, wallet.writeContract({
                                address: abi.addresses.StoreReg,
                                abi: abi.StoreReg,
                                functionName: 'redeemInvite',
                                args: [BigInt(this.storeId), v, r, s, wallet.account.address],
                                account: wallet.account,
                                chain: chains_1.sepolia,
                            })];
                }
            });
        });
    };
    RelayClient.prototype.uploadBlob = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var response, ipfsHash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.encodeAndSend(mmproto.GetBlobUploadURLRequest)];
                    case 2:
                        response = (_a.sent());
                        return [4 /*yield*/, fetch(response.url, {
                                method: 'POST',
                                body: blob,
                            })];
                    case 3:
                        ipfsHash = _a.sent();
                        return [2 /*return*/, ipfsHash.json()];
                }
            });
        });
    };
    RelayClient.prototype.writeStoreManifest = function () {
        return __awaiter(this, arguments, void 0, function (publishedTagId) {
            var pId, storeManifest, types;
            if (publishedTagId === void 0) { publishedTagId = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        pId = RelayClient.eventId();
                        if (publishedTagId) {
                            pId = (0, viem_1.hexToBytes)(publishedTagId);
                        }
                        storeManifest = {
                            eventId: RelayClient.eventId(),
                            storeTokenId: (0, viem_1.hexToBytes)(this.storeId),
                            domain: 'socks.mass.market',
                            publishedTagId: pId,
                        };
                        types = {
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
                        return [2 /*return*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, storeManifest)];
                }
            });
        });
    };
    RelayClient.prototype.createItem = function (price, metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonString, encoder, utf8Encoded, iid, item, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        jsonString = JSON.stringify(metadata);
                        encoder = new TextEncoder();
                        utf8Encoded = encoder.encode(jsonString);
                        iid = RelayClient.eventId();
                        item = {
                            eventId: iid,
                            price: price,
                            metadata: utf8Encoded,
                        };
                        types = {
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
                        console.log('sending event');
                        return [4 /*yield*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, item)];
                    case 2:
                        _a.sent();
                        console.log('sent event');
                        return [2 /*return*/, (0, viem_1.bytesToHex)(iid)];
                }
            });
        });
    };
    RelayClient.prototype.updateItem = function (itemId, field, value) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldMap, fieldType, getValue, update, types;
            var _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _c.sent();
                        fieldMap = new Map([
                            [
                                UpdateItemField.ITEM_FIELD_PRICE,
                                { name: 'price', type: 'string' },
                            ],
                            [
                                UpdateItemField.ITEM_FIELD_METADATA,
                                { name: 'metadata', type: 'bytes' },
                            ],
                        ]);
                        fieldType = (_b = fieldMap.get(field)) === null || _b === void 0 ? void 0 : _b.name;
                        getValue = function () {
                            if (field === UpdateItemField.ITEM_FIELD_METADATA) {
                                var jsonString = JSON.stringify(value);
                                var encoder = new TextEncoder();
                                var utf8Encoded = encoder.encode(jsonString);
                                return utf8Encoded;
                            }
                            else {
                                return value;
                            }
                        };
                        update = (_a = {
                                eventId: RelayClient.eventId(),
                                itemId: (0, viem_1.hexToBytes)(itemId),
                                field: field
                            },
                            _a[fieldType] = getValue(),
                            _a);
                        types = {
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
                        return [2 /*return*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, update)];
                }
            });
        });
    };
    RelayClient.prototype.updateManifest = function (field, value) {
        return __awaiter(this, void 0, void 0, function () {
            var fieldMap, fieldType, manifest, types;
            var _a;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _c.sent();
                        fieldMap = new Map([
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
                        fieldType = (_b = fieldMap.get(field)) === null || _b === void 0 ? void 0 : _b.name;
                        manifest = (_a = {
                                eventId: RelayClient.eventId(),
                                field: field
                            },
                            _a[snakeToCamel(fieldType)] = field === exports.ManifestField.MANIFEST_FIELD_DOMAIN
                                ? value
                                : (0, viem_1.hexToBytes)(value),
                            _a);
                        types = {
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
                        return [2 /*return*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, manifest)];
                }
            });
        });
    };
    RelayClient.prototype.createTag = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var tagId, tag, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        tagId = RelayClient.eventId();
                        tag = {
                            eventId: tagId,
                            name: name,
                        };
                        types = {
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
                        return [4 /*yield*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, tag)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, (0, viem_1.bytesToHex)(tagId)];
                }
            });
        });
    };
    RelayClient.prototype.addItemToTag = function (tagId, itemId) {
        return __awaiter(this, void 0, void 0, function () {
            var tag, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        tag = {
                            eventId: RelayClient.eventId(),
                            tagId: (0, viem_1.hexToBytes)(tagId),
                            itemId: (0, viem_1.hexToBytes)(itemId),
                        };
                        types = {
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
                        return [2 /*return*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, tag)];
                }
            });
        });
    };
    RelayClient.prototype.removeFromTag = function (tagId, itemId) {
        return __awaiter(this, void 0, void 0, function () {
            var tag, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        tag = {
                            eventId: RelayClient.eventId(),
                            tagId: (0, viem_1.hexToBytes)(tagId),
                            itemId: (0, viem_1.hexToBytes)(itemId),
                        };
                        types = {
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
                        return [2 /*return*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, tag)];
                }
            });
        });
    };
    RelayClient.prototype.abandonCart = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        cart = {
                            eventId: RelayClient.eventId(),
                            cartId: (0, viem_1.hexToBytes)(cartId),
                        };
                        types = {
                            CartAbandoned: [
                                {
                                    name: 'event_id',
                                    type: 'bytes32',
                                },
                                { name: 'cart_id', type: 'bytes32' },
                            ],
                        };
                        return [4 /*yield*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, cart)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RelayClient.prototype.createCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reqId, cart, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        reqId = RelayClient.eventId();
                        cart = {
                            eventId: reqId,
                        };
                        types = {
                            CreateCart: [
                                {
                                    name: 'event_id',
                                    type: 'bytes32',
                                },
                            ],
                        };
                        return [4 /*yield*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, cart)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, (0, viem_1.bytesToHex)(reqId)];
                }
            });
        });
    };
    RelayClient.prototype.changeCart = function (cartId, itemId, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        cart = {
                            eventId: RelayClient.eventId(),
                            cartId: (0, viem_1.hexToBytes)(cartId),
                            itemId: (0, viem_1.hexToBytes)(itemId),
                            quantity: quantity,
                        };
                        types = {
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
                        return [2 /*return*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, cart)];
                }
            });
        });
    };
    // null erc20Addr means vanilla ethererum is used
    RelayClient.prototype.commitCart = function (cartId_1) {
        return __awaiter(this, arguments, void 0, function (cartId, erc20Addr, escrowAddr) {
            var erc20AddrBytes, escrowAddrBytes;
            if (erc20Addr === void 0) { erc20Addr = null; }
            if (escrowAddr === void 0) { escrowAddr = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        erc20AddrBytes = null;
                        escrowAddrBytes = null;
                        if (escrowAddr) {
                            escrowAddrBytes = (0, viem_1.hexToBytes)(escrowAddr);
                            if (escrowAddrBytes.length !== 20) {
                                return [2 /*return*/, Promise.reject(new Error('escrowAddr must be 20 bytes'))];
                            }
                        }
                        if (erc20Addr) {
                            erc20AddrBytes = (0, viem_1.hexToBytes)(erc20Addr);
                            if (erc20AddrBytes.length !== 20) {
                                return [2 /*return*/, Promise.reject(new Error('erc20Addr must be 20 bytes'))];
                            }
                        }
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        console.log('connected');
                        return [2 /*return*/, this.encodeAndSend(mmproto.CommitCartRequest, {
                                cartId: (0, viem_1.hexToBytes)(cartId),
                                erc20Addr: erc20AddrBytes,
                                escrowAddr: escrowAddrBytes,
                            })];
                }
            });
        });
    };
    RelayClient.prototype.changeStock = function (itemIds, diffs) {
        return __awaiter(this, void 0, void 0, function () {
            var stock, types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect()];
                    case 1:
                        _a.sent();
                        stock = {
                            eventId: RelayClient.eventId(),
                            itemIds: itemIds.map(function (d) { return (0, viem_1.hexToBytes)(d); }),
                            diffs: diffs,
                        };
                        types = {
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
                        return [2 /*return*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signAndSendEvent).call(this, types, stock)];
                }
            });
        });
    };
    RelayClient.prototype.getRandomStoreId = function () {
        return (0, viem_1.bytesToHex)(randomBytes(32));
    };
    RelayClient.generatePk = function () {
        return (0, viem_1.bytesToHex)(randomBytes(32));
    };
    RelayClient.hexToBase64 = function (hex) {
        var u8 = new Uint8Array((0, viem_1.toBytes)(hex));
        return Buffer.from(u8).toString('base64');
    };
    RelayClient.requestId = function () {
        return randomBytes(16);
    };
    RelayClient.eventId = function () {
        return randomBytes(32);
    };
    return RelayClient;
}(events_1.EventEmitter));
exports.RelayClient = RelayClient;
_RelayClient_instances = new WeakSet(), _RelayClient_handlePingRequest = function _RelayClient_handlePingRequest(ping) {
    var pr = mmproto.PingResponse.encode({
        requestId: ping.requestId,
    }).finish();
    var typedPr = new Uint8Array(pr.length + 1);
    typedPr[0] = 2;
    typedPr.set(pr, 1);
    this.connection.send(typedPr);
}, _RelayClient_decodeMessage = function _RelayClient_decodeMessage(me) {
    return __awaiter(this, void 0, void 0, function () {
        var _data, _a, data, prefix, pbMessage, payload, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(me.data instanceof Blob)) return [3 /*break*/, 2];
                    return [4 /*yield*/, new Response(me.data).arrayBuffer()];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = me.data;
                    _b.label = 3;
                case 3:
                    _data = _a;
                    data = new Uint8Array(_data);
                    prefix = data[0];
                    pbMessage = constants_1.MESSAGE_PREFIXES.get(prefix);
                    if (!pbMessage) {
                        console.warn('unkown message', prefix);
                        return [2 /*return*/];
                    }
                    payload = data.slice(1);
                    message = pbMessage.decode(payload);
                    console.log("[recv] reqId=".concat((0, viem_1.bytesToHex)(message.requestId), " typeCode=").concat(prefix));
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
                    return [2 /*return*/];
            }
        });
    });
}, _RelayClient_signTypedDataMessage = function _RelayClient_signTypedDataMessage(types, message) {
    return this.keyCardWallet.signTypedData({
        types: types,
        primaryType: Object.keys(types)[0],
        domain: this.DOMAIN_SEPARATOR,
        message: formatMessageForSigning(message),
        account: null,
    });
}, _RelayClient_signAndSendEvent = function _RelayClient_signAndSendEvent(types, message) {
    return __awaiter(this, void 0, void 0, function () {
        var sig, key, eventRequest, output;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signTypedDataMessage).call(this, types, message)];
                case 1:
                    sig = _b.sent();
                    key = convertFirstCharToLowerCase(Object.keys(types)[0]);
                    eventRequest = {
                        event: (_a = {
                                signature: (0, viem_1.hexToBytes)(sig)
                            },
                            _a[key] = message,
                            _a),
                    };
                    console.log('encodeAndSend');
                    output = this.encodeAndSend(mmproto.EventWriteRequest, eventRequest);
                    console.log('returning output', output);
                    return [2 /*return*/];
            }
        });
    });
}, _RelayClient_authenticate = function _RelayClient_authenticate() {
    return __awaiter(this, void 0, void 0, function () {
        var response, types, sig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.encodeAndSend(mmproto.AuthenticateRequest, {
                        publicKey: (0, viem_1.toBytes)(this.keyCardWallet.publicKey).slice(1),
                    })];
                case 1:
                    response = (_a.sent());
                    types = {
                        Challenge: [{ name: 'challenge', type: 'string' }],
                    };
                    return [4 /*yield*/, __classPrivateFieldGet(this, _RelayClient_instances, "m", _RelayClient_signTypedDataMessage).call(this, types, {
                            challenge: (0, viem_1.bytesToHex)(response.challenge).slice(2),
                        })];
                case 2:
                    sig = _a.sent();
                    return [2 /*return*/, this.encodeAndSend(mmproto.ChallengeSolvedRequest, {
                            signature: (0, viem_1.toBytes)(sig),
                        })];
            }
        });
    });
};
