import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import ProductReviewService from '../../../../services/product-review';
import { readRequestBody } from '../../../../utils/request-body';

export const PATCH = async (req: MedusaRequest, res: MedusaResponse) => {
    const productReviewService: ProductReviewService = req.scope.resolve(
        'productReviewService'
    );

    const { product_id, rating, customer_id } = readRequestBody(req.body, [
        'product_id',
        'rating',
        'customer_id',
    ]);

    console.log(
        'product_id: ',
        product_id,
        'rating: ',
        rating,
        'customer_id: ',
        customer_id
    );

    try {
        const updatedReview = await productReviewService.updateProductReview(
            product_id,
            rating,
            customer_id
        );
        res.json(updatedReview);
    } catch (err) {
        console.error('Error updating product review:', err);
        res.status(500).json({
            error: 'Failed to update product review',
        });
    }
};
