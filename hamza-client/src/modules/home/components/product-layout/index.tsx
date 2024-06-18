'use client';

import React, { useState } from 'react';
import ProductCard from './components/product-card';
import { SimpleGrid, Container } from '@chakra-ui/react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { formatCryptoPrice } from '@lib/util/get-product-price';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import { addToCart } from '@modules/cart/actions';
import { ProductPreview } from '@modules/products/components/product-preview';
import LocalizedClientLink from '@modules/common/components/localized-client-link';

type Props = {
    vendorName: string;
    category: string;
};

const ProductCardGroup = ({ vendorName, category }: Props) => {
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
    console.log(`Products ${JSON.stringify(products)}`);

    //TODO: Make product card clickable to product preview
    return (
        <Container maxW="1280px" py="8" backgroundColor={'transparent'}>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 4 }}
                spacing="1.25rem"
                rowGap="2.5rem"
                placeItems="center"
            >
                {products.map((product: any, index: number) => {
                    const variantPrices = product.variants
                        .map((variant: any) => variant.prices)
                        .flat();

                    const varientID = product.variants[0].id;
                    const reviewCounter = product.reviews.length;
                    const totalRating = product.reviews.reduce(
                        (acc: number, review: any) => acc + review.rating,
                        0
                    );
                    const avgRating = totalRating / reviewCounter;
                    const productPricing = formatCryptoPrice(
                        variantPrices[0].amount,
                        preferred_currency_code as string
                    );
                    return (
                        <ProductCard
                            key={index}
                            productHandle={products[index].handle}
                            varientID={varientID}
                            reviewCount={reviewCounter}
                            totalRating={avgRating}
                            countryCode={product.countryCode}
                            productName={product.title}
                            productPrice={productPricing}
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
