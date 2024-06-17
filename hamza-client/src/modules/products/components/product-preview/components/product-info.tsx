import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ProductInfo = () => {
    return (
        <Flex
            width="100%"
            backgroundColor="purple"
            maxWidth={['100%', '90%', '776px']}
            flexDirection="column"
        >
            <Text>Electronics</Text>
            <Text>Title</Text>
            <Text>Product Info</Text>
            <Text>About this item</Text>
        </Flex>
    );
};

export default ProductInfo;
