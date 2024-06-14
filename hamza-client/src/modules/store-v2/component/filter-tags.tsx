import React from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';
import CategoryTopButton from './category-top-button';
import useStorePage from '@store/store-page/store-page';
import FilterTag from './filter-tag';
import ReviewStar from '../../../../public/images/products/review-star.svg';

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
            tags.push(<FilterTag key="category" name={`${categorySelect}`} />);
        }
        if (currencySelect !== null) {
            tags.push(<FilterTag key="currency" name={`${currencySelect}`} />);
        }
        if (reviewStarsSelect) {
            // Check for non-null explicitly for numbers
            tags.push(
                <FilterTag
                    img={ReviewStar}
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
