import React, { useState } from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';
import useStorePage from '@store/store-page/store-page';
import FilterTag from './filter-tag';
import ReviewStar from '../../../../public/images/products/review-star.svg';
import ETH from '../../../../public/images/currencies/eth-icon.svg';
import USDC from '../../../../public/images/currencies/usdc-icon.svg';
import USDT from '../../../../public/images/currencies/usdt-icon.svg';

const FilterTags = () => {
    const {
        categorySelect,
        currencySelect,
        reviewStarsSelect,
        setCategorySelect,
        setCurrencySelect,
        setReviewStarsSelect,
    } = useStorePage();

    const currencyIcons = {
        ETH: ETH,
        USDC: USDC,
        USDT: USDT,
    };

    const filterTags = () => {
        const tags = [];
        if (categorySelect) {
            tags.push(<FilterTag key="category" name={`${categorySelect}`} />);
        }
        if (currencySelect) {
            const currencyIcon = currencyIcons[currencySelect];
            tags.push(
                <FilterTag
                    img={currencyIcon}
                    key="currency"
                    name={`${currencySelect}`}
                />
            );
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
