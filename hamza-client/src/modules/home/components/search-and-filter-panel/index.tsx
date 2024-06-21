'use client';

import React, { useState, Suspense } from 'react';
import ProductCardGroup from '../product-layout';
import { Box, Container, Flex, Button, Text } from '@chakra-ui/react';
import FilterButtons from './components/FilterButtons';
import vendors from './data/data';
import { RiMenu2Fill } from 'react-icons/ri';
import Reputation from '../reputation';
import SearchBar from './components/SearchBar';
import SearchModalWrapper from '@modules/search/templates/search-wrapper';
import SkeletonProductGrid from '@modules/skeletons/components/skeleton-product-grid';

const SearchAndFilterPanel = () => {
    const [vendorName, setVendorName] = useState('Medusa Merch');

    //TODO: reputation causing overflow
    return (
        <Box>
            <SearchBar />
            <Box
                mb={{ base: '-10rem', md: '0' }}
                display={{ base: 'none', md: 'block' }}
            >
                <Reputation />
            </Box>
            <Container py="8" maxW="1280px">
                <Flex gap="1rem">
                    {vendors.map((vendors: any) => {
                        return (
                            <FilterButtons
                                key={vendors.id}
                                title={vendors.vendorName}
                                selected={vendorName}
                                setVendorName={() =>
                                    setVendorName(vendors.vendorName)
                                }
                            />
                        );
                    })}
                    <Button
                        display="flex"
                        justifyContent={'center'}
                        height="60px"
                        padding="10px 24px"
                        gap="10px"
                        borderRadius="56px"
                        borderWidth="1px"
                        borderColor="white"
                        backgroundColor={'transparent'}
                        color={'white'}
                    >
                        <RiMenu2Fill size={24} color={'white'} />
                        <Text color={'white'} alignSelf="center" pl="2">
                            Filter
                        </Text>
                    </Button>
                </Flex>
            </Container>
            <Suspense fallback={<SkeletonProductGrid />}>
                <ProductCardGroup vendorName={vendorName} />
            </Suspense>
        </Box>
    );
};

export default SearchAndFilterPanel;
