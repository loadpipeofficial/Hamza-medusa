'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@medusajs/ui';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'; // Import Chakra UI components
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
import Thumbnail from '@modules/products/components/thumbnail';

const VendorTemplate = ({ vendors }: any) => {
    const [selectedVendor, setSelectedVendor] = useState(vendors[1]); // Set the second vendor as default selected
    const [products, setProducts] = useState([]); // State to hold the products
    const [reviewStats, setReviewStats] = useState({
        reviewCount: 0,
        avgRating: 0,
    });

    const handleSelectVendor = (vendor: any) => {
        setSelectedVendor(vendor);
        // console.log(`Selected Vendor ${vendor.id}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/vendors/vendor-products`,
                    {
                        store_id: selectedVendor.id,
                    }
                );
                const data = response.data;
                setProducts(response.data); // Set the fetched products to state
                // console.log(`Response ${JSON.stringify(data)}`);
            } catch (error) {
                console.log(`Error ${error}`);
            }
        };

        const fetchReviewStats = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/vendors/vendor-reviews`,
                    {
                        store_id: selectedVendor.id,
                    }
                );
                // console.log(
                //     `Review stats are ${JSON.stringify(response.data)}`
                // );
                setReviewStats(response.data);
            } catch (error) {
                console.log(`Error fetching review stats: ${error}`);
            }
        };

        fetchData();
        fetchReviewStats();
    }, [selectedVendor]);

    // console.log(`Vendors ${JSON.stringify(vendors)}`);

    return (
        <div className="bg-black text-white text-center p-4">
            <h1 className="mb-4">Vendors</h1>
            <div className="flex flex-wrap justify-center">
                {vendors.map((vendor: any) => (
                    <div key={vendor.id} className="mb-4 mx-4">
                        <Button
                            onClick={() => handleSelectVendor(vendor)}
                            style={{
                                backgroundColor:
                                    vendor === selectedVendor
                                        ? 'orange'
                                        : 'initial',
                            }}
                        >
                            <h2>{vendor.name}</h2>
                            <p>{vendor.description}</p>
                        </Button>
                    </div>
                ))}
            </div>
            <Box mt={4}>
                <Heading>Selected Vendor: {selectedVendor.name}</Heading>
                <Text>Total Products: {products.length}</Text>{' '}
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
                {/* Render the total number of products */}
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(auto-fit, minmax(180px, 1fr))',
                    }}
                    gap={12}
                    mt={4}
                    justifyContent={{ base: 'center', md: 'space-between' }}
                >
                    {/* Map over the products and render each product in a Chakra UI card */}
                    {products.map((product: any) => (
                        <GridItem
                            key={product.id}
                            minHeight="200px"
                            maxW="180px"
                            justifyContent="space-between" // Distribute grid items evenly along the main axis
                        >
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                h="100%" // Set the box height to fill the GridItem height
                            >
                                <Thumbnail
                                    thumbnail={product.thumbnail}
                                    size={'small'}
                                />
                                <Box p={3}>
                                    <Heading size="md" my="2">
                                        {product.title}
                                    </Heading>
                                    <Text>{product.description}</Text>
                                </Box>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default VendorTemplate;
