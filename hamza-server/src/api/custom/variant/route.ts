import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import ProductVariantService from '../../../services/product-variant';
import { readRequestBody } from '../../../utils/request-body';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const productVariantService: ProductVariantService = req.scope.resolve(
        'productVariantService'
    );

    const { variant_id, reduction_quantity, test } = readRequestBody(req.body, [
        'variant_id',
        'reduction_quantity',
    ]);

    try {
        // Defaulting quantity to deduct to 1 if not provided
        console.log(`Variant Quantity is ${reduction_quantity}`);
        const quantityToDeduct = reduction_quantity
            ? parseInt(reduction_quantity, 10)
            : 1;
        console.log(`Quantity to deduct: ${quantityToDeduct}`); // Add this log to verify the parsed quantity

        const updatedVariant = await productVariantService.updateInventory(
            variant_id,
            quantityToDeduct
        );
        return res.json({ updatedVariant });
    } catch (err) {
        console.error('Error updating variant:', err);
        res.status(500).json({
            error: 'Failed to update variant',
        });
    }
};
