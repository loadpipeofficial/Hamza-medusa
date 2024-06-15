'use client';

import React, { useEffect, useState } from 'react';
import { Flex, Container } from '@chakra-ui/react';
import ProductCardGroup from '@modules/products/components/product-card-group';
import SideMenu from './component/store-side-menu';
import useStorePage from '@store/store-page/store-page';

const StoreTemplate = () => {
    const gridLayout = {
        base: 1,
        sm: 1,
        md: 2,
        lg: 3,
    };

    const { categorySelect } = useStorePage();

    //TODO: make zustand state for default vendor "all"
    const [vendorName, setVendorName] = useState('Goblin Store');
    useEffect(() => {
        if (categorySelect) {
            setVendorName(categorySelect);
        }
    }, [categorySelect]);

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
