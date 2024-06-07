import axios, { AxiosInstance } from 'axios';

export type HexString = `0x${string}`;

const REST_URL = process.env.REST_SERVER_URL || 'http://localhost:3000';
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

type CreateStoreOutput = {
    storeId: string;
    keycard: string;
    success: boolean;
};

type CheckoutOutput = {
    success: boolean;
    cartId: HexString;
    paymentAddress: HexString;
};

// Mock data

const storeId: HexString = '0x1234567890abcdef';
const keyCard: HexString = '0xabcdef1234567890';

const products: ProductInput[] = [
    {
        name: 'Product 1',
        price: 19.99,
        description: 'Description for product 1',
        image: '',
    },
    {
        name: 'Product 2',
        price: 29.99,
        description: 'Description for product 2',
        image: '',
    },
    {
        name: 'Product 3',
        price: 39.99,
        description: 'Description for product 3',
        image: '',
    },
];

class MassMarketClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: REST_URL,
            timeout: 3000,
        });
    }

    async checkStatus() {
        try {
            const response = await this.client.get('/');
            return response.status === 200;
        } catch (error) {
            console.error('Error checking status:', error.message);
            return false;
        }
    }

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

// Test script
(async () => {
    const client = new MassMarketClient();
    const status = await client.checkStatus();
    console.log('API Status:', status ? 'Online' : 'Offline');
    const store = await client.createStore();
    console.log('Store:', store);
    const createProduct = await client.createProducts(
        storeId,
        keyCard,
        products
    );
    //const updateProduct = await client.updateProduct('0x02');
})();

module.exports = MassMarketClient;

// IGNORED METHODS
// IGNORE FOR NOW
// async createCart(): Promise<string> {
//     try {
//         const response = await this.client.post('/mm/cart');
//         return response.data;
//     } catch (error) {
//         console.error('Error creating cart:', error.message);
//         throw error;
//     }
// }

// IGNORE FOR NOW
// async commitCart(): Promise<string> {
//     try {
//         const response = await this.client.post('/mm/cart/commit');
//         return response.data;
//     } catch (error) {
//         console.error('Error committing cart:', error.message);
//         throw error;
//     }
// }

// IGNORE FOR NOW
// async addToCart(productId: string, quantity: number): Promise<string> {
//     try {
//         const response = await this.client.post('/mm/cart/add', {
//             productId,
//             quantity,
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error adding to cart:', error.message);
//         throw error;
//     }
//
