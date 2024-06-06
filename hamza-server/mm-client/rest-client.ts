const axios = require('axios');

const REST_URL = process.env.REST_SERVER_URL;

class mmClient {
    constructor() {
        this.client = axios.create({
            baseURL: { REST_URL },
            timeout: 1000,
        });
    }

    async createStore() {
        try {
            const response = await this.client.post('/store');
            return response.data;
        } catch (error) {
            console.error('Error creating store:', error.message);
            throw error;
        }
    }

    async addProduct({ name, price, image }) {
        try {
            const response = await this.client.post('/product', {
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

    async createCart() {
        try {
            const response = await this.client.post('/cart');
            return response.data;
        } catch (error) {
            console.error('Error creating cart:', error.message);
            throw error;
        }
    }

    async commitCart() {
        try {
            const response = await this.client.post('/cart/commit');
            return response.data;
        } catch (error) {
            console.error('Error committing cart:', error.message);
            throw error;
        }
    }

    async addToCart(productId, quantity) {
        try {
            const response = await this.client.post('/cart/add', {
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
