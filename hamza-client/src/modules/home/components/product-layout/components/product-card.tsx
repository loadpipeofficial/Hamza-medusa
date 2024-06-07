'use client';

import React, { useState } from 'react';
import { Card, CardBody, Image, Text, Flex, Box } from '@chakra-ui/react';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import BuyButton from '@modules/products/components/buy-button';
import { addToCart } from '@modules/cart/actions';
import { IoHeartCircleOutline, IoHeartCircleSharp } from 'react-icons/io5';

interface ProductCardProps {
    varientID: string;
    countryCode: string;
    productName: string;
    productPrice: number;
    imageSrc: string;
    hasDiscount: boolean;
    discountValue: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    varientID,
    countryCode,
    productName,
    productPrice,
    imageSrc,
    hasDiscount,
    discountValue,
}) => {
    const [loading, setLoading] = useState(false);
    const [selectHeart, setSelectedHeart] = useState('black');

    const handleBuyNow = async () => {
        setLoading(true);
        await addToCart({
            variantId: varientID,
            quantity: 1,
            countryCode: countryCode,
            currencyCode: 'eth',
        });
        setLoading(false);
    };

    return (
        <Card
            w={['100%', '100%', '293.13px']}
            h="440px"
            bg="transparent"
            borderRadius="0.725rem"
            overflow="hidden"
        >
            <Box
                h="200px"
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src={imageSrc}
                    alt={productName}
                    height="100%"
                    width="100%"
                />
                <Box
                    position="absolute"
                    fontWeight="bold"
                    top="1px"
                    right="1px"
                    backgroundColor={'white'}
                    borderRadius="2.6125rem"
                    px="0.725625rem"
                    py="0.725625rem"
                >
                    <IoHeartCircleSharp
                        color={selectHeart}
                        onClick={() => setSelectedHeart('red')}
                        size={40}
                    />
                </Box>
            </Box>
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
                            fontWeight="500"
                            fontSize="1.25rem"
                            lineHeight="25.29px"
                            noOfLines={3}
                        >
                            {productName}
                        </Text>
                        <Flex pl="1.5rem" mb="auto" ml="auto">
                            <Box mt="1px">
                                <TiStarFullOutline
                                    style={{
                                        color: '#FEC84B',
                                        width: '0.8rem',
                                        height: '0.8rem',
                                    }}
                                />
                            </Box>
                            <Text
                                color={'white'}
                                alignSelf={'center'}
                                fontWeight="500"
                                fontSize="0.75rem"
                                lineHeight="15.12px"
                                pl="0.1rem"
                            >
                                4.97
                            </Text>
                        </Flex>
                    </Flex>

                    <Box mt="auto">
                        <Flex>
                            <Box alignSelf={'center'}>
                                <AiOutlineDollar size={24} color="#2775CA" />
                            </Box>
                            <Text
                                color={'white'}
                                pl="1"
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
                                alignSelf={'center'}
                                color={'#555555'}
                                fontWeight="700"
                                fontSize="0.875rem"
                                lineHeight="17.64px"
                            >
                                {productPrice}
                            </Text>
                        </Flex>
                        <Text
                            color={'white'}
                            mr="auto"
                            fontWeight="700"
                            fontSize="1.25rem"
                            lineHeight="33.72px"
                        >
                            $ {productPrice}
                        </Text>
                        <Box py={2}>
                            <LocalizedClientLink href="/checkout?step=address">
                                <BuyButton
                                    handleBuyNow={() => handleBuyNow()}
                                    loader={loading}
                                    styles={'w-20 h-10 text-white'}
                                    outOfStock={false}
                                />
                            </LocalizedClientLink>
                        </Box>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
