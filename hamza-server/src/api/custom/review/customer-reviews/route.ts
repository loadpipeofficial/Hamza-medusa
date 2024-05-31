import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import ProductReviewService from 'src/services/product-review';
import { readRequestBody } from '../../../../utils/request-body';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const productReviewService: ProductReviewService = req.scope.resolve(
        'productReviewService'
    );

    const { product_id, customer_id } = readRequestBody(req.body, [
        'product_id',
        'customer_id',
    ]);
    console.log(`Product ID is: ${product_id}, Customer ID is: ${customer_id}`);

    try {
        const reviews = await productReviewService.getCustomerReviews(
            product_id,
            customer_id
        );
        res.json(reviews);
    } catch (err) {
        console.error('Error fetching product reviews:', err);
        res.status(500).json({
            error: 'Failed to fetch product reviews',
        });
    }
};
