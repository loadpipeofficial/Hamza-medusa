import axios, { AxiosInstance } from 'axios';
import { BigNumberish } from 'ethers';

export type HexString = `0x${string}`;

const REST_URL = process.env.REST_SERVER_URL || 'http://localhost:3001';
try {
    new URL(REST_URL);
} catch (error) {
    console.error('Invalid REST_SERVER_URL:', REST_URL);
    process.exit(1); // Exit the process if the URL is invalid
}

type ProductInput = {
    name: string;
    price: number;
    description: string;
    image: string;
};

type ProductOutput = {
    productIds: HexString[];
    success: boolean;
};

type ProductUpdateOutput = {
    success: boolean;
};

type CheckoutInput = {
    productId: string;
    quantity: number;
};

export type CreateStoreOutput = {
    storeId: string;
    keycard: string;
    success: boolean;
};

export type CheckoutOutput = {
    success: boolean;
    contractAddress: HexString;
    orderId: HexString;
    amount: string;
    chainId: number;
    ttl: number;
    currency: string;
};

/**
 * Adapter for the REST API that hides the complexity of the
 * MassMarket relay client and exposes its methods.
 *
 * @author Garo Nazarian
 */
export class MassMarketClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: REST_URL,
            timeout: 3000,
        });
    }

    /**
     * Checks the status of the rest api server.
     *
     * @returns boolean, true if a-ok
     */
    async checkStatus(): Promise<boolean> {
        try {
            const response = await this.client.get('/');
            return response.status === 200;
        } catch (error) {
            console.error('Error checking status:', error.message);
            return false;
        }
    }

    /**
     * Creates an entirely new store with a unique id, on MassMarket.
     *
     * @param options Optional parameters (store id and keycard)
     * @returns The identity & info of the new store
     */
    async createStore(
        options: {
            storeId?: HexString;
            keyCard?: HexString;
        } = {}
    ): Promise<CreateStoreOutput> {
        // ): Promise<{ store_id: string; keycard: string }> {
        try {
            const response = await this.client.post('/api/store', options);
            // return response.data;
            return response.data.storeId;
        } catch (error) {
            console.error('Error creating store:', error.message);
            throw error;
        }
    }

    /**
     * Creates one or more product listings on a MassMarket store.
     *
     * @param storeId unique ID of the store to which to add products
     * @param keycard grants authorization to change things on the store
     * @param products list of product specifications (array)
     * @returns a list of product IDs of the new products
     */
    async createProducts(
        storeId: HexString,
        keycard: HexString,
        products: ProductInput[]
    ): Promise<HexString[]> {
        try {
            const body = {
                storeId,
                keycard,
                products,
            };

            const response = await this.client.post('/api/products', body, {
                headers: { 'Content-Type': 'application/json' },
            });

            console.log('Creating Products');
            return response.data.productIds;
        } catch (error) {
            console.error('Error creating products:', error.message);
            throw error;
        }
    }

    /**
     * Updates some data on a specific product in a store.
     *
     * @param storeId Unique id of the store on which to update products.
     * @param keycard Grants authorization to the store.
     * @param productId Unique id of the product to update.
     * @param product Data to update on the product
     * @returns true on success (boolean)
     */
    async updateProduct(
        storeId: HexString,
        keycard: HexString,
        productId: HexString,
        product: ProductInput
    ): Promise<boolean> {
        try {
            const body = {
                storeId,
                keycard,
                product,
            };

            const response = await this.client.put(
                `/api/products/${productId}`,
                body,
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            console.log(`Updating Product: ${product.name}`);
            return response.data.success;
        } catch (error) {
            console.error('Error updating product:', error.message);
            throw error;
        }
    }

    /**
     * Complets checkout fully, creating a cart, adding items, and committing the cart.
     *
     * @param storeId Unique id of the store on which to run checkout.
     * @param keycard Grants authorization to the store.
     * @param items List of items and quantities to include in checkout.
     *
     * @returns Unknown at this time
     */
    async checkout(
        storeId: HexString,
        keycard: HexString,
        items: CheckoutInput[]
    ): Promise<CheckoutOutput> {
        try {
            const body = {
                storeId,
                keycard,
                items,
            };

            const response = await this.client.post('/api/checkout', body, {
                headers: { 'Content-Type': 'application/json' },
            });

            console.log('Checking out');
            return response.data;
        } catch (error) {
            console.error('Error checking out:', error.message);
            throw error;
        }
    }
}
