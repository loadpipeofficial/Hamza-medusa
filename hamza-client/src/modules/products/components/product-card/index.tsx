'use client';

import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Image,
    Text,
    Flex,
    Box,
    Skeleton,
} from '@chakra-ui/react';
import { AiOutlineDollar } from 'react-icons/ai';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import BuyButton from '../buy-button';
import CartButton from '@modules/home/components/product-layout/components/cart-button';
import { addToCart } from '@modules/cart/actions';
import { IoStar } from 'react-icons/io5';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

interface ProductCardProps {
    reviewCount?: number;
    totalRating?: number;
    variantID?: string;
    countryCode?: string;
    productName?: string;
    productPrice?: number | string;
    imageSrc?: string;
    hasDiscount?: boolean;
    discountValue?: string;
    productHandle?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    variantID,
    countryCode,
    productName,
    reviewCount,
    totalRating,
    productPrice,
    imageSrc,
    hasDiscount,
    discountValue,
    productHandle,
}) => {
    const [loadingBuy, setLoadingBuy] = useState(false);
    const [loadingAddToCart, setLoadingAddToCard] = useState(false);
    const [selectWL, setSelectWL] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const toggleHeart = () => {
        setSelectWL((prev) => !prev);
    };
    const handleAddToCart = async () => {
        setLoadingAddToCard(true);
        await addToCart({
            variantId: variantID ?? '',
            quantity: 1,
            countryCode: countryCode ?? '',
            currencyCode: 'eth',
        });
        setLoadingAddToCard(false);
    };

    const handleBuyNow = async () => {
        setLoadingBuy(true);
        await addToCart({
            variantId: variantID ?? '',
            quantity: 1,
            countryCode: countryCode ?? '',
            currencyCode: 'eth',
        });
        setLoadingBuy(false);
    };

    return (
        <Card
            maxW={'295px'}
            h="399px"
            backgroundColor={'#121212'}
            borderRadius="16px"
            overflow="hidden"
        >
            <LocalizedClientLink href={`/products/${productHandle}`}>
                <Box
                    onClick={() => console.log('hello')}
                    h="240px"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: 'pointer' }}
                >
                    {!imageLoaded && <Skeleton height="240px" width="100%" />}
                    <Image
                        src={imageSrc}
                        alt={productName}
                        onLoad={() => setImageLoaded(true)}
                        display={imageLoaded ? 'block' : 'none'}
                    />{' '}
                </Box>
            </LocalizedClientLink>
            <CardBody
                backgroundColor={'#121212'}
                display={'flex'}
                flexDirection={'column'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    h="100%"
                    w="100%"
                >
                    <Flex mb="1">
                        <Text
                            color={'white'}
                            fontWeight="700"
                            fontSize="1.25rem"
                            lineHeight="25.29px"
                            noOfLines={3}
                        >
                            {productName}
                        </Text>
                        {/* wish list heart code */}
                        <Box pl="1rem" ml="auto">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minWidth="40px"
                                minHeight="40px"
                                borderRadius="50%"
                                border="1px"
                                borderColor="#7B61FF"
                                cursor="pointer"
                                onClick={() => toggleHeart()}
                                sx={{
                                    userSelect: 'none',
                                }}
                            >
                                <Box alignSelf="center">
                                    {selectWL === false ? (
                                        <FaRegHeart color="#7B61FF" size={23} />
                                    ) : (
                                        <FaHeart color="#7B61FF" size={23} />
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Flex>

                    <Box mt="auto">
                        <Flex mb="1">
                            <Box mt="1px">
                                <IoStar
                                    style={{
                                        color: '#FEC84B',
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                            </Box>
                            {reviewCount > 0 ? (
                                <>
                                    <Text
                                        color={'white'}
                                        alignSelf={'center'}
                                        fontWeight="700"
                                        fontSize="14px"
                                        ml="1"
                                    >
                                        {totalRating}
                                    </Text>
                                    <Text
                                        alignSelf={'center'}
                                        fontWeight="700"
                                        fontSize="14px"
                                        color="#555555"
                                        ml="1"
                                    >
                                        ({reviewCount} reviews)
                                    </Text>
                                </>
                            ) : (
                                <Text color={'white'}> No Reviews Yet </Text>
                            )}
                        </Flex>
                        <Flex>
                            <Box alignSelf={'center'}>
                                <AiOutlineDollar
                                    style={{ width: '24px', height: '24px' }}
                                    color="#2775CA"
                                />
                            </Box>
                            <Text
                                color={'white'}
                                ml="2"
                                fontWeight="700"
                                fontSize="1.25rem"
                                lineHeight="33.72px"
                            >
                                {productPrice}
                            </Text>
                            <Text
                                textDecoration={
                                    hasDiscount === true
                                        ? 'line-through'
                                        : 'none'
                                }
                                ml="2"
                                mb="1"
                                alignSelf={'center'}
                                color={'#555555'}
                                fontWeight="700"
                                fontSize="0.875rem"
                                lineHeight="17.64px"
                            >
                                {productPrice}
                            </Text>
                        </Flex>
                        {/* add to cart / buy button */}
                        {/* <Flex
                            direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, horizontally on medium and up
                            gap="14px"
                            py={2}
                        >
                            <CartButton
                                handleBuyNow={() => handleAddToCart()}
                                loader={loadingAddToCart}
                                styles={'w-full'}
                                outOfStock={false}
                                title={'Add to Cart'}
                            />
                            <LocalizedClientLink href="/checkout?step=address">
                                <BuyButton
                                    handleBuyNow={() => handleBuyNow()}
                                    loader={loadingBuy}
                                    styles={'w-full'}
                                    outOfStock={false}
                                    title="Buy Now"
                                />
                            </LocalizedClientLink>
                        </Flex> */}
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
