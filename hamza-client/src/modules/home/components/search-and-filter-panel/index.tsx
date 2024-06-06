'use client';

import React from 'react';
import ProductCardGroup from '../product-layout';
import { Box, Container, Flex } from '@chakra-ui/react';
import FilterButtons from './components/FilterButtons';

const SearchAndFilterPanel = () => {
    return (
        <Box>
            <Container p="8" maxW="1440px">
                <Flex gap="1rem">
                    <FilterButtons title={'Clothes'} />
                    <FilterButtons title={'Clothes'} />
                </Flex>
            </Container>
            <ProductCardGroup />
        </Box>
    );
};

export default SearchAndFilterPanel;
