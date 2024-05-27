import { Lifetime } from 'awilix';
import { ProductService as MedusaProductService } from '@medusajs/medusa';
import {
    CreateProductInput,
    CreateProductProductVariantPriceInput,
} from '@medusajs/medusa/dist/types/product';
import { Product } from '../models/product';
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

    async updateProduct(
        productId: string,
        update: UpdateProductInput
    ): Promise<Product> {
        console.log('Received update for product:', productId, update);
        const result = await super.update(productId, update);
        return result;
    }

    async getProductsFromStoreWithPrices(storeId: string): Promise<Product[]> {
        return this.productRepository_.find({
            where: { store_id: storeId },
            relations: ['variants.prices'],
        });
    }
}

export default ProductService;
