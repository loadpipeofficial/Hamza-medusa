'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    Text,
    Progress,
    StackDivider,
    Box,
} from '@chakra-ui/react';

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
    const ratings = Object.keys(ratingDistribution).sort((a, b) => b - a); // Sort ratings descending

    return (
        <Box className="bg-black text-white p-4">
            <Heading size="lg" mb={4}>
                Average Rating: {averageRating?.toFixed(1)} / 5
            </Heading>
            <Stack spacing={5} mb={8}>
                {ratings.map((rating) => (
                    <Box key={rating}>
                        <Text>{rating} Stars</Text>
                        <Progress
                            colorScheme="yellow"
                            size="sm"
                            value={ratingDistribution[rating]}
                            max={reviewCount}
                            hasStripe
                            isAnimated
                        />
                        <Text>
                            {(
                                (ratingDistribution[rating] / reviewCount) *
                                100
                            )?.toFixed(1)}
                            % ({ratingDistribution[rating]})
                        </Text>
                    </Box>
                ))}
            </Stack>
            <Card>
                <CardHeader>
                    <Heading size="md">Product Reviews</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing={4}>
                        {reviews.map((review) => (
                            <Box key={review.id}>
                                <Heading size="xs" textTransform="uppercase">
                                    {review.title}
                                </Heading>
                                <Text fontSize="sm">
                                    Customer ID: {review.customer_id}
                                </Text>
                                <Text fontSize="sm">
                                    Rating: {review.rating} / 5
                                </Text>
                                <Text fontSize="sm">{review.content}</Text>
                            </Box>
                        ))}
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
};

export default ProductReview;
