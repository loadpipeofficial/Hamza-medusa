'use client';

import React from 'react';
import { Card, CardBody, Image, Text, Flex, Box } from '@chakra-ui/react';
import { TiStarFullOutline } from 'react-icons/ti';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';

interface ProductCardProps {
    productName: string;
    productPrice: number;
    imageSrc: string;
    hasDiscount: boolean;
    discountValue: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productName,
    productPrice,
    imageSrc,
    hasDiscount,
    discountValue,
}) => {
    return (
        <Card
            w={['100%', '100%', '293.13px']}
            h="440px"
            bg="white"
            boxShadow="md"
            border="1px solid black"
            borderRadius="0.725rem"
            overflow="hidden"
        >
            <Box
                h="200px"
                bg="gray.200"
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
                    visibility={hasDiscount === true ? 'visible' : 'hidden'}
                    position="absolute"
                    fontWeight="bold"
                    top="12px"
                    right="12px"
                    backgroundColor={'white'}
                    borderRadius="2.6125rem"
                    px="0.725625rem"
                    py="0.725625rem"
                >
                    <Text
                        color="black"
                        fontSize="0.870625rem"
                        lineHeight="1.05375rem"
                    >
                        {discountValue}% off
                    </Text>
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
                            <Box alignSelf={'center'}>
                                <TiStarFullOutline
                                    style={{
                                        color: '#FEC84B',
                                        width: '0.72875rem',
                                        height: '0.72875rem',
                                    }}
                                />
                            </Box>
                            <Text
                                color={'white'}
                                alignSelf={'center'}
                                fontWeight="500"
                                fontSize="0.75rem"
                                lineHeight="16.86px"
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
                                mr="auto"
                                pl="1"
                                fontWeight="700"
                                fontSize="1.25rem"
                                lineHeight="33.72px"
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
                            ${productPrice}
                        </Text>
                        <Flex py={2}>
                            <Text
                                color={'#555555'}
                                fontWeight="400"
                                fontSize="1.25rem"
                                lineHeight="16.94px"
                            >
                                Or pay with
                            </Text>
                            <Flex pl={2}>
                                <Box mr="1" alignSelf={'center'}>
                                    <FaBitcoin color={'#555555'} />
                                </Box>
                                <Box alignSelf={'center'}>
                                    <FaEthereum color={'#555555'} />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
