'use client';

import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import React, { Suspense, useEffect, useState } from 'react';

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
import { Box, Flex, Divider } from '@chakra-ui/react';
import PreviewGallery from '../components/product-preview/components/preview-gallery';
import ProductInfo from '../components/product-preview/components/product-info';
import PreviewCheckout from '../components/product-preview/components/preview-checkout';
import ProductReview from '../components/product-preview/components/product-review';
import ProductReviewMobile from '../components/product-preview/components/product-review-mobile';
import useProductPreview from '@store/product-preview/product-preview';
import VendorBanner from '../components/product-preview/components/vendor-banner';
import axios from 'axios';

type ProductTemplateProps = {
    product: PricedProduct;
    storeName: string;
    region: Region;
    countryCode: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({
    product,
    storeName,
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

    const [vendor, setVendor] = useState('');

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
    console.log(
        `Product Page, we have product ${product.id} ${product.handle}`
    );

    useEffect(() => {
        const product_url = `https://demo.hamza.biz/us/products/${product.handle}`;
        const tweetHref = `https://twitter.com/intent/tweet?text=Check out this cool product at Hamza.biz! ${encodeURIComponent(product_url)} Buy and sell products with Crypto at Hamza - the world’s first decom marketplace.`;
        document
            .getElementById('tweet-button')
            ?.setAttribute('href', tweetHref);

        // Fetch Vendor Name from product.id
        const fetchVendor = async () => {
            try {
                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/custom/get-store`,
                    {
                        product_id: product.id,
                    }
                );
                console.log(`Vendor: ${data}`);
                setVendor(data);
            } catch (error) {
                console.error('Error fetching vendor: ', error);
            }
        };

        fetchVendor();
    }, [product]);

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
                    <a href="#" id="tweet-button" target="_blank">
                        <button
                            type="button"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            className="mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                            <span className="[&>svg]:h-4 [&>svg]:w-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </span>
                        </button>
                    </a>
                </Flex>
                <Flex
                    maxW={{ base: '100%', md: '504px' }}
                    width={'100%'}
                    flex="0 0 auto"
                    justifyContent={'center'}
                    order={{ base: 1, md: 2 }}
                    alignSelf="flex-start"
                >
                    <PreviewCheckout />
                </Flex>
            </Flex>

            <VendorBanner vendor={vendor} />
            <Divider
                color="#555555"
                display={{ base: 'block', md: 'none' }}
                mt="2rem"
            />
            <ProductReview />
            <ProductReviewMobile />
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
