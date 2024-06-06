import { ClientArgs, RelayClient } from './lib';
import { randomBytes } from 'crypto';
import { http, createWalletClient, PrivateKeyAccount, bytesToHex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { privateKeyStringToBytes, bufferToString } from './utils';

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
    private _cartId: `0x${string}` = '0x0';
    readonly storeId: `0x${string}`;
    eventStream: ReadableStream<any> | null = null;

    /**
     * Gets the cart id, if any; default is 0x0.
     */
    get cartId(): `0x${string}` {
        return this._cartId;
    }

    set cartId(value: `0x${string}`) {
        this._cartId = value;
    }

    constructor(
        endpoint: string,
        storeId: `0x${string}` = '0x0',
        keyCardPrivKey: `0x${string}` = '0x0'
    ) {
        this.storeId = storeId;
        let keyCardEnrolled: boolean = false;

        if (keyCardPrivKey?.length === 0 || keyCardPrivKey === '0x0') {
            this._keyCard = new Uint8Array(randomBytes(32));
            keyCardPrivKey = bufferToString(this._keyCard);
        } else {
            keyCardEnrolled = true;
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

    static randomStoreId(): `0x${string}` {
        return bufferToString(new Uint8Array(randomBytes(32)));
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
        storeId: `0x${string}` = '0x0',
        walletPrivKey: `0x${string}`
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

        await client.connect();
        const result = await client._client.createStore(client.storeId, wallet);
        console.log(await client.enrollKeyCard(walletPrivKey));
        await client._client.connect();
        //console.log('manifest...');
        //await client._client.writeStoreManifest(client.storeId);

        return client;
    }

    /**
     * Authenticates to an already existing store.
     *
     * @param endpoint Relay endpoint e.g. 'wss://relay.endpoint.com'
     * @param storeId Unique store ID.
     * @param keyCard Private key in the form 0x{hex}
     * @returns a RelayClientWrapper instance.
     */
    static async login(
        endpoint: string,
        storeId: `0x${string}` = '0x0',
        keyCard: `0x${string}`
    ): Promise<RelayClientWrapper> {
        const client: RelayClientWrapper = new RelayClientWrapper(
            endpoint,
            storeId,
            keyCard
        );

        //client.eventStream = await client._client.createEventStream();

        return client;
    }

    async pullEvents() {
        if (!this.eventStream)
            this.eventStream = await this._client.createEventStream();
        console.log('reading');
        console.log('read: ', await this.eventStream.getReader().read());
        console.log('read: ', await this.eventStream.getReader().read());
        console.log('read: ', await this.eventStream.getReader().read());
    }
    async readStream(
        reader: ReadableStreamDefaultReader<Uint8Array>
    ): Promise<void> {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            console.log('Received data:', new TextDecoder().decode(value));
        }
        console.log('Stream has been fully read.');
    }

    keyCardToString(): string {
        return bufferToString(this._keyCard);
    }

    async connect(): Promise<void> {
        await this._client.connect();
    }

    async disconnect(): Promise<void> {
        await this._client.disconnect();
    }

    async enrollKeyCard(walletPrivKey: `0x${string}` = '0x0'): Promise<any> {
        const account: PrivateKeyAccount = privateKeyToAccount(walletPrivKey);

        const wallet = createWalletClient({
            account,
            chain: this._chain,
            transport: http(),
        });

        //wallet.publicKey = account.publicKey;

        return await this._client.enrollKeycard(wallet);
    }

    async writeManifest() {
        this._client.writeStoreManifest(this.storeId);
    }

    async createProduct(product: ProductConfig): Promise<string> {
        console.log('doing the create prod');
        let id = '';
        try {
            id = await this._client.createItem(product.price, {
                name: product.name,
                description: product.description,
                image: product.image,
            });
            console.log('did the create prod', id);
        } catch (e) {
            console.error(e);
        }
        return id;
    }

    async createCart() {
        this._cartId = await this._client.createCart();
        return this._cartId;
    }

    async abandonCart() {
        await this._client.abandonCart(this.cartId);
    }

    async deleteProduct(productId: `0x${string}`): Promise<void> {}

    async updateProductPrice(
        productId: `0x${string}`,
        price: string
    ): Promise<any> {
        const response = await this._client.updateItem(
            productId,
            ItemField.ITEM_FIELD_PRICE,
            price
        );

        return response;
    }

    async addToCart(productId: `0x${string}`, quantity: number) {
        await this._client.changeStock([productId], [10]);
        //this._cartId = await this._client.createCart();
        console.log(
            await this._client.changeCart(this.cartId, productId, quantity)
        );
    }

    async commitCartEth(): Promise<`0x${string}`> {
        console.log('committing cart ' + this.cartId);
        return bufferToString(
            (await this._client.commitCart(this.cartId)).cartFinalizedId
        );
    }

    async setErc20(address: `0x${string}`) {
        //3 == MANIFEST_FIELD_ADD_ERC20
        console.log('setErc2', address);
        const pb = await this._client.updateManifest(3, address);
    }

    async checkoutEth(): Promise<any> {
        const promise = this._client.commitCart(this.cartId);
        try {
            return await promise;
        } catch (e) {
            console.error(e);
        }
        return null;
    }

    async checkoutErc20(
        productId: `0x${string}`,
        erc20: `0x${string}`,
        quantity: number
    ): Promise<void> {
        console.log('productId', productId);
        const pb = await this._client.changeStock([productId], [10]);

        const cartId: `0x${string}` = await this._client.createCart();
        console.log('cart:', cartId);
        await this._client.changeCart(cartId, productId, quantity);
        const response = await this._client.commitCart(cartId, erc20);

        console.log('checkout response: ');
        console.log(bufferToString(response.cartFinalizedId));
        console.log(response);
    }

    private onEvent(event: any) {
        console.log('EVENT:', event);
        if (event.request.events) {
            event.request.events.forEach((e: any) => {
                console.log('event -> ', e);
                if (e.cartFinalized) {
                    if (e.cartFinalized.eventId) {
                        console.log(
                            'eventid:',
                            `0x${bufferToString(e.cartFinalized.eventId)}`
                        );
                    }
                    if (e.cartFinalized.purchaseAddr) {
                        console.log(
                            'purchaseAddr:',
                            `0x${bufferToString(e.cartFinalized.purchaseAddr)}`
                        );
                    }
                }
            });
        }
    }

    static async createAndInitializeStore(endpoint: string) {
        //create random store id
        const storeId = bytesToHex(randomBytes(32));

        //create random keycard
        const keycardBytes = randomBytes(32);
        const keycardString = bytesToHex(keycardBytes);
        const keycard: {
            bytes: Buffer;
            string: `0x${string}`;
            wallet: PrivateKeyAccount;
        } = {
            bytes: keycardBytes,
            string: keycardString,
            wallet: privateKeyToAccount(keycardString),
        };

        //create relay client instance
        console.log('create relay client');
        const client = new RelayClient({
            relayEndpoint: `wss://relay-beta.mass.market/v1`,
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
        await client.createStore(storeId, storeWallet);

        //enroll keycard
        console.log('enrolling KC');
        await client.enrollKeycard(storeWallet); //this uses store wallet
        await client.disconnect();

        //create relay client using STORE wallet private key instead of keycard
        const client2 = new RelayClient({
            relayEndpoint: `wss://${endpoint}`,
            chain: sepolia,
            storeId: storeId,
            keyCardWallet: privateKeyToAccount(walletPrivKey),
            keyCardEnrolled: true,
        });

        console.log('storeId', storeId);
        console.log('keycard', keycard.string);

        //THIS ONE WORKS TOO
        console.log('writing manifest');
        await client2.writeStoreManifest(storeId);

        //now from here on, I can do anything I want, but using the wallet as the keycard
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
