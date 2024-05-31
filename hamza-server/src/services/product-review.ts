import { TransactionBaseService } from '@medusajs/medusa';
import { Lifetime } from 'awilix';
import { ProductReviewRepository } from '../repositories/product-review';
import { ProductReview } from '../models/product-review';
import { Customer } from '../models/customer';
import { ProductVariantRepository } from '../repositories/product-variant';

class ProductReviewService extends TransactionBaseService {
    static LIFE_TIME = Lifetime.SCOPED;
    protected readonly productVariantRepository_: typeof ProductVariantRepository;

    constructor(container) {
        super(container);
        this.productVariantRepository_ = container.productVariantRepository;
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

    async customerHasBoughtProduct(customer_id, product_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        const productReview = await productReviewRepository.find({
            where: { product_id, customer_id },
        });

        if (!productReview) {
            console.log(
                `No product review found for product_id: ${product_id} and customer_id: ${customer_id}`
            );
            return null;
        }

        return !!productReview;
    }

    async customerHasLeftReview(product_id, order_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        const productReview = await productReviewRepository.find({
            where: { product_id: product_id, order_id: order_id },
        });
        console.log(`productReview: ${productReview}`);

        if (!productReview) {
            console.log(
                `No product review found for product_id: ${product_id} and order_id: ${order_id}`
            );
            return false;
        }

        return true;
    }

    async getReviews(product_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        const reviews = await productReviewRepository.find({
            where: { product_id },
        });

        if (!reviews) {
            throw new Error('No reviews found');
        }

        return reviews;
    }

    async getCustomerReviews(product_id, customer_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        const reviews = await productReviewRepository.find({
            where: { product_id, customer_id },
        });

        if (!reviews) {
            throw new Error('No reviews found');
        }

        return reviews;
    }

    async getReviewCount(product_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        const reviews = await productReviewRepository.find({
            where: { product_id },
        });

        if (!reviews) {
            throw new Error('No reviews found');
        }

        return reviews.length;
    }

    async getAverageRating(product_id) {
        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);
        const reviews = await productReviewRepository.find({
            where: { product_id },
        });

        if (!reviews) {
            throw new Error('No reviews found');
        }

        const averageRating =
            reviews.reduce((acc, review) => acc + review.rating, 0) /
            reviews.length;

        console.log(`The average rating is: ${averageRating.toFixed(2)}`);
        return averageRating;
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
        if (
            !product_id ||
            !data.title ||
            !data.customer_id ||
            !data.content ||
            !data.rating ||
            !data.order_id
        ) {
            throw new Error(
                'Product review requires title, customer_id, content, and rating'
            );
        }

        const productReviewRepository =
            this.activeManager_.getRepository(ProductReview);

        let productId;

        try {
            const variantProduct = await this.productVariantRepository_.findOne(
                {
                    where: { id: product_id }, // Assuming product_id is the ID of the variant
                }
            );

            if (!variantProduct) {
                throw new Error('Product variant not found');
            }

            productId = variantProduct.product_id; // This assumes that variantProduct actually contains a product_id
        } catch (e) {
            console.error(`Error fetching product variant: ${e}`);
            throw e; // Rethrow or handle the error appropriately
        }

        // Ensure productId was successfully retrieved before proceeding
        if (!productId) {
            throw new Error('Unable to retrieve product ID for the review');
        }

        const createdReview = productReviewRepository.create({
            product_id: productId,
            title: data.title,
            customer_id: data.customer_id, // Assuming there is a customer_id field
            content: data.content,
            rating: data.rating,
            order_id: data.order_id,
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
