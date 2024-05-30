'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

type Review = {
    id: string;
    created_at: string;
    updated_at: string;
    product_id: string;
    title: string;
    customer_id: string;
    order_id: string | null;
    rating: number;
    content: string;
};

type ProductReviewProps = {
    product: any; // Adjust type based on actual product type
    countryCode: string;
};

const ProductReview: React.FC<ProductReviewProps> = ({
    product,
    countryCode,
}) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [averageRating, setAverageRating] = useState<number>(0);
    const [reviewCount, setReviewCount] = useState<number>(0);
    const [ratingDistribution, setRatingDistribution] = useState<{
        [key: number]: number;
    }>({});

    useEffect(() => {
        const fetchReviewData = async () => {
            const averageRatingResponse = await axios.post(
                'http://localhost:9000/custom/review/average',
                { product_id: product.id }
            );
            const reviewCountResponse = await axios.post(
                'http://localhost:9000/custom/review/count',
                { product_id: product.id }
            );
            const reviewsResponse = await axios.post(
                'http://localhost:9000/custom/review/all-reviews',
                { product_id: product.id }
            );

            setAverageRating(averageRatingResponse.data.average);
            setReviewCount(reviewCountResponse.data.count);
            setReviews(reviewsResponse.data);

            // Calculate rating distribution
            const distribution = {};
            reviewsResponse.data.forEach((review: Review) => {
                distribution[review.rating] =
                    (distribution[review.rating] || 0) + 1;
            });
            setRatingDistribution(distribution);
        };

        fetchReviewData();
    }, [product.id]);

    return (
        <div className="bg-black text-white p-4">
            <div className="flex items-center mb-4">
                <div>
                    <h2>Average Rating: {averageRating}</h2>
                    <div>
                        {Object.keys(ratingDistribution).map((rating) => (
                            <div key={rating}>
                                <label>{rating} Stars:</label>
                                <progress
                                    value={ratingDistribution[rating]}
                                    max={reviewCount}
                                ></progress>
                                {(ratingDistribution[rating] / reviewCount) *
                                    100}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Ratings & Reviews</h3>
                    {reviews.map((review) => (
                        <div key={review.id} className="mb-2">
                            <strong>{review.title}</strong>
                            <p>{review.content}</p>
                            <small>Rating: {review.rating}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductReview;
