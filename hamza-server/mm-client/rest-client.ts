const axios = require('axios');

const REST_URL = process.env.REST_SERVER_URL || 'http://localhost:3000';

class mmClient {
    constructor() {
        this.client = axios.create({
            baseURL: REST_URL,
            timeout: 1000,
        });
    }

    async createStore(): Promise<{ store_id: string; keycard: string }> {
        try {
            const response = await this.client.post('/mm/store');
            return response.data;
        } catch (error) {
            console.error('Error creating store:', error.message);
            throw error;
        }
    }

    async addProduct({
        name,
        price,
        image,
    }: {
        name: string;
        price: string;
        image: string;
    }): Promise<string> {
        try {
            const response = await this.client.post('/mm/product', {
                name,
                price,
                image,
            });
            return response.data;
        } catch (error) {
            console.error('Error adding product:', error.message);
            throw error;
        }
    }

    async createCart(): Promise<string> {
        try {
            const response = await this.client.post('/mm/cart');
            return response.data;
        } catch (error) {
            console.error('Error creating cart:', error.message);
            throw error;
        }
    }

    async commitCart(): Promise<string> {
        try {
            const response = await this.client.post('/mm/cart/commit');
            return response.data;
        } catch (error) {
            console.error('Error committing cart:', error.message);
            throw error;
        }
    }

    async addToCart(productId: string, quantity: number): Promise<string> {
        try {
            const response = await this.client.post('/mm/cart/add', {
                productId,
                quantity,
            });
            return response.data;
        } catch (error) {
            console.error('Error adding to cart:', error.message);
            throw error;
        }
    }
}

module.exports = mmClient;
