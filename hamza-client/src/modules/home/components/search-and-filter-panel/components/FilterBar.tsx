import React, { useEffect, useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import useStorePage from '@store/store-page/store-page';
import FilterButtons from './FilterButtons';
import vendors from '../data/data';

const FilterBar = () => {
    const { categorySelect } = useStorePage();
    const [vendorName, setVendorName] = useState('Legendary Light Design');
    const [isClient, setIsClient] = useState(false);

    // Ensure that the component knows when it's running on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (categorySelect) {
            setVendorName(categorySelect);
        }
    }, [categorySelect]);

    return (
        <Flex
            mt={{ base: '2.5rem', md: '4rem' }}
            maxW={'1280px'}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Flex
                mx="1rem"
                maxW={'1249px'}
                width={'100%'}
                overflow={'hidden'}
                gap={'20px'}
            >
                {vendors.map((vendor: any, index) => (
                    <FilterButtons
                        key={index}
                        categoryType="clothes"
                        categoryName={vendor.vendorName}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default FilterBar;
