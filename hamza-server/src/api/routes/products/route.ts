import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import { readRequestBody } from '../../../utils/request-body';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    try {
        const productService = req.scope.resolve('productService');
        const { product_id, store_id } = readRequestBody(req.body, [
            'product_id',
            'store_id',
        ]);

        if (!product_id || !store_id) {
            return res
                .status(400)
                .json({ message: 'Missing product_id or store_id' });
        }
        const product = await productService.updateProduct(product_id, {
            store_id: store_id,
        });
        return res.json({ product });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
