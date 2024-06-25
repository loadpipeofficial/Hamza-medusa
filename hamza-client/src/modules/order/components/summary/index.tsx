'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Image,
    Text,
    Stack,
    Link,
    SimpleGrid,
    Heading,
} from '@chakra-ui/react';

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

interface Product {
    store_id: string;
    massmarket_prod_id: string;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    title: string;
    subtitle: string | null;
    description: string;
    handle: string;
    is_giftcard: boolean;
    status: string;
    thumbnail: string;
    weight: number;
    length: number | null;
    height: number | null;
    width: number | null;
    hs_code: string | null;
    origin_country: string | null;
    mid_code: string | null;
    material: string | null;
    collection_id: string | null;
    type_id: string | null;
    discountable: boolean;
    external_id: string | null;
    metadata: Record<string, any> | null;
}

const Summary: React.FC<{ cart_id: string }> = ({ cart_id }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/order/complete-template`,
                    {
                        cart_id: cart_id,
                    }
                );
                // Assuming the response contains the products array in `response.data.products`
                const fetchedProducts: Product[] = response.data.cart || [];
                console.log(`Fetched products: ${JSON.stringify(response)}`);
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]); // Ensure products is always an array
            }
        };

        fetchProducts();
    }, [cart_id]);

    return (
        <Box p="8">
            <Heading as="h1" size="xl" mb="8">
                Product Summary
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="8">
                {products.map((product) => (
                    <Box
                        key={product.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="6"
                    >
                        <Image src={product.thumbnail} alt={product.title} />
                        <Box p="6">
                            <Stack spacing="4">
                                <Box>
                                    <Text
                                        fontWeight="bold"
                                        as="h2"
                                        fontSize="xl"
                                    >
                                        {product.title}
                                    </Text>
                                    <Text mt="2">{product.description}</Text>
                                </Box>
                                <Link
                                    color="teal.500"
                                    href={`/products/${product.handle}`}
                                >
                                    View Product
                                </Link>
                            </Stack>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Summary;
