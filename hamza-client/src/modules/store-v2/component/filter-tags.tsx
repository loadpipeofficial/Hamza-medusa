import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import CategoryTopButton from './category-top-button';
import ReviewButton from './review-button';
import useStorePage from '@store/store-page/store-page';

const FilterTags = () => {
    const { categorySelect, currencySelect, reviewStarsSelect } =
        useStorePage();

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
        if (reviewStarsSelect !== null) {
            // Check for non-null explicitly for numbers
            tags.push(
                <ReviewButton
                    key="reviewStars"
                    name={`${reviewStarsSelect} Stars`}
                />
            );
        }
        return tags.length > 0 ? tags : <Text>No filters applied.</Text>;
    };

    return <div>filter-tags</div>;
};

export default FilterTags;
