'use client';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    Flex,
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
            // API calls remain the same
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

            // Initialize the rating distribution to ensure all ratings from 1 to 5 are accounted for
            const initialRatingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
            const distribution = reviewsResponse.data.reduce((acc, review) => {
                acc[review.rating] = (acc[review.rating] || 0) + 1;
                return acc;
            }, initialRatingDistribution);

            setRatingDistribution(distribution);
        };

        fetchReviewData();
    }, [product.id]);

    const ratings = Object.keys(ratingDistribution).sort((a, b) => b - a); // Sort ratings descending
    const initialRatingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    return (
        <Box className="bg-black text-white p-4">
            <Stack
                spacing={5}
                mb={8}
                justifyContent="center"
                alignItems="center"
            >
                <Heading size="lg" mb={4}>
                    Average Rating: {averageRating} / 5
                </Heading>
                {[5, 4, 3, 2, 1].map((rating) => (
                    <Flex key={rating} align="center">
                        {/* Static display of stars */}
                        <Box mr={4}>
                            <span className="text-yellow-500 text-2xl">
                                {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                            </span>
                        </Box>
                        <Text flexShrink={0} mr={4}>
                            {rating} Stars
                        </Text>
                        <Box>
                            {' '}
                            {/* Adjust the width as necessary */}
                            <Progress
                                width={'400px'}
                                colorScheme="yellow"
                                size="md"
                                value={ratingDistribution[rating]}
                                max={reviewCount}
                                hasStripe
                                isAnimated
                            />
                        </Box>
                        <Text m={2}>{ratingDistribution[rating]}</Text>
                    </Flex>
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
                                <Text fontSize="sm">
                                    Date:{' '}
                                    {format(new Date(review.created_at), 'PPP')}
                                </Text>
                            </Box>
                        ))}
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
};

export default ProductReview;
