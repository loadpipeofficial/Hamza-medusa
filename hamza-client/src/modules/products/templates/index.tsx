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
import { Box, Flex } from '@chakra-ui/react';
import PreviewGallery from '../components/product-preview/components/preview-gallery';
import ProductInfo from '../components/product-preview/components/product-info';
import PreviewCheckout from '../components/product-preview/components/preview-checkout';
import ProductReview from '../components/product-preview/components/product-review';
import useProductPreview from '@store/product-preview/product-preview';
import VendorBanner from '../components/product-preview/components/vendor-banner';

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
    const {
        setProductData,
        setCountryCode,
        setRegionId,
        setProductId,
        setQuantity,
    } = useProductPreview();

    // Only update product data when `product` changes
    useEffect(() => {
        if (product && product.id) {
            setProductData(product);
            setProductId(product.id);
            setRegionId(region.id);
            setCountryCode(countryCode);
            setQuantity(1);
        } else {
            notFound();
        }
    }, [
        product,
        region,
        countryCode,
        setProductData,
        setProductId,
        setCountryCode,
        setRegionId,
        setQuantity,
    ]);

    // if (!product || !product.id) {
    //     return null; // Return null or some error display component
    // }

    return (
        <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            mx="1rem"
        >
            <Box mt="2rem">
                <PreviewGallery />
            </Box>

            <Flex
                maxWidth="1280px"
                width={'100%'}
                my="2rem"
                gap={'26px'}
                justifyContent={'center'}
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Flex flex="1" order={{ base: 2, md: 1 }}>
                    <ProductInfo />
                </Flex>
                <Flex
                    maxWidth={'504px'}
                    width={'100%'}
                    flex="0 0 auto"
                    justifyContent={'center'}
                    order={{ base: 1, md: 2 }}
                    alignSelf="flex-start"
                >
                    <PreviewCheckout />
                </Flex>
            </Flex>

            <VendorBanner />
            <ProductReview />
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
