import React, { useEffect } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import CategoryTopButton from './category-top-button';
import ReviewButton from './review-button';
import useStorePage from '@store/store-page/store-page';
import FilterTags from './filter-tags';

const StoreFilterDisplay = () => {
    const { categorySelect } = useStorePage();
    return (
        <Flex flexDirection={'column'} mb="2rem">
            <Flex flexDirection={'column'} gap="1.5rem">
                <Flex>
                    <Text color="White" fontSize={'18px'}>
                        Home
                    </Text>
                    <Text
                        ml="1rem"
                        fontSize={'18px'}
                        color="primary.indigo.900"
                    >
                        {categorySelect}
                    </Text>
                </Flex>
                <Flex gap="20px">
                    <CategoryTopButton
                        categoryType="clothes"
                        categoryName="Goblin Store"
                    />
                    <CategoryTopButton
                        categoryType="games"
                        categoryName="Quality Store"
                    />
                    <CategoryTopButton
                        categoryType="gadgets"
                        categoryName="Headphones Store"
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
