import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import ProductVariantService from '../../../../services/product-variant';
import { readRequestBody } from '../../../../utils/request-body';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const productVariantService: ProductVariantService = req.scope.resolve(
        'productVariantService'
    );

    // Assuming your framework supports JSON parsing middleware
    const { variant_id } = readRequestBody(req.body, ['variant_id']);

    try {
        const variant = await productVariantService.checkInventory(
            variant_id as string
        );
        return res.json({ variant });
    } catch (err) {
        console.error('Error checking inventory:', err);
        res.status(500).json({
            error: 'Failed to check inventory',
        });
    }
};
