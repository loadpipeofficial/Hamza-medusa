'use client';

import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import React, { Suspense, useEffect } from 'react';

import ImageGallery from '@modules/products/components/image-gallery';
import ProductActions from '@modules/products/components/product-actions';
import ProductOnboardingCta from '@modules/products/components/product-onboarding-cta';
import ProductTabs from '@modules/products/components/product-tabs';
import RelatedProducts from '@modules/products/components/related-products';
// import ProductReview from '@modules/products/components/product-review';
// import ProductInfo from '@modules/products/templates/product-info';
import SkeletonRelatedProducts from '@modules/skeletons/templates/skeleton-related-products';
import { notFound } from 'next/navigation';
import ProductActionsWrapper from './product-actions-wrapper';
import {
    Box,
    Flex,
    Text,
    Image,
    SimpleGrid,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import PreviewGallery from '../components/product-preview/components/preview-gallery';
import ProductInfo from '../components/product-preview/components/product-info';
import PreviewCheckout from '../components/product-preview/components/preview-checkout';
import ProductReview from '../components/product-preview/components/product-review';
import useProductPreview from '@store/product-preview/product-preview';

type ProductTemplateProps = {
    product: PricedProduct;
    region: Region;
    countryCode: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
    product,
    region,
    countryCode,
}) => {
    const { setProductData } = useProductPreview();

    // Only update product data when `product` changes
    useEffect(() => {
        if (product && product.id) {
            setProductData(product);
        } else {
            notFound();
        }
    }, [product, setProductData]);

    if (!product || !product.id) {
        return null; // Return null or some error display component
    }

    return (
        <Flex flexDirection={'column'} alignItems={'center'}>
            <Box mt="2rem">
                <PreviewGallery />
            </Box>

            <Flex
                maxWidth={'1280px'}
                my="2rem"
                gap={'26px'}
                width={'100%'}
                justifyContent={'center'}
            >
                <ProductInfo />
                <PreviewCheckout />
            </Flex>

            <Box mb="2rem">
                <ProductReview />
            </Box>
        </Flex>
    );
};

export default ProductTemplate;

{
    /* <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative bg-black">
<div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
    <ProductInfo product={product} />
    <ProductTabs product={product} />
</div>
<div className="block w-full relative">
    <ImageGallery images={product?.images || []} />
</div>
<div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
    <ProductOnboardingCta />
    <Suspense
        fallback={
            <ProductActions product={product} region={region} />
        }
    >
        <ProductActionsWrapper
            id={product.id}
            region={region}
        />
    </Suspense>
</div>
</div>
<div className="content-container py-16 small:py-32 bg-black">
<ProductReview product={product} countryCode={countryCode} />
</div>
<div className="content-container py-16 small:py-32 bg-black">
<Suspense fallback={<SkeletonRelatedProducts />}>
    <RelatedProducts
        product={product}
        countryCode={countryCode}
    />
</Suspense>
</div> */
}
