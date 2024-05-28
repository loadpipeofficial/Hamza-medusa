import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import ProductReviewService from 'src/services/product-review';
import { readRequestBody } from '../../../utils/request-body';

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const productReviewService: ProductReviewService = req.scope.resolve(
        'productReviewService'
    );

    const { product_id } = req.params;

    try {
        const reviews = await productReviewService.getReviews(product_id);
        res.json(reviews);
    } catch (err) {
        console.error('Error fetching product reviews:', err);
        res.status(500).json({
            error: 'Failed to fetch product reviews',
        });
    }
};

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const productReviewService: ProductReviewService = req.scope.resolve(
        'productReviewService'
    );

    const { product_id, title, customer_id, content, rating } = readRequestBody(
        req.body,
        ['product_id', 'title', 'customer_id', 'content', 'rating']
    );

    console.log(
        'product_id: ',
        product_id,
        'title: ',
        title,
        'customer_id: ',
        customer_id,
        'content: ',
        content,
        'rating: ',
        rating
    );

    try {
        const review = await productReviewService.addProductReview(product_id, {
            title,
            customer_id,
            content,
            rating,
        });
        res.json(review);
    } catch (err) {
        console.error('Error creating product review:', err);
        res.status(500).json({
            error: 'Failed to create product review',
        });
    }
};
