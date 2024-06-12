'use client';

import React, { useState } from 'react';
import { Flex, Box, Container, Text } from '@chakra-ui/react';
import ProductCardGroup from '@modules/products/components/product-card-group';
import SideMenu from './component/side-menu';

const StoreTemplate = () => {
    const gridLayout = {
        base: 1,
        sm: 1,
        md: 2,
        lg: 3,
    };
    const [vendorName, setVendorName] = useState('Goblin Store');

    return (
        <Container maxWidth={'1280px'} py="2rem">
            <Flex>
                <SideMenu />
                <ProductCardGroup
                    layoutMaxWidth={'941px'}
                    vendorName={vendorName}
                    gridColumns={gridLayout}
                />
            </Flex>
        </Container>
    );
};

export default StoreTemplate;
