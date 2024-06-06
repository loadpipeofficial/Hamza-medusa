'use client';

import React, { useState } from 'react';
import ProductCardGroup from '../product-layout';
import { Box, Container, Flex, Button, Text } from '@chakra-ui/react';
import FilterButtons from './components/FilterButtons';
import vendors from './data/data';
import { RiMenu2Fill } from 'react-icons/ri';

const SearchAndFilterPanel = () => {
    const [vendorName, setVendorName] = useState('Goblin Store');

    return (
        <Box>
            <Container p="8" maxW="1440px">
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
                        background="radial-gradient(119.28% 648.85% at -19.83% -30.22%, #606060 0%, #0F242C 100%)"
                        display="flex"
                        justifyContent={'center'}
                        height="60px"
                        padding="10px 24px"
                    >
                        <RiMenu2Fill size={24} color={'white'} />
                        <Text color={'white'} alignSelf="center" pl="2">
                            Filter
                        </Text>
                    </Button>
                </Flex>
            </Container>
            <ProductCardGroup vendorName={vendorName} />
        </Box>
    );
};

export default SearchAndFilterPanel;
