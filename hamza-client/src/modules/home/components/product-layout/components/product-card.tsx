'use client';

import React, { useState } from 'react';
import { Card, CardBody, Image, Text, Flex, Box } from '@chakra-ui/react';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import BuyButton from './buy-button';
import CartButton from './cart-button';
import { addToCart } from '@modules/cart/actions';
import { IoHeartCircleOutline, IoHeartCircleSharp } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { useWishlistMutations } from '@store/wishlist/mutations/wishlist-mutations';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
interface ProductCardProps {
    variantID: string;
    countryCode: string;
    productName: string;
    productPrice: number | string;
    imageSrc: string;
    hasDiscount: boolean;
    discountValue: string;
    productHandle: string;
}

const ProductCard: React.FC<ProductCardProps & { productId?: string }> = ({
    variantID,
    countryCode,
    productName,
    productPrice,
    imageSrc,
    hasDiscount,
    discountValue,
    productHandle,
    productId,
}) => {
    const [loadingBuy, setLoadingBuy] = useState(false);
    const [loadingAddToCart, setLoadingAddToCard] = useState(false);
    const [selectWL, setSelectWL] = useState(false);
    const { status } = useCustomerAuthStore();
    const [selectHeart, setSelectedHeart] = useState('black');
    const { addWishlistItemMutation, removeWishlistItemMutation } =
        useWishlistMutations();
    const toggleWishlist = async () => {
        // console.log('toggle wishlist-dropdown item', product);
        addWishlistItemMutation.mutate({ id: productId });
    };

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
            h="480px"
            backgroundColor={'black'}
            borderRadius="0.725rem"
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
                    <Image src={imageSrc} alt={productName} />
                </Box>
            </LocalizedClientLink>
            <CardBody
                backgroundColor={'black'}
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
                            mr="4"
                            noOfLines={3}
                        >
                            {productName}
                        </Text>
                        {status == 'authenticated' && (
                            <Box
                                ml="auto"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minWidth="40px"
                                minHeight="40px"
                                borderRadius="50%"
                                border="1px"
                                borderColor="#7B61FF"
                                cursor="pointer"
                                onClick={() => toggleWishlist()} //todo
                                sx={{
                                    userSelect: 'none', // Prevents text selection on card contents
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
                        )}
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
                            <Text
                                color={'white'}
                                alignSelf={'center'}
                                fontWeight="700"
                                fontSize="14px"
                                ml="1"
                            >
                                4.97
                            </Text>
                            <Text
                                alignSelf={'center'}
                                fontWeight="700"
                                fontSize="14px"
                                color="#555555"
                                ml="1"
                            >
                                (0 reviews)
                            </Text>
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
                        <Flex
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
                        </Flex>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
