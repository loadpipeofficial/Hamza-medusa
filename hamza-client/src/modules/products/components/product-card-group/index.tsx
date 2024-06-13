'use client';

import React from 'react';
import ProductCard from '../product-card';
import {
    SimpleGrid,
    Container,
    Box,
    Skeleton,
    SkeletonText,
} from '@chakra-ui/react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { formatCryptoPrice } from '@lib/util/get-product-price';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import StoreFilterDisplay from '@modules/store-v2/component/store-filter-display';

type Props = {
    vendorName: string;
    category: string;
    gridColumns: {
        base?: number;
        sm?: number;
        md?: number;
        lg?: number;
    };
    layoutMaxWidth: string;
};

const ProductCardGroup = ({
    vendorName,
    category,
    gridColumns,
    layoutMaxWidth,
}: Props) => {
    // Get products from vendor
    const { data, error, isLoading } = useQuery(
        ['products', { vendor: vendorName }],
        () =>
            axios.get(
                `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'}/store/custom/products?store_name=${vendorName}`
            )
    );

    console.log(data);

    const { status, preferred_currency_code } = useCustomerAuthStore();

    if (isLoading) {
        return null; // Suspense will handle the loading fallback.
    }

    if (error) return <div>Error: {error?.message}</div>;

    const products = data?.data;
    const renderSkeletons = (num: number) => {
        return Array.from({ length: num }).map((_, index) => (
            <Box
                key={index}
                maxW="295px"
                h="399px"
                borderRadius="16px"
                overflow="hidden"
                backgroundColor="#121212"
                p="4"
            >
                <Skeleton height="240px" />
                <Box p="4">
                    <SkeletonText mt="4" noOfLines={3} spacing="4" />
                    <Skeleton mt="4" height="20px" />
                    <Skeleton mt="2" height="20px" width="60px" />
                </Box>
            </Box>
        ));
    };

    //TODO: Make product card clickable to product preview
    return (
        <Container maxW={layoutMaxWidth} backgroundColor={'transparent'}>
            <StoreFilterDisplay />
            <SimpleGrid
                columns={gridColumns}
                spacing="1.25rem"
                rowGap="2.5rem"
                placeItems="center"
            >
                {isLoading
                    ? renderSkeletons(8) // Render 8 skeletons while loading
                    : products.map((product: any, index: number) => {
                          const variantPrices = product.variants
                              .map((variant: any) => variant.prices)
                              .flat();

                          const varientID = product.variants[0].id;
                          return (
                              <ProductCard
                                  key={index}
                                  productHandle={products[index].handle}
                                  varientID={varientID}
                                  countryCode={product.countryCode}
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
    );
};

export default ProductCardGroup;
