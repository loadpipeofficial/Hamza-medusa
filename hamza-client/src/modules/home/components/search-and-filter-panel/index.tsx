'use client';

import React, { useState } from 'react';
import ProductCardGroup from '../product-layout';
import { Box, Container, Flex, Button } from '@chakra-ui/react';
import FilterButtons from './components/FilterButtons';
import vendors from './data/data';

const SearchAndFilterPanel = () => {
    const [vendorName, setVendorName] = useState('Headphones Store');

    return (
        <Box>
            <Container p="8" maxW="1440px">
                <Flex gap="1rem">
                    {vendors.map((vendors: any) => {
                        return (
                            <FilterButtons
                                key={vendors.id}
                                title={vendors.vendorName}
                                setVendorName={() =>
                                    setVendorName(vendors.vendorName)
                                }
                            />
                        );
                    })}
                    <Button height="60px" padding="10px 24px">
                        Filter
                    </Button>
                </Flex>
            </Container>
            <ProductCardGroup vendorName={vendorName} />
        </Box>
    );
};

export default SearchAndFilterPanel;
