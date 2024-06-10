'use client';

import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import ProductCollections from '@modules/collections/product_collection_filter';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'; // Import Chakra UI components
import SkeletonProductGrid from '@modules/skeletons/templates/skeleton-product-grid';
import axios from 'axios';
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
import { format } from 'date-fns';

export default function Page({ params }: { params: { slug: string } }) {
    const displaySlug = capitalizeSlug(params.slug);
    const [reviewStats, setReviewStats] = useState({
        reviewCount: 0,
        avgRating: 0,
        productCount: 0,
        createdAt: '',
    });
    console.log(`slug name ${displaySlug}`);
    // can I get a store_id from vendor name??
    // yes you can so let's do that, /custom/vendors/vendor-reviews
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/vendors/vendor-store`,
                    {
                        store_name: displaySlug,
                    }
                );
                console.log(`Response ${JSON.stringify(response.data)}`);
                setReviewStats(response.data);
            } catch (error) {
                console.log(`Error ${error}`);
            }
        };

        fetchData();
    }, [displaySlug]);

    let readableDate = 'Invalid date';
    if (reviewStats.createdAt) {
        try {
            readableDate = new Date(reviewStats.createdAt).toLocaleDateString(
                'en-US',
                {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }
            );
        } catch (error) {
            console.error('Error parsing date:', error);
        }
    }

    return (
        <div className="bg-black text-white text-center flex flex-col py-12">
            <h1 className="text-3xl font-bold mb-4 text-center">
                {displaySlug} {/* Display the capitalized slug */}
            </h1>
            <Text>Total Products: {reviewStats.productCount}</Text>
            <Text>Vendor Created at: {readableDate}</Text>
            <Box>
                <Heading as="h2" size="md" mt={4}>
                    Review Stats
                </Heading>
                <Text>
                    {reviewStats.reviewCount === 0
                        ? 'No reviews yet'
                        : `Average Rating: ${reviewStats.avgRating.toFixed(1)}`}
                </Text>
                <Text>
                    {reviewStats.reviewCount === 0
                        ? 'No ratings yet'
                        : `Review Count: ${reviewStats.reviewCount}`}
                </Text>
            </Box>
            <div>
                <ProductCollections vendorName={displaySlug} />{' '}
                {/* Pass the capitalized slug */}
            </div>
        </div>
    );
}

// Function to capitalize each word in the slug
function capitalizeSlug(slug: string) {
    // Decode URI components before processing
    const decodedSlug = decodeURIComponent(slug);
    return decodedSlug
        .replace(/\+/g, ' ')
        .split(/[\s-]+/) // Split on any sequence of spaces or dashes
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
}
