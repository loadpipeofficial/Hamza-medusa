'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, Text, Button, Stack } from '@chakra-ui/react';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import Thumbnail from '@modules/products/components/thumbnail';
import Tweet from '@/components/tweet';
import { useRouter, useParams } from 'next/navigation';

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
    store_name: string;
    unit_price: number;
    currency_code: string;
    order_id: string;
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
    const router = useRouter();
    const { countryCode } = useParams();

    console.log(`CART ID IS ${cart_id}`);
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
        <Flex direction="column" gap={8}>
            {products.map((product) => (
                <Box
                    key={product.id}
                    borderWidth="1px"
                    borderRadius="lg"
                    p={6}
                    mb={8}
                >
                    <Tweet productHandle={product.handle} isPurchased={true} />
                    <Box mb={4}>
                        <Heading size="md">{product.title}</Heading>
                        <Text mt={2}>{product.description}</Text>
                    </Box>
                    <Stack spacing={2}>
                        <Text>
                            {new Date(product.created_at).toDateString()}
                        </Text>
                        <Text>Product SKU: {product.id}</Text>
                        <Text>Order ID: {product.order_id}</Text>
                        <Text>
                            {product.unit_price} {product.currency_code}
                        </Text>
                        <Text>Store Name: {product.store_name}</Text>
                    </Stack>

                    <LocalizedClientLink href={`/products/${product.handle}`}>
                        <Thumbnail
                            thumbnail={product.thumbnail}
                            images={[]}
                            size="small"
                        />
                    </LocalizedClientLink>
                    <Button
                        my={4}
                        onClick={() =>
                            router.push(
                                `/${countryCode}/vendor/${product.store_name}`
                            )
                        }
                    >
                        Vendor Store
                    </Button>
                </Box>
            ))}
        </Flex>
    );
};

export default Summary;
