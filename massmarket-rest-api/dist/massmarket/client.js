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
/**
 * Wrapper for the massmarket relay client, exposing those functions and properties
 * that we need for our specific use cases.
 *
 * @author John R. Kosinski
 */
class RelayClientWrapper {
    /**
     * Gets the cart id, if any; default is 0x0.
     */
    get cartId() {
        return this._cartId;
    }
    set cartId(value) {
        this._cartId = value;
    }
    constructor(endpoint, storeId = '0x0', keyCardPrivKey = '0x0') {
        this._chain = chains_1.sepolia;
        this._cartId = '0x0';
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
        return (0, utils_1.bufferToString)(new Uint8Array((0, crypto_1.randomBytes)(32)));
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
            yield client.connect();
            const result = yield client._client.createStore(client.storeId, wallet);
            console.log(yield client.enrollKeyCard(walletPrivKey));
            yield client._client.connect();
            //console.log('manifest...');
            //await client._client.writeStoreManifest(client.storeId);
            return client;
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
    static login(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, storeId = '0x0', keyCard) {
            const client = new RelayClientWrapper(endpoint, storeId, keyCard);
            //client.eventStream = await client._client.createEventStream();
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
    keyCardToString() {
        return (0, utils_1.bufferToString)(this._keyCard);
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
    enrollKeyCard() {
        return __awaiter(this, arguments, void 0, function* (walletPrivKey = '0x0') {
            const account = (0, accounts_1.privateKeyToAccount)(walletPrivKey);
            const wallet = (0, viem_1.createWalletClient)({
                account,
                chain: this._chain,
                transport: (0, viem_1.http)(),
            });
            //wallet.publicKey = account.publicKey;
            return yield this._client.enrollKeycard(wallet);
        });
    }
    writeManifest() {
        return __awaiter(this, void 0, void 0, function* () {
            this._client.writeStoreManifest(this.storeId);
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('doing the create prod');
            let id = '';
            try {
                id = yield this._client.createItem(product.price, {
                    name: product.name,
                    description: product.description,
                    image: product.image,
                });
                console.log('did the create prod', id);
            }
            catch (e) {
                console.error(e);
            }
            return id;
        });
    }
    createCart() {
        return __awaiter(this, void 0, void 0, function* () {
            this._cartId = yield this._client.createCart();
            return this._cartId;
        });
    }
    abandonCart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.abandonCart(this.cartId);
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    updateProductPrice(productId, price) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._client.updateItem(productId, ItemField.ITEM_FIELD_PRICE, price);
            return response;
        });
    }
    addToCart(productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.changeStock([productId], [10]);
            //this._cartId = await this._client.createCart();
            console.log(yield this._client.changeCart(this.cartId, productId, quantity));
        });
    }
    commitCartEth() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('committing cart ' + this.cartId);
            return (0, utils_1.bufferToString)((yield this._client.commitCart(this.cartId)).cartFinalizedId);
        });
    }
    setErc20(address) {
        return __awaiter(this, void 0, void 0, function* () {
            //3 == MANIFEST_FIELD_ADD_ERC20
            console.log('setErc2', address);
            const pb = yield this._client.updateManifest(3, address);
        });
    }
    checkoutEth() {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = this._client.commitCart(this.cartId);
            try {
                return yield promise;
            }
            catch (e) {
                console.error(e);
            }
            return null;
        });
    }
    checkoutErc20(productId, erc20, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('productId', productId);
            const pb = yield this._client.changeStock([productId], [10]);
            const cartId = yield this._client.createCart();
            console.log('cart:', cartId);
            yield this._client.changeCart(cartId, productId, quantity);
            const response = yield this._client.commitCart(cartId, erc20);
            console.log('checkout response: ');
            console.log((0, utils_1.bufferToString)(response.cartFinalizedId));
            console.log(response);
        });
    }
    onEvent(event) {
        console.log('EVENT:', event);
        if (event.request.events) {
            event.request.events.forEach((e) => {
                console.log('event -> ', e);
                if (e.cartFinalized) {
                    if (e.cartFinalized.eventId) {
                        console.log('eventid:', `0x${(0, utils_1.bufferToString)(e.cartFinalized.eventId)}`);
                    }
                    if (e.cartFinalized.purchaseAddr) {
                        console.log('purchaseAddr:', `0x${(0, utils_1.bufferToString)(e.cartFinalized.purchaseAddr)}`);
                    }
                }
            });
        }
    }
    static createAndInitializeStore(endpoint) {
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
                relayEndpoint: `wss://relay-beta.mass.market/v1`,
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
            const client2 = new lib_1.RelayClient({
                relayEndpoint: `wss://${endpoint}`,
                chain: chains_1.sepolia,
                storeId: storeId,
                keyCardWallet: (0, accounts_1.privateKeyToAccount)(walletPrivKey),
                keyCardEnrolled: true,
            });
            console.log('storeId', storeId);
            console.log('keycard', keycard.string);
            //THIS ONE WORKS TOO
            console.log('writing manifest');
            yield client2.writeStoreManifest(storeId);
            //now from here on, I can do anything I want, but using the wallet as the keycard
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