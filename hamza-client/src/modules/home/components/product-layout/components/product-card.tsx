'use client';

import React, { useState } from 'react';
import { Card, CardBody, Image, Text, Flex, Box } from '@chakra-ui/react';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import BuyButton from '@modules/products/components/buy-button';
import CartButton from './cart-button';
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
    const [loadingBuy, setLoadingBuy] = useState(false);
    const [loadingAddToCart, setLoadingAddToCard] = useState(false);
    const [selectHeart, setSelectedHeart] = useState('black');

    const handleAddToCart = async () => {
        setLoadingAddToCard(true);
        await addToCart({
            variantId: varientID,
            quantity: 1,
            countryCode: countryCode,
            currencyCode: 'eth',
        });
        setLoadingAddToCard(false);
    };

    const handleBuyNow = async () => {
        setLoadingBuy(true);
        await addToCart({
            variantId: varientID,
            quantity: 1,
            countryCode: countryCode,
            currencyCode: 'eth',
        });
        setLoadingBuy(false);
    };

    const handleHeartClick = () => {
        setSelectedHeart((prevColor: any) =>
            prevColor === 'red' ? 'black' : 'red'
        );
    };

    return (
        <Card
            w={['100%', '100%', '295px']}
            h="480px"
            bg="transparent"
            borderRadius="0.725rem"
            overflow="hidden"
        >
            <Box
                h="240px"
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
                    borderRadius="2rem"
                    px="2px"
                    py="2px"
                >
                    <IoHeartCircleSharp
                        style={{ cursor: 'pointer' }}
                        color={selectHeart}
                        onClick={() => handleHeartClick()}
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
                    </Flex>

                    <Box mt="auto">
                        <Flex>
                            <Box mt="1px">
                                <TiStarFullOutline
                                    style={{
                                        color: '#FEC84B',
                                        width: '23px',
                                        height: '24px',
                                    }}
                                />
                            </Box>
                            <Text
                                color={'white'}
                                alignSelf={'center'}
                                fontWeight="500"
                                fontSize="14px"
                                lineHeight="15.12px"
                                pl="0.1rem"
                            >
                                4.97
                            </Text>
                            <Text color="#555555" ml="2">
                                0 Reviews
                            </Text>
                        </Flex>
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
                        <Box py={2}>
                            <CartButton
                                handleBuyNow={() => handleAddToCart()}
                                loader={loadingAddToCart}
                                styles={'mr-2'}
                                outOfStock={false}
                                title={'Add to Cart'}
                            />
                            <LocalizedClientLink href="/checkout?step=address">
                                <BuyButton
                                    handleBuyNow={() => handleBuyNow()}
                                    loader={loadingBuy}
                                    styles={'w-20 h-10 text-white'}
                                    outOfStock={false}
                                    title={'Buy Now'}
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
