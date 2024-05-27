import { ProductVariantService as MedusaProductVariantService } from '@medusajs/medusa';
import { ProductVariant } from '@medusajs/medusa';
import { Lifetime } from 'awilix';
import { ProductVariantRepository } from '../repositories/product-variant';

class ProductVariantService extends MedusaProductVariantService {
    static LIFE_TIME = Lifetime.SCOPED;
    protected readonly productVariantRepository_: typeof ProductVariantRepository;

    constructor(container) {
        super(container);
        this.productVariantRepository_ = container.productVariantRepository;
    }

    async checkInventory(variantId: string) {
        try {
            const productVariant = await this.productVariantRepository_.findOne(
                {
                    where: { id: variantId },
                }
            );
            console.log(
                `Inventory for variant ${productVariant.id}: ${productVariant.inventory_quantity}`
            );
            return productVariant.inventory_quantity;
        } catch (e) {
            console.log(
                `Error checking inventory for variant ${variantId}: ${e}`
            );
        }
    }

    async updateInventory(
        variantOrVariantId: string,
        quantityToDeduct: number
    ) {
        try {
            const productVariant = await this.productVariantRepository_.findOne(
                {
                    where: { id: variantOrVariantId },
                }
            );

            if (productVariant.inventory_quantity >= quantityToDeduct) {
                productVariant.inventory_quantity -= quantityToDeduct;
                await this.productVariantRepository_.save(productVariant);
                console.log(
                    `Inventory updated for variant ${productVariant.id}, new inventory count: ${productVariant.inventory_quantity}`
                );
                return productVariant;
            } else if (productVariant.allow_backorder) {
                console.log(
                    'Inventory below requested deduction but backorders are allowed.'
                );
            } else {
                console.log(
                    'Not enough inventory to deduct the requested quantity.'
                );
            }
        } catch (e) {
            console.log(
                `Error updating inventory for variant ${variantOrVariantId}: ${e}`
            );
        }
    }
}

export default ProductVariantService;
