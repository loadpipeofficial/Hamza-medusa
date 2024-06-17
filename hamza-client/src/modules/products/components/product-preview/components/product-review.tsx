import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ProductReview = () => {
    return (
        <Flex
            width="1280px"
            height="450.57px"
            justifyContent="center"
            alignItems="center"
        >
            <Flex backgroundColor="orange" width="100%" height="100%">
                <Flex gap="26px">
                    <Text>Star Icons</Text>
                    <Text>4.96</Text>
                    <Text>312 reviews</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProductReview;
