'use client';

import React, { useEffect, useState } from 'react';
import { Flex, Container } from '@chakra-ui/react';
import ProductCardGroup from '@modules/products/components/product-card-group';
import SideMenu from './component/store-side-menu';
import useStorePage from '@store/store-page/store-page';
import useSideFilter from '@store/store-page/side-filter';

const StoreTemplate = () => {
    const gridLayout = {
        base: 2,
        sm: 2,
        md: 2,
        lg: 3,
    };

    const { categorySelect } = useStorePage();
    const { reviewFilterSelect } = useSideFilter();

    //TODO: make zustand state for default vendor "all"
    const [vendorName, setVendorName] = useState('Medusa Merch');
    useEffect(() => {
        if (categorySelect) {
            setVendorName(categorySelect);
        }
    }, [categorySelect]);

    useEffect(() => {
        console.log(`${reviewFilterSelect}`);
    }, [reviewFilterSelect]);

    return (
        <Container maxWidth={'1280px'} py="2rem">
            <Flex>
                <SideMenu />
                <ProductCardGroup
                    layoutMaxWidth={'941px'}
                    filterByRating={reviewFilterSelect}
                    vendorName={vendorName}
                    gridColumns={gridLayout}
                    category=""
                />
            </Flex>
        </Container>
    );
};

export default StoreTemplate;
