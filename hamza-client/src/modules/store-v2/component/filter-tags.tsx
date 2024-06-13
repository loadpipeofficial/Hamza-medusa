import React from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';
import CategoryTopButton from './category-top-button';
import ReviewButton from './review-button';
import useStorePage from '@store/store-page/store-page';

const FilterTags = () => {
    const {
        categorySelect,
        currencySelect,
        reviewStarsSelect,
        setCategorySelect,
        setCurrencySelect,
        setReviewStarsSelect,
    } = useStorePage();

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
        <Flex gap="26px">
            {filterTags()}
            <Button
                onClick={() => {
                    setCategorySelect(null);
                    setCurrencySelect(null);
                    setReviewStarsSelect(null);
                }}
            >
                Clear
            </Button>
        </Flex>
    );
};

export default FilterTags;
