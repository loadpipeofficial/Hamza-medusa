'use client';

import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import useProductPreview from '@store/product-preview/product-preview';

const ProductInfo = () => {
    const { productData } = useProductPreview();

    return (
        <Flex
            width="100%"
            backgroundColor="transaprent"
            maxWidth={['100%', '90%', '776px']}
            flexDirection="column"
            gap="26px"
        >
            <Flex display={{ base: 'none', md: 'flex' }}>
                <Box
                    backgroundColor="#121212"
                    px="15px" // Horizontal padding
                    py="8px" // Vertical padding, adjust as needed
                    borderRadius="9999px" // High border-radius for the pill shape
                    display="inline-flex" // Using inline-flex to better manage inner Text alignment
                    alignItems="center" // Aligns the text vertically in the center
                    justifyContent="center" // Centers the text horizontally
                >
                    <Text color="white">Electronics</Text>
                </Box>
            </Flex>
            <Heading as="h1" color="white">
                {productData.title}
            </Heading>
            <Flex flexDirection={'column'}>
                <Heading as="h2" color="primary.green.900">
                    Product Info
                </Heading>
                <Text color="white">{productData.description}</Text>
            </Flex>
            <Flex flexDirection={'column'}>
                <Heading as="h2" color="primary.green.900">
                    About this item
                </Heading>
                <Text color="white">{productData.description}</Text>
            </Flex>
        </Flex>
    );
};

export default ProductInfo;
