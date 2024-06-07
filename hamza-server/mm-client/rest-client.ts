import axios, { AxiosInstance } from 'axios';

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

    async createStore(
        options = {}
    ): Promise<{ store_id: string; keycard: string }> {
        try {
            const response = await this.client.post('/api/store', options);
            return response.data;
        } catch (error) {
            console.error('Error creating store:', error.message);
            throw error;
        }
    }

    // async addProduct({
    //     name,
    //     price,
    //     image,
    // }: {
    //     name: string;
    //     price: string;
    //     image: string;
    // }): Promise<string> {
    //     try {
    //         const response = await this.client.post('/mm/product', {
    //             name,
    //             price,
    //             image,
    //         });
    //         return response.data;
    //     } catch (error) {
    //         console.error('Error adding product:', error.message);
    //         throw error;
    //     }
    // }
}
// Test script
(async () => {
    const client = new mmClient();
    const status = await client.checkStatus();
    console.log('API Status:', status ? 'Online' : 'Offline');
    const store = await client.createStore();
    console.log('Store:', store);
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
