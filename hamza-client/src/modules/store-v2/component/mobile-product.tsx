import React, { useState } from 'react';
import { Text, Box, Flex, Skeleton, Image } from '@chakra-ui/react';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import useWishlistStore from '@store/wishlist/wishlist-store';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import { useWishlistMutations } from '@store/wishlist/mutations/wishlist-mutations';
import { IoStar } from 'react-icons/io5';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { addToCart } from '@modules/cart/actions';
import Link from 'next/link';

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

    // const handleAddToCart = async () => {
    //     setLoadingAddToCard(true);
    //     await addToCart({
    //         variantId: variantID ?? '',
    //         quantity: 1,
    //         countryCode: countryCode ?? '',
    //         currencyCode: 'eth',
    //     });
    //     setLoadingAddToCard(false);
    // };

    // const handleBuyNow = async () => {
    //     setLoadingBuy(true);
    //     await addToCart({
    //         variantId: variantID ?? '',
    //         quantity: 1,
    //         countryCode: countryCode ?? '',
    //         currencyCode: 'eth',
    //     });
    //     setLoadingBuy(false);
    // };

    return (
        <Box
            flex={{ base: '1 0 45%', md: '1 0 30%' }}
            maxWidth={{ base: '45%', md: '30%' }}
        >
            <Flex
                minW="167px"
                maxW="295px"
                minH="243.73px"
                maxH="399px"
                width="100%"
                wrap={'nowrap'}
                height={{ base: '100%', sm: '167px', md: '399px' }} // Ensure the card occupies the full height
                borderRadius="16px"
                backgroundColor="black"
                flexDirection={'column'}
            >
                {/* Header Image */}
                <Box
                    borderTopRadius={'16px'}
                    onClick={() => console.log('hello')}
                    height={{ base: '100%', sm: '134.73px', md: '238px' }}
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: 'pointer' }}
                    backgroundColor={'white'}
                >
                    <Image
                        src={imageSrc}
                        alt={productName}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        onLoad={() => setImageLoaded(true)}
                        display={imageLoaded ? 'block' : 'none'}
                    />
                </Box>

                {/* card body */}
                <Flex
                    padding={{ base: '0.5rem', md: '1rem' }}
                    display={'flex'}
                    flexDirection={'column'}
                >
                    <Flex mb={{ base: '0', md: '1' }}>
                        <Text
                            color={'white'}
                            fontWeight="700"
                            fontSize={{ base: '14px', md: '1.25rem' }}
                            noOfLines={2}
                        >
                            {
                                'Mr Big Gains Mr Big Gains Mr Big Gains Mr Big Gains Mr Big Gains'
                            }
                        </Text>
                        {/* wish list heart code */}

                        {authData.status == 'authenticated' && (
                            <Box
                                p="5px"
                                ml="0.7rem"
                                display={{ base: 'none', md: 'flex' }}
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
                                            : removeWishlistItemMutation.mutate(
                                                  {
                                                      id: productId!,
                                                      description: '',
                                                      title: productName!,
                                                      thumbnail: imageSrc!,
                                                      handle: productHandle!,
                                                  }
                                              );
                                    }}
                                    sx={{
                                        userSelect: 'none',
                                    }}
                                >
                                    <Flex alignSelf="center">
                                        {!wishlist.products.find(
                                            (a) => a.id == productId
                                        ) ? (
                                            <FaRegHeart
                                                color="#7B61FF"
                                                size={20}
                                            />
                                        ) : (
                                            <FaHeart
                                                color="#7B61FF"
                                                size={20}
                                            />
                                        )}
                                    </Flex>
                                </Flex>
                            </Box>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default MobileCard;
