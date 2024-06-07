"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelayClientWrapper = void 0;
const lib_1 = require("./lib");
const crypto_1 = require("crypto");
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const utils_1 = require("./utils");
const util_1 = require("../controllers/util");
/**
 * Wrapper for the massmarket relay client, exposing those functions and properties
 * that we need for our specific use cases.
 *
 * @author John R. Kosinski
 */
class RelayClientWrapper {
    constructor(endpoint, storeId = '0x0', keyCardPrivKey = '0x0') {
        this._chain = chains_1.sepolia;
        this.eventStream = null;
        this.storeId = storeId;
        let keyCardEnrolled = false;
        if ((keyCardPrivKey === null || keyCardPrivKey === void 0 ? void 0 : keyCardPrivKey.length) === 0 || keyCardPrivKey === '0x0') {
            this._keyCard = new Uint8Array((0, crypto_1.randomBytes)(32));
            keyCardPrivKey = (0, utils_1.bufferToString)(this._keyCard);
        }
        else {
            keyCardEnrolled = true;
            this._keyCard = (0, utils_1.privateKeyStringToBytes)(keyCardPrivKey);
        }
        const keyCardWallet = (0, accounts_1.privateKeyToAccount)(keyCardPrivKey);
        const args = {
            relayEndpoint: `wss://${endpoint}`,
            chain: this._chain,
            storeId: this.storeId,
            keyCardWallet,
            keyCardEnrolled,
        };
        this._client = new lib_1.RelayClient(args);
    }
    static randomStoreId() {
        return (0, viem_1.bytesToHex)(new Uint8Array((0, crypto_1.randomBytes)(32)));
    }
    static get(endpoint, storeId, keycard) {
        return __awaiter(this, void 0, void 0, function* () {
            return new RelayClientWrapper(endpoint, storeId, keycard);
        });
    }
    /**
     * Creates a new store, authenticates, and returns a RelayClientWrapper instance.
     *
     * @param endpoint Relay endpoint e.g. 'wss://relay.endpoint.com'
     * @param storeId Unique store ID; this will error if not unique.
     * @param walletPrivKey Store owner's wallet private key, as 0x{string}
     * @returns a RelayClientWrapper instance.
     */
    static create(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, storeId = '0x0', walletPrivKey) {
            const client = new RelayClientWrapper(endpoint, storeId);
            const account = (0, accounts_1.privateKeyToAccount)(walletPrivKey);
            const wallet = (0, viem_1.createWalletClient)({
                account,
                chain: chains_1.sepolia,
                transport: (0, viem_1.http)(),
            });
            //await client.connect();
            //const result = await client._client.createStore(client.storeId, wallet);
            //console.log(await client.enrollKeyCard(walletPrivKey));
            //await client._client.connect();
            //console.log('manifest...');
            //await client._client.writeStoreManifest(client.storeId);
            return client;
        });
    }
    static createAndInitializeStore() {
        return __awaiter(this, void 0, void 0, function* () {
            //create random store id
            const storeId = (0, viem_1.bytesToHex)((0, crypto_1.randomBytes)(32));
            //create random keycard
            const keycardBytes = (0, crypto_1.randomBytes)(32);
            const keycardString = (0, viem_1.bytesToHex)(keycardBytes);
            const keycard = {
                bytes: keycardBytes,
                string: keycardString,
                wallet: (0, accounts_1.privateKeyToAccount)(keycardString),
            };
            //create relay client instance
            console.log('create relay client');
            const client = new lib_1.RelayClient({
                relayEndpoint: util_1.ENDPOINT,
                chain: chains_1.sepolia,
                storeId,
                keyCardWallet: keycard.wallet,
                keyCardEnrolled: false,
            });
            //create actual (store) wallet
            const walletPrivKey = '0x65c1196c888ae6bb110077201346dfe426b220ce1d49a366102a2d85e7ad0e35';
            const account = (0, accounts_1.privateKeyToAccount)(walletPrivKey);
            const storeWallet = (0, viem_1.createWalletClient)({
                account,
                chain: chains_1.sepolia,
                transport: (0, viem_1.http)(),
            });
            //create store
            console.log('create store');
            yield client.createStore(storeId, storeWallet);
            //enroll keycard
            console.log('enrolling KC');
            yield client.enrollKeycard(storeWallet); //this uses store wallet
            yield client.disconnect();
            //create relay client using STORE wallet private key instead of keycard
            /*const client2 = new RelayClient({
                relayEndpoint: `wss://relay-beta.mass.market/v1`,
                chain: sepolia,
                storeId: storeId,
                keyCardWallet: privateKeyToAccount(keycard.string),
                keyCardEnrolled: true,
            });*/
            console.log('storeId', storeId);
            console.log('keycard', keycard.string);
            //THIS ONE WORKS TOO
            //console.log('writing manifest');
            //await client2.writeStoreManifest(storeId);
            return {
                keyCard: keycard.string,
                storeId,
            };
            //now from here on, I can do anything I want, but using the wallet as the keycard
        });
    }
    /**
     * Authenticates to an already existing store.
     *
     * @param endpoint Relay endpoint e.g. 'wss://relay.endpoint.com'
     * @param storeId Unique store ID.
     * @param keyCard Private key in the form 0x{hex}
     * @returns a RelayClientWrapper instance.
     */
    static getInstance(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, storeId = '0x0', keyCard) {
            const client = new RelayClientWrapper(endpoint, storeId, keyCard);
            return client;
        });
    }
    pullEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.eventStream)
                this.eventStream = yield this._client.createEventStream();
            console.log('reading');
            console.log('read: ', yield this.eventStream.getReader().read());
            console.log('read: ', yield this.eventStream.getReader().read());
            console.log('read: ', yield this.eventStream.getReader().read());
        });
    }
    keyCardToString() {
        return (0, viem_1.bytesToHex)(this._keyCard);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.connect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.disconnect();
        });
    }
    writeManifest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.writeStoreManifest(this.storeId);
        });
    }
    createCart() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._client.createCart();
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = '0x0';
            try {
                id = yield this._client.createItem(product.price, {
                    name: product.name,
                    description: product.description,
                    image: product.image,
                });
            }
            catch (e) {
                console.error(e);
            }
            return id;
        });
    }
    addToCart(cartId, productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.changeStock([productId], [10]);
            console.log(yield this._client.changeCart(cartId, productId, quantity));
        });
    }
    commitCart(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.commitCart(cartId);
        });
    }
    abandonCart(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.abandonCart(cartId);
        });
    }
    setErc20(address) {
        return __awaiter(this, void 0, void 0, function* () {
            //3 == MANIFEST_FIELD_ADD_ERC20
            const pb = yield this._client.updateManifest(3, address);
        });
    }
    readStream(reader) {
        return __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const { done, value } = yield reader.read();
                if (done)
                    break;
                console.log('Received data:', new TextDecoder().decode(value));
            }
            console.log('Stream has been fully read.');
        });
    }
}
exports.RelayClientWrapper = RelayClientWrapper;
/**
 * Massmarket's item field enum, for manifest fields.
 */
var ItemField;
(function (ItemField) {
    ItemField[ItemField["ITEM_FIELD_UNSPECIFIED"] = 0] = "ITEM_FIELD_UNSPECIFIED";
    ItemField[ItemField["ITEM_FIELD_PRICE"] = 1] = "ITEM_FIELD_PRICE";
    ItemField[ItemField["ITEM_FIELD_METADATA"] = 2] = "ITEM_FIELD_METADATA";
})(ItemField || (ItemField = {}));
//# sourceMappingURL=client.js.map