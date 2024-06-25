import { RelayClient } from '@massmarket/client';
import { randomBytes } from 'crypto';
import {
    http,
    createWalletClient,
    PrivateKeyAccount,
    bytesToHex,
    keccak256,
    hexToBytes,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { sleep, HexString } from '../utils.js';

/**
 * Wrapper for the massmarket relay client, exposing those functions and properties
 * that we need for our specific use cases.
 */
export class RelayClientWrapper {
    private _client: RelayClient;
    private _chain = sepolia;
    private _keyCard: Uint8Array;
    readonly shopId: HexString;
    eventStream: ReadableStream<any> | null = null;

    constructor(
        endpoint: string,
        shopId: HexString = '0x0',
        keyCardPrivKey: HexString = '0x0',
        keyCardEnrolled: boolean = true
    ) {
        this.shopId = shopId;
        if (keyCardPrivKey?.length === 0 || keyCardPrivKey === '0x0') {
            this._keyCard = new Uint8Array(randomBytes(32));
            keyCardPrivKey = bytesToHex(this._keyCard);
            keyCardEnrolled = false;
        } else {
            this._keyCard = hexToBytes(keyCardPrivKey);
        }

        const keyCardWallet: PrivateKeyAccount =
            privateKeyToAccount(keyCardPrivKey);

        const args = {
            relayEndpoint: `wss://${endpoint}`,
            shopId: this.shopId,
            keyCardWallet,
            keyCardEnrolled,
        };

        this._client = new RelayClient(args);
    }

    static randomshopId(): HexString {
        return bytesToHex(new Uint8Array(randomBytes(32)));
    }

    /**
     * Gets an instance from cache, if one exists. Otherwise, creates a new instance
     * and caches it.
     * @param endpoint
     * @param shopId
     * @param keycard
     * @returns
     */
    static async get(
        endpoint: string,
        shopId: HexString,
        keycard: HexString
    ): Promise<RelayClientWrapper> {
        //return from cache
        if (cache.contains(shopId)) {
            return cache.get(shopId);
        }

        //create instance and cache it
        const instance: RelayClientWrapper = new RelayClientWrapper(
            endpoint,
            shopId,
            keycard
        );

        cache.add(shopId, instance);
        return instance;
    }

    /**
     * Creates a new store, authenticates, and returns a RelayClientWrapper instance.
     *
     * @param endpoint Relay endpoint e.g. 'wss://relay.endpoint.com'
     * @param shopId Unique store ID; this will error if not unique.
     * @param walletPrivKey Store owner's wallet private key, as 0x{string}
     * @returns a RelayClientWrapper instance.
     */
    static async create(
        endpoint: string,
        shopId: HexString = '0x0',
        walletPrivKey: HexString
    ): Promise<RelayClientWrapper> {
        const client: RelayClientWrapper = new RelayClientWrapper(
            endpoint,
            shopId
        );

        const account: PrivateKeyAccount = privateKeyToAccount(walletPrivKey);

        const wallet = createWalletClient({
            account,
            chain: sepolia,
            transport: http(),
        });

        cache.add(shopId, client);

        return client;
    }

    /**
     * Creates a new store with a random shopId, enrolls a keycard, and writes the manifest.
     * @returns The store id and keycard value for the new store.
     */
    static async createAndInitializeStore(endpoint: string): Promise<{
        shopId: HexString;
        keyCard: HexString;
    }> {
        //create random store id
        const shopId = bytesToHex(randomBytes(32));

        //create random keycard
        const keycardBytes = randomBytes(32);
        const keycardString = bytesToHex(keycardBytes);
        const keycard: {
            bytes: Buffer;
            string: HexString;
            wallet: PrivateKeyAccount;
        } = {
            bytes: keycardBytes,
            string: keycardString,
            wallet: privateKeyToAccount(keycardString),
        };

        //create relay client instance
        console.log('create relay client');
        const client = new RelayClient({
            relayEndpoint: `wss://${endpoint}`,
            shopId,
            keyCardWallet: keycard.wallet,
            keyCardEnrolled: false,
        });

        //create actual (store) wallet
        const walletPrivKey =
            '0x65c1196c888ae6bb110077201346dfe426b220ce1d49a366102a2d85e7ad0e35';
        const account: PrivateKeyAccount = privateKeyToAccount(walletPrivKey);

        const storeWallet = createWalletClient({
            account,
            chain: sepolia,
            transport: http(),
        });

        //create store
        console.log('create store');
        console.log('shopId', shopId);
        console.log('keycard', keycard.string);

        const shopToken = await client.blockchain.createShop(storeWallet);

        console.log('waiting...');
        await sleep(45);

        //enroll keycard
        console.log('enrolling KC');
        await client.enrollKeycard(storeWallet); //this uses store wallet

        //THIS ONE WORKS TOO
        console.log('writing manifest');
        await client.shopManifest({
            name: 'test shop',
            description: 'test shop is the best shop',
            profilePictureUrl: 'https://http.cat/images/200.jpg',
            publishedTagId: randomBytes(32),
        });

        //add to cache
        cache.add(
            shopId,
            new RelayClientWrapper(endpoint, shopId, keycard.string)
        );

        return {
            keyCard: keycard.string,
            shopId,
        };

        //now from here on, I can do anything I want, but using the wallet as the keycard
    }

    /**
     * Authenticates to an already existing store.
     *
     * @param endpoint Relay endpoint e.g. 'wss://relay.endpoint.com'
     * @param shopId Unique store ID.
     * @param keyCard Private key in the form 0x{hex}
     * @returns a RelayClientWrapper instance.
     */
    static async getInstance(
        endpoint: string,
        shopId: HexString = '0x0',
        keyCard: HexString
    ): Promise<RelayClientWrapper> {
        const client: RelayClientWrapper = new RelayClientWrapper(
            endpoint,
            shopId,
            keyCard
        );
        return client;
    }

    static async enrollNewKeycard(
        endpoint: string,
        shopId: HexString
    ): Promise<RelayClientWrapper> {
        const rc = new RelayClientWrapper(endpoint, shopId, '0x0', false);
        await rc.enrollKeycard();
        return rc;
    }

    async pullEvents(): Promise<any> {
        await this._client.connect();
        const stream = await this._client.createEventStream();
        for await (const event of stream) {
            if (event.event.updateOrder?.itemsFinalized) {
                return bytesToHex(event.event.updateOrder.orderId);
            }
        }
        return;
    }

    //TODO: check cartId against what's in event
    async getCartFinalizedEvent(cartId: HexString): Promise<any> {
        await this._client.connect();
        const stream = await this._client.createEventStream();
        for await (const event of stream) {
            if (event.event?.updateOrder?.itemsFinalized) {
                if (
                    bytesToHex(
                        event.event?.updateOrder?.itemsFinalized.orderHash
                    ) == keccak256(hexToBytes(cartId))
                ) {
                    console.log(event.event?.updateOrder?.itemsFinalized);
                    return event?.event.updateOrder?.itemsFinalized;
                }
            }
        }
        return null;
    }

    keyCardToString(): string {
        return bytesToHex(this._keyCard);
    }

    async connect(): Promise<void> {
        await this._client.connect();
    }

    async disconnect(): Promise<void> {
        await this._client.disconnect();
    }

    async enrollKeycard(): Promise<void> {
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
        const walletPrivKey =
            '0x65c1196c888ae6bb110077201346dfe426b220ce1d49a366102a2d85e7ad0e35';
        const account: PrivateKeyAccount = privateKeyToAccount(walletPrivKey);

        const storeWallet = createWalletClient({
            account,
            chain: sepolia,
            transport: http(),
        });

        await this._client.enrollKeycard(storeWallet);
    }

    async writeManifest() {
        //await this._client.shopManifest(this.shopId);
    }

    async createCart(): Promise<HexString> {
        return bytesToHex(await this._client.createOrder());
    }

    async createProduct(product: ProductConfig): Promise<HexString> {
        let id: HexString = '0x0';
        try {
            const metadata = new TextEncoder().encode(
                JSON.stringify({
                    name: product.name,
                    description: product.description,
                    image: product.image,
                })
            );
            id = bytesToHex(
                await this._client.createItem({
                    price: product.price,
                    metadata,
                })
            );
            //await this._client.changeStock();
        } catch (e) {
            console.error(e);
        }
        return id;
    }

    async addToCart(
        cartId: HexString,
        productId: HexString,
        quantity: number = 1
    ) {
        await this._client.changeStock({
            itemIds: [hexToBytes(productId)],
            diffs: [10],
        });
        //console.log(await this._client.changeCart(cartId, productId, quantity));
        await this._client.updateOrder({
            orderId: hexToBytes(cartId),
            changeItems: { itemId: hexToBytes(productId), quantity },
        });
    }

    async commitCart(cartId: HexString, tokenAddress: HexString | null = null) {
        const input: {
            orderId: any;
            payeeName: string;
            currency: { tokenAddr: any; chainId: number } | null;
        } = {
            orderId: hexToBytes(cartId),
            payeeName: 'hamza-switch',
            currency: null,
        };
        if (tokenAddress) {
            input.currency = {
                tokenAddr: hexToBytes(tokenAddress),
                chainId: 11155111,
            };
        }

        return await this._client.commitOrder(input);
    }

    async setErc20(address: HexString) {
        const pb = await this._client.updateShopManifest({
            addAcceptedCurrency: {
                chainId: 11155111,
                tokenAddr: hexToBytes(address),
            },
        });
    }

    async addPayeeContract(name: string, address: HexString) {
        const pb = await this._client.updateShopManifest({
            addPayee: {
                name,
                chainId: 11155111,
                addr: hexToBytes(address),
                callAsContract: true,
            },
        });
    }

    private async readStream(
        reader: ReadableStreamDefaultReader<Uint8Array>
    ): Promise<void> {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            console.log('Received data:', new TextDecoder().decode(value));
        }
        console.log('Stream has been fully read.');
    }
}

/**
 * Caches instances by id. The purpose is that one instance per store exists in
 * memory, at most.
 */
class RelayClientCache {
    private clients: { [key: string]: RelayClientWrapper } = {};

    constructor() {
        this.clear();
    }

    contains(id: HexString): boolean {
        return this.clients[id] ? true : false;
    }

    add(id: HexString, instance: RelayClientWrapper) {
        console.log(`adding instance ${id} to cache`);
        this.clients[id] = instance;
    }

    get(id: HexString): RelayClientWrapper {
        console.log(`getting instance ${id} from cache`);
        return this.clients[id];
    }

    remove(id: HexString) {
        delete this.clients[id];
    }

    clear() {
        this.clients = {};
    }
}

/**
 * Type for defining item listings/products.
 */
export type ProductConfig = {
    name: string;
    price: string;
    description: string;
    image: string;
};

const cache: RelayClientCache = new RelayClientCache();