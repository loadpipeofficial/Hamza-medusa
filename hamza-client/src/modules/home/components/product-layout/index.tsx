'use client';

import React, { useEffect } from 'react';
import ProductCard from './components/product-card';
import { Box, SimpleGrid, Container } from '@chakra-ui/react';
import products from './data/data';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { formatCryptoPrice } from '@lib/util/get-product-price';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';

type Props = {
    vendorName: string;
    category: string;
};

const ProductCardGroup = ({ vendorName, category }: Props) => {
    //TODO: Make product card clickable to product preview
    //TODO: Filter Cards when searching

    const { data, error, isLoading } = useQuery(
        ['products', { vendor: vendorName }],
        () =>
            axios.get(
                `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'}/store/custom/products?store_name=${'Goblin Store'}`
            )
    );

    console.log(data);

    const { status, preferred_currency_code } = useCustomerAuthStore();

    if (isLoading) {
        return null; // Suspense will handle the loading fallback.
    }

    if (error) return <div>Error: {error?.message}</div>;

    const products = data?.data;

    return (
        <Box my="8" p="8">
            <Container maxW="1440px">
                <SimpleGrid
                    columns={[1, 2, 3, 4]}
                    spacing="1.25rem"
                    rowGap="2.5rem"
                    placeItems="center"
                >
                    {products.map((product: any) => {
                        // Extracting prices from all variants
                        const variantPrices = product.variants
                            .map((variant: any) => variant.prices)
                            .flat();
                        return (
                            <ProductCard
                                key={product.id}
                                productName={product.title}
                                productPrice={variantPrices[0].amount}
                                imageSrc={product.thumbnail}
                                hasDiscount={product.is_giftcard}
                                discountValue={product.discountValue}
                            />
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default ProductCardGroup;
