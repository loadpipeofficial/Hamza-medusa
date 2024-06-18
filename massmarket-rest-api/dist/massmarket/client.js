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
const blockchainClient_1 = require("./lib/blockchainClient");
/**
 * Wrapper for the massmarket relay client, exposing those functions and properties
 * that we need for our specific use cases.
 *
 * @author John R. Kosinski
 */
class RelayClientWrapper {
    constructor(endpoint, storeId = '0x0', keyCardPrivKey = '0x0', keyCardEnrolled = true) {
        this._chain = chains_1.sepolia;
        this.eventStream = null;
        this.storeId = storeId;
        if ((keyCardPrivKey === null || keyCardPrivKey === void 0 ? void 0 : keyCardPrivKey.length) === 0 || keyCardPrivKey === '0x0') {
            this._keyCard = new Uint8Array((0, crypto_1.randomBytes)(32));
            keyCardPrivKey = (0, utils_1.bufferToString)(this._keyCard);
            keyCardEnrolled = false;
        }
        else {
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
    /**
     * Gets an instance from cache, if one exists. Otherwise, creates a new instance
     * and caches it.
     * @param endpoint
     * @param storeId
     * @param keycard
     * @returns
     */
    static get(endpoint, storeId, keycard) {
        return __awaiter(this, void 0, void 0, function* () {
            //return from cache
            if (cache.contains(storeId)) {
                return cache.get(storeId);
            }
            //create instance and cache it
            const instance = new RelayClientWrapper(util_1.ENDPOINT, storeId, keycard);
            cache.add(storeId, instance);
            return instance;
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
            cache.add(storeId, client);
            return client;
        });
    }
    /**
     * Creates a new store with a random storeId, enrolls a keycard, and writes the manifest.
     * @returns The store id and keycard value for the new store.
     */
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
                relayEndpoint: `wss://${util_1.ENDPOINT}`,
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
            console.log('storeId', storeId);
            console.log('keycard', keycard.string);
            yield new blockchainClient_1.BlockchainClient(storeId).createStore(storeWallet);
            yield (0, utils_1.sleep)(90);
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
            //THIS ONE WORKS TOO
            console.log('writing manifest');
            yield client.writeStoreManifest(storeId);
            //add to cache
            cache.add(storeId, new RelayClientWrapper(util_1.ENDPOINT, storeId, keycard.string));
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
    static enrollNewKeycard(endpoint, storeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const rc = new RelayClientWrapper(endpoint, storeId, '0x0', false);
            yield rc.enrollKeycard();
            return rc;
        });
    }
    pullEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            yield this._client.connect();
            if (!this.eventStream)
                this.eventStream = yield this._client.createEventStream();
            console.log('reading');
            const events = yield this.eventStream.getReader().read();
            return (_a = events.value) === null || _a === void 0 ? void 0 : _a.events;
            console.log('read: ', events);
            console.log((_b = events.value) === null || _b === void 0 ? void 0 : _b.events.length);
            console.log((_c = events.value) === null || _c === void 0 ? void 0 : _c.events[((_d = events.value) === null || _d === void 0 ? void 0 : _d.events.length) - 1]);
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
    enrollKeycard() {
        return __awaiter(this, void 0, void 0, function* () {
            /*
            const keyCardAccount = privateKeyToAccount(
                bufferToString(this._keyCard)
            );
    
            const keyCardWallet = createWalletClient({
                keyCardAccount,
                chain: sepolia,
                transport: http(),
            });
            */
            const walletPrivKey = '0x65c1196c888ae6bb110077201346dfe426b220ce1d49a366102a2d85e7ad0e35';
            const account = (0, accounts_1.privateKeyToAccount)(walletPrivKey);
            const storeWallet = (0, viem_1.createWalletClient)({
                account,
                chain: chains_1.sepolia,
                transport: (0, viem_1.http)(),
            });
            yield this._client.enrollKeycard(storeWallet);
        });
    }
    writeManifest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.writeStoreManifest(this.storeId);
        });
    }
    createCart() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._client.createCart();
            }
            catch (e) {
                throw e;
            }
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
                yield this._client.changeStock([id], [1000]);
            }
            catch (e) {
                console.error(e);
            }
            return id;
        });
    }
    addToCart(cartId_1, productId_1) {
        return __awaiter(this, arguments, void 0, function* (cartId, productId, quantity = 1) {
            yield this._client.changeStock([productId], [10]);
            console.log(yield this._client.changeCart(cartId, productId, quantity));
        });
    }
    commitCart(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.commitCart(cartId, null, '0x74b7284836F753101bD683C3843e95813b381f18');
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
 * Caches instances by id. The purpose is that one instance per store exists in
 * memory, at most.
 */
class RelayClientCache {
    constructor() {
        this.clients = {};
        this.clear();
    }
    contains(id) {
        return this.clients[id] ? true : false;
    }
    add(id, instance) {
        console.log(`adding instance ${id} to cache`);
        this.clients[id] = instance;
    }
    get(id) {
        console.log(`getting instance ${id} from cache`);
        return this.clients[id];
    }
    remove(id) {
        delete this.clients[id];
    }
    clear() {
        this.clients = {};
    }
}
/**
 * Massmarket's item field enum, for manifest fields.
 */
var ItemField;
(function (ItemField) {
    ItemField[ItemField["ITEM_FIELD_UNSPECIFIED"] = 0] = "ITEM_FIELD_UNSPECIFIED";
    ItemField[ItemField["ITEM_FIELD_PRICE"] = 1] = "ITEM_FIELD_PRICE";
    ItemField[ItemField["ITEM_FIELD_METADATA"] = 2] = "ITEM_FIELD_METADATA";
})(ItemField || (ItemField = {}));
const cache = new RelayClientCache();
//# sourceMappingURL=client.js.map