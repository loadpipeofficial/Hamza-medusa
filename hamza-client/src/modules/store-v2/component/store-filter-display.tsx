import React, { useEffect } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import CategoryTopButton from './category-top-button';
import ReviewButton from './review-button';
import useStorePage from '@store/store-page/store-page';
import FilterTags from './filter-tags';

const StoreFilterDisplay = () => {
    return (
        <Flex flexDirection={'column'} mb="2rem">
            <Flex flexDirection={'column'} gap="1.5rem">
                <Text color="White">Home</Text>
                <Flex gap="20px">
                    <CategoryTopButton name="Goblin Store" />
                    <CategoryTopButton name="Quality Store" />
                    <CategoryTopButton name="Headphones Store" />
                </Flex>
                <Text color="primary.indigo.900">Filters Applied</Text>
                <FilterTags />
            </Flex>
        </Flex>
    );
};

export default StoreFilterDisplay;
