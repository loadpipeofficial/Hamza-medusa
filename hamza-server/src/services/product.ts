import { Lifetime } from 'awilix';
import {
    ProductService as MedusaProductService,
    Logger,
} from '@medusajs/medusa';
import {
    CreateProductInput,
    CreateProductProductVariantPriceInput,
} from '@medusajs/medusa/dist/types/product';
import { Product } from '../models/product';
import logger from '@medusajs/medusa-cli/dist/reporter';

export type UpdateProductProductVariantDTO = {
    id?: string;
    store_id?: string;
    title?: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: CreateProductProductVariantPriceInput[];
    options?: {
        value: string;
        option_id: string;
    }[];
};

type UpdateProductInput = Omit<Partial<CreateProductInput>, 'variants'> & {
    variants?: UpdateProductProductVariantDTO[];
};

class ProductService extends MedusaProductService {
    static LIFE_TIME = Lifetime.SCOPED;
    protected readonly logger: Logger;

    constructor(container) {
        super(container);
        this.logger = container.logger;
    }

    async updateProduct(
        productId: string,
        update: UpdateProductInput
    ): Promise<Product> {
        this.logger.debug(
            `Received update for product: ${productId}, ${update}`
        );
        const result = await super.update(productId, update);
        return result;
    }

    async getProductsFromStoreWithPrices(storeId: string): Promise<Product[]> {
        return this.productRepository_.find({
            where: { store_id: storeId },
            relations: ['variants.prices'],
        });
    }

    async getProductsFromStore(storeId: string): Promise<Product[]> {
        // this.logger.log('store_id: ' + storeId); // Potential source of the error
        return this.productRepository_.find({
            where: { store_id: storeId },
            // relations: ['store'],
        });
    }

    async getProductsFromReview(storeId: string): Promise<Product[]> {
        try {
            return await this.productRepository_.find({
                where: { store_id: storeId },
                relations: ['product_review'],
            });
        } catch (error) {
            // Handle the error here
            console.error(
                'Error occurred while fetching products from review:',
                error
            );
            throw error; // You may choose to handle or rethrow the error depending on your application logic
        }
    }
}

export default ProductService;
