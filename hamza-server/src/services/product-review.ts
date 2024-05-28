import { TransactionBaseService } from '@medusajs/medusa';
import { Lifetime } from 'awilix';
import { ProductReviewRepository } from '../repositories/product-review';
import { ProductReview } from '../models/product-review';
import { Customer } from '../models/customer';

class ProductReviewService extends TransactionBaseService {
    static LIFE_TIME = Lifetime.SCOPED;

    constructor(container) {
        super(container);
    }

    async customerIsVerified(customer_id) {
        const customerRepository = this.activeManager_.getRepository(Customer);
        console.log(`Customer ID is: ${customer_id}`);
        const customer = await customerRepository.findOne({
            where: { id: customer_id },
        });
        if (!customer) {
            throw new Error('Customer not found');
        }
        console.log(`Customer Email is: ${customer.email}`);

        // Returns true if the email does NOT include '@evm.blockchain'
        if (customer.email.includes('@evm.blockchain')) {
            console.log('It includes it....');
        }
        return customer.email.includes('@evm.blockchain');
    }

    async getReviews(product_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        return await this.atomicPhase_(async (transactionManager) => {
            const reviews = await productReviewRepository.find({
                where: { product_id },
                relations: ['rating', 'content'],
            });
            return reviews;
        });
    }

    async updateProductReview(product_id, reviewUpdates, customer_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);

        const existingReview = await productReviewRepository.findOne({
            where: { product_id, customer_id },
        });

        console.log(`existingReview: ${existingReview.content}`);

        if (!existingReview) {
            throw new Error('Review not found'); // Proper error handling if the review doesn't exist
        }

        existingReview.content = reviewUpdates;

        return await productReviewRepository.save(existingReview);
    }

    async updateProductRating(product_id, rating, customer_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);

        const existingReview = await productReviewRepository.findOne({
            where: { product_id, customer_id },
        });

        console.log(`existingReview: ${existingReview.rating}`);

        if (!existingReview) {
            throw new Error('Review not found'); // Proper error handling if the review doesn't exist
        }

        existingReview.rating = rating;

        return await productReviewRepository.save(existingReview);
    }

    async addProductReview(product_id, data) {
        if (!data.title || !data.customer_id || !data.content || !data.rating) {
            throw new Error(
                'Product review requires title, customer_id, content, and rating'
            );
        }

        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        const createdReview = productReviewRepository.create({
            product_id: product_id,
            title: data.title,
            customer_id: data.customer_id, // Assuming there is a customer_id field
            content: data.content,
            rating: data.rating,
        });
        const productReview = await productReviewRepository.save(createdReview);

        return productReview;
    }
}

export default ProductReviewService;

/**
 * - customerIsVerified
 * - customerHasBoughtProduct(product_id)
 * - customerHasLeftReview(product_id, order_id)
 * - customerHasLeftRating(product_id, order_id)
 * - getRatings(product_id)
 * - getReviews(product_id)
 * - saveRating(customer_id, product_id, order_id)
 * - saveReview(customer_id, product_id, order_id)
 */
