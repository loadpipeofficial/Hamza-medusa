import React, { useState } from 'react';
import {
    Text,
    Box,
    Flex,
    Skeleton,
    Image as ChakraImage,
} from '@chakra-ui/react';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import useWishlistStore from '@store/wishlist/wishlist-store';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import { useWishlistMutations } from '@store/wishlist/mutations/wishlist-mutations';
import { IoStar } from 'react-icons/io5';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { AiOutlineDollar } from 'react-icons/ai';
import { addToCart } from '@modules/cart/actions';
import Link from 'next/link';
import { formatCryptoPrice } from '@lib/util/get-product-price';
import USDC from '../../../../public/images/currencies/usdc-icon.svg';
import Image from 'next/image';

interface ProductCardProps {
    reviewCount?: number;
    totalRating?: number;
    variantID?: string;
    countryCode?: string;
    productName?: string;
    productPrice?: number | string;
    currencyCode?: string;
    imageSrc?: string;
    hasDiscount?: boolean;
    discountValue?: string;
    productHandle?: string;
    productId?: string;
}

const ProductCardStore: React.FC<ProductCardProps> = ({
    variantID,
    countryCode,
    productName,
    reviewCount,
    totalRating,
    productPrice,
    currencyCode,
    imageSrc,
    hasDiscount,
    discountValue,
    productHandle,
    productId,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const { wishlist } = useWishlistStore();
    const { addWishlistItemMutation, removeWishlistItemMutation } =
        useWishlistMutations();
    const { authData } = useCustomerAuthStore();

    return (
        <Box
            borderRadius="16px"
            overflow="hidden"
            width="100%"
            height="100%"
            backgroundColor="black"
            maxHeight={'399px'}
            minHeight={'243.73px'}
        >
            <LocalizedClientLink href={`/products/${productHandle}`}>
                <Box
                    height={{ base: '134.73', md: '238px' }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => console.log('hello')}
                    style={{ cursor: 'pointer' }}
                >
                    {!imageLoaded && <Skeleton height="240px" width="100%" />}
                    <ChakraImage
                        src={imageSrc}
                        alt={productName}
                        objectFit="cover"
                        height="100%"
                        width="100%"
                        onLoad={() => setImageLoaded(true)}
                        display={imageLoaded ? 'block' : 'none'}
                    />
                </Box>
            </LocalizedClientLink>

            <Box
                p={{ base: '2', md: '4' }}
                display={'flex'}
                flexDirection={'column'}
                height={{ base: '109px', md: '161px' }}
            >
                <Flex alignItems="center" wrap={'nowrap'}>
                    <Text
                        color="white"
                        fontWeight="700"
                        fontSize={{ base: '14px', md: '1.25rem' }}
                        noOfLines={2}
                    >
                        {productName}
                    </Text>
                    {authData.status == 'authenticated' && (
                        <Flex
                            p="5px"
                            mb="auto"
                            flex={1}
                            display={{ base: 'none', md: 'flex' }}
                            justifyContent={'flex-end'}
                        >
                            <Flex
                                justifyContent="center"
                                alignItems="center"
                                width="40px"
                                height="40px"
                                borderRadius="full"
                                borderWidth="2px"
                                borderColor="#7B61FF"
                                cursor="pointer"
                                onClick={() => {
                                    console.log('adding ', productId);
                                    !wishlist.products.find(
                                        (a) => a.id == productId
                                    )
                                        ? addWishlistItemMutation.mutate({
                                              id: productId!,
                                              description: '',
                                              title: productName!,
                                              thumbnail: imageSrc!,
                                              handle: productHandle!,
                                          })
                                        : removeWishlistItemMutation.mutate({
                                              id: productId!,
                                              description: '',
                                              title: productName!,
                                              thumbnail: imageSrc!,
                                              handle: productHandle!,
                                          });
                                }}
                                sx={{
                                    userSelect: 'none',
                                }}
                            >
                                <Flex alignSelf="center">
                                    {!wishlist.products.find(
                                        (a) => a.id == productId
                                    ) ? (
                                        <FaRegHeart color="#7B61FF" size={20} />
                                    ) : (
                                        <FaHeart color="#7B61FF" size={20} />
                                    )}
                                </Flex>
                            </Flex>
                        </Flex>
                    )}
                </Flex>

                <Flex marginTop="auto" flexDirection={'column'}>
                    <Flex alignItems="center" mb={{ base: '2.5px', md: '0' }}>
                        <IoStar style={{ color: '#FEC84B' }} />
                        {(reviewCount ?? 0) > 0 ? (
                            <>
                                <Text
                                    color={'white'}
                                    alignSelf={'center'}
                                    fontWeight="700"
                                    fontSize={{ base: '14px', md: '14px' }}
                                    ml="1"
                                >
                                    {totalRating}
                                </Text>
                                <Text
                                    alignSelf={'center'}
                                    fontWeight="700"
                                    fontSize={{ base: '14px', md: '16px' }}
                                    color="#555555"
                                    ml="1"
                                >
                                    ({reviewCount} reviews)
                                </Text>
                            </>
                        ) : (
                            <Text
                                alignSelf={'center'}
                                ml={{ base: '1.5', md: '2' }}
                                fontSize={{ base: '14px', md: '16px' }}
                                color={'white'}
                            >
                                no reviews yet
                            </Text>
                        )}
                    </Flex>

                    <Flex mt="auto" alignItems="center">
                        <Flex
                            wrap={'nowrap'}
                            width={{ base: '14px', md: '16px' }}
                            height={{ base: '14px', md: '16px' }}
                        >
                            <Image
                                src={require('../../../../public/images/currencies/usdc-icon.svg')}
                                alt="usdc"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Flex>
                        <Text
                            color="white"
                            ml="2"
                            fontWeight="700"
                            fontSize={{ base: '14px', md: '18px' }}
                        >
                            {`${formatCryptoPrice(parseInt(productPrice?.toString() ?? '0'), currencyCode ?? 'usdc')} ${currencyCode?.toUpperCase()}`}
                        </Text>
                        <Text
                            textDecoration={
                                hasDiscount ? 'line-through' : 'none'
                            }
                            ml="2"
                            color="#555555"
                            fontWeight="700"
                            display={{ base: 'none', md: 'block' }}
                            fontSize={{ base: '14px', md: '12px' }}
                        >
                            {productPrice}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default ProductCardStore;
