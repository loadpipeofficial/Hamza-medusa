import React, { useEffect } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import CategoryTopButton from './category-top-button';
import useStorePage from '@store/store-page/store-page';
import FilterTags from './filter-tags';
import { FaGreaterThan } from 'react-icons/fa';

const StoreFilterDisplay = () => {
    const { categorySelect } = useStorePage();
    return (
        <Flex
            display={{ base: 'none', md: 'flex' }}
            flexDirection={'column'}
            mb="2rem"
        >
            <Flex flexDirection={'column'} gap="1.5rem">
                <Flex gap="10px">
                    <Text color="White" fontSize={'18px'}>
                        Home
                    </Text>
                    <Flex alignSelf={'center'}>
                        <FaGreaterThan size={12} color="white" />
                    </Flex>
                    <Text fontSize={'18px'} color="primary.indigo.900">
                        {categorySelect}
                    </Text>
                </Flex>
                <Flex gap="20px" overflow={'hidden'}>
                    <CategoryTopButton
                        categoryType="clothes"
                        categoryName="Medusa Merch"
                    />
                    <CategoryTopButton
                        categoryType="games"
                        categoryName="Echo Rift"
                    />
                    <CategoryTopButton
                        categoryType="gadgets"
                        categoryName="Dauntless"
                    />
                </Flex>
                <Text fontSize={'18px'} color="primary.indigo.900">
                    Filters Applied
                </Text>
                <FilterTags />
            </Flex>
        </Flex>
    );
};

export default StoreFilterDisplay;
