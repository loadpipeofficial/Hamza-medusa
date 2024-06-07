import axios, { AxiosInstance } from 'axios';
export type HexString = `0x${string}`;

const REST_URL = process.env.REST_SERVER_URL || 'http://localhost:3000';

class mmClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: REST_URL,
            timeout: 1000,
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

    async createStore(options = {}): Promise<boolean> {
        // ): Promise<{ store_id: string; keycard: string }> {
        try {
            const response = await this.client.post('/api/store', options);
            // return response.data;
            return true;
        } catch (error) {
            console.error('Error creating store:', error.message);
            throw error;
        }
    }

    async createProduct(product_id: HexString): Promise<boolean> {
        try {
            const response = await this.client.post(
                `/api/products/${product_id}`,
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log(`Creating Product: ${product_id}`);
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error.message);
            throw error;
        }
    }

    async updateProduct(product_id: HexString): Promise<boolean> {
        try {
            const response = await this.client.put(
                `/api/products/${product_id}`,
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log(`Updating Product: ${product_id}`);
            return response.data;
        } catch (error) {
            console.error('Error updating product:', error.message);
            throw error;
        }
    }
}
// Test script
(async () => {
    const client = new mmClient();
    const status = await client.checkStatus();
    console.log('API Status:', status ? 'Online' : 'Offline');
    const store = await client.createStore();
    console.log('Store:', store);
    const createProduct = await client.createProduct('0x01');
    const updateProduct = await client.updateProduct('0x02');
})();

module.exports = mmClient;

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
