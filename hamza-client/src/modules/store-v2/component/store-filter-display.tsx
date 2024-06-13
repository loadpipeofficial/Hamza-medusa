import React, { useEffect } from 'react';
import { Text, Flex } from '@chakra-ui/react';
import CategoryTopButton from './category-top-button';
import ReviewButton from './review-button';
import useStorePage from '@store/store-page/store-page';

const StoreFilterDisplay = () => {
    const { categorySelect, currencySelect, reviewStarsSelect } =
        useStorePage();

    // Function to generate filter tags

    const filterTags = () => {
        const tags = [];
        if (categorySelect) {
            tags.push(
                <CategoryTopButton key="category" name={`${categorySelect}`} />
            );
        }
        if (currencySelect) {
            tags.push(
                <CategoryTopButton key="currency" name={`${currencySelect}`} />
            );
        }
        if (reviewStarsSelect) {
            // Check for non-null explicitly for numbers
            tags.push(
                <ReviewButton
                    key="reviewStars"
                    filter={true}
                    name={`${reviewStarsSelect} Stars`}
                />
            );
        }
        return tags.length > 0 ? tags : <Text>No filters applied.</Text>;
    };

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
                <Flex gap="26px">{filterTags()}</Flex>
            </Flex>
        </Flex>
    );
};

export default StoreFilterDisplay;
