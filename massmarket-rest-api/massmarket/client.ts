import { ClientArgs, RelayClient } from './lib';
import { randomBytes } from 'crypto';
import { http, createWalletClient, PrivateKeyAccount, bytesToHex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { privateKeyStringToBytes, bufferToString, sleep } from './utils';
import { HexString } from '../entity';
import { ENDPOINT } from '../controllers/util';
import { BlockchainClient } from './lib/blockchainClient';

/**
 * Wrapper for the massmarket relay client, exposing those functions and properties
 * that we need for our specific use cases.
 *
 * @author John R. Kosinski
 */
export class RelayClientWrapper {
    private _client: RelayClient;
    private _chain = sepolia;
    private _keyCard: Uint8Array;
    readonly storeId: HexString;
    eventStream: ReadableStream<any> | null = null;

    constructor(
        endpoint: string,
        storeId: HexString = '0x0',
        keyCardPrivKey: HexString = '0x0',
        keyCardEnrolled: boolean = true
    ) {
        this.storeId = storeId;
        if (keyCardPrivKey?.length === 0 || keyCardPrivKey === '0x0') {
            this._keyCard = new Uint8Array(randomBytes(32));
            keyCardPrivKey = bufferToString(this._keyCard);
            keyCardEnrolled = false;
        } else {
            this._keyCard = privateKeyStringToBytes(keyCardPrivKey);
        }

        const keyCardWallet: PrivateKeyAccount =
            privateKeyToAccount(keyCardPrivKey);

        const args: ClientArgs = {
            relayEndpoint: `wss://${endpoint}`,
            chain: this._chain,
            storeId: this.storeId,
            keyCardWallet,
            keyCardEnrolled,
        };

        this._client = new RelayClient(args);
    }

    static randomStoreId(): HexString {
        return bytesToHex(new Uint8Array(randomBytes(32)));
    }

    /**
     * Gets an instance from cache, if one exists. Otherwise, creates a new instance
     * and caches it.
     * @param endpoint
     * @param storeId
     * @param keycard
     * @returns
     */
    static async get(
        endpoint: string,
        storeId: HexString,
        keycard: HexString
    ): Promise<RelayClientWrapper> {
        //return from cache
        if (cache.contains(storeId)) {
            return cache.get(storeId);
        }

        //create instance and cache it
        const instance: RelayClientWrapper = new RelayClientWrapper(
            ENDPOINT,
            storeId,
            keycard
        );

        cache.add(storeId, instance);
        return instance;
    }

    /**
     * Creates a new store, authenticates, and returns a RelayClientWrapper instance.
     *
     * @param endpoint Relay endpoint e.g. 'wss://relay.endpoint.com'
     * @param storeId Unique store ID; this will error if not unique.
     * @param walletPrivKey Store owner's wallet private key, as 0x{string}
     * @returns a RelayClientWrapper instance.
     */
    static async create(
        endpoint: string,
        storeId: HexString = '0x0',
        walletPrivKey: HexString
    ): Promise<RelayClientWrapper> {
        const client: RelayClientWrapper = new RelayClientWrapper(
            endpoint,
            storeId
        );

        const account: PrivateKeyAccount = privateKeyToAccount(walletPrivKey);

        const wallet = createWalletClient({
            account,
            chain: sepolia,
            transport: http(),
        });

        cache.add(storeId, client);

        return client;
    }

    /**
     * Creates a new store with a random storeId, enrolls a keycard, and writes the manifest.
     * @returns The store id and keycard value for the new store.
     */
    static async createAndInitializeStore(): Promise<{
        storeId: HexString;
        keyCard: HexString;
    }> {
        //create random store id
        const storeId = bytesToHex(randomBytes(32));

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
            relayEndpoint: `wss://${ENDPOINT}`,
            chain: sepolia,
            storeId,
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
        console.log('storeId', storeId);
        console.log('keycard', keycard.string);
        await new BlockchainClient(storeId).createStore(storeWallet);

        await sleep(90);

        //enroll keycard
        console.log('enrolling KC');
        await client.enrollKeycard(storeWallet); //this uses store wallet
        await client.disconnect();

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
        await client.writeStoreManifest(storeId);

        //add to cache
        cache.add(
            storeId,
            new RelayClientWrapper(ENDPOINT, storeId, keycard.string)
        );

        return {
            keyCard: keycard.string,
            storeId,
        };

        //now from here on, I can do anything I want, but using the wallet as the keycard
    }

    /**
     * Authenticates to an already existing store.
     *
     * @param endpoint Relay endpoint e.g. 'wss://relay.endpoint.com'
     * @param storeId Unique store ID.
     * @param keyCard Private key in the form 0x{hex}
     * @returns a RelayClientWrapper instance.
     */
    static async getInstance(
        endpoint: string,
        storeId: HexString = '0x0',
        keyCard: HexString
    ): Promise<RelayClientWrapper> {
        const client: RelayClientWrapper = new RelayClientWrapper(
            endpoint,
            storeId,
            keyCard
        );
        return client;
    }

    static async enrollNewKeycard(
        endpoint: string,
        storeId: HexString
    ): Promise<RelayClientWrapper> {
        const rc = new RelayClientWrapper(endpoint, storeId, '0x0', false);
        await rc.enrollKeycard();
        return rc;
    }

    async pullEvents() {
        await this._client.connect();
        if (!this.eventStream)
            this.eventStream = await this._client.createEventStream();
        console.log('reading');
        const events = await this.eventStream.getReader().read();
        console.log('read: ', events);
        console.log(events.value?.events.length);
        console.log(events.value?.events[events.value?.events.length - 1]);
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
        await this._client.writeStoreManifest(this.storeId);
    }

    async createCart(): Promise<HexString> {
        return await this._client.createCart();
    }

    async createProduct(product: ProductConfig): Promise<HexString> {
        let id: HexString = '0x0';
        try {
            id = await this._client.createItem(product.price, {
                name: product.name,
                description: product.description,
                image: product.image,
            });
            await this._client.changeStock([id], [1000]);
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
        await this._client.changeStock([productId], [10]);
        console.log(await this._client.changeCart(cartId, productId, quantity));
    }

    async commitCart(cartId: HexString) {
        await this._client.commitCart(cartId);
    }

    async abandonCart(cartId: HexString) {
        await this._client.abandonCart(cartId);
    }

    async setErc20(address: HexString) {
        //3 == MANIFEST_FIELD_ADD_ERC20
        const pb = await this._client.updateManifest(3, address);
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
    private clients: { [key: HexString]: RelayClientWrapper } = {};

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
 * Massmarket's item field enum, for manifest fields.
 */
enum ItemField {
    ITEM_FIELD_UNSPECIFIED = 0,
    ITEM_FIELD_PRICE = 1,
    ITEM_FIELD_METADATA = 2,
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
