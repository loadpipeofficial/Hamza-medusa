import React, { useState } from 'react';
import { Text, Box, Flex, Skeleton, Image } from '@chakra-ui/react';
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

const MobileCard: React.FC<ProductCardProps> = ({
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
    const [loadingBuy, setLoadingBuy] = useState(false);
    const [loadingAddToCart, setLoadingAddToCard] = useState(false);
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
            <Box
                height={{ base: '134.73', md: '238px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={() => console.log('hello')}
                style={{ cursor: 'pointer' }}
            >
                <Image
                    src={imageSrc}
                    alt={productName}
                    objectFit="cover"
                    height="100%"
                    width="100%"
                    onLoad={() => setImageLoaded(true)}
                    display={imageLoaded ? 'block' : 'none'}
                />
            </Box>

            <Box
                p="4"
                display={'flex'}
                flexDirection={'column'}
                height={{ base: '109px', md: '161px' }}
            >
                <Flex justifyContent="space-between" alignItems="center">
                    <Text
                        color="white"
                        fontWeight="700"
                        fontSize={{ base: '14px', md: '1.25rem' }}
                        noOfLines={2}
                    >
                        {productName}
                    </Text>
                    {authData.status == 'authenticated' && (
                        <Box p="5px" display={{ base: 'none', md: 'flex' }}>
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
                        </Box>
                    )}
                </Flex>

                <Flex marginTop="auto" flexDirection={'column'}>
                    <Flex alignItems="center">
                        <IoStar style={{ color: '#FEC84B' }} />
                        <Text
                            color="white"
                            fontWeight="700"
                            fontSize={{ base: '14px', md: '14px' }}
                            ml="1"
                        >
                            {totalRating}
                        </Text>
                        <Text
                            color="#555555"
                            fontWeight="700"
                            fontSize={{ base: '14px', md: '16px' }}
                            ml="1"
                        >
                            ({reviewCount} reviews)
                        </Text>
                    </Flex>

                    <Flex mt="auto" alignItems="center">
                        <AiOutlineDollar color="#2775CA" />
                        <Text
                            color="white"
                            ml="2"
                            fontWeight="700"
                            fontSize={{ base: '14px', md: '18px' }}
                        >
                            {`${formatCryptoPrice(parseInt(productPrice?.toString() ?? '0'), currencyCode ?? 'usdc')} ${currencyCode?.toUpperCase()}`}
                        </Text>
                        {/* <Text
                        textDecoration={hasDiscount ? 'line-through' : 'none'}
                        ml="2"
                        color="#555555"
                        fontWeight="700"
                        fontSize="0.875rem"
                    >
                        {productPrice}
                    </Text> */}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default MobileCard;
