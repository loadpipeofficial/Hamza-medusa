import React, { useState } from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';
import useStorePage from '@store/store-page/store-page';
import FilterTag from './filter-tag';
import ReviewStar from '../../../../public/images/products/review-star.svg';
import ETH from '../../../../public/images/currencies/eth-icon.svg';
import USDC from '../../../../public/images/currencies/usdc-icon.svg';
import USDT from '../../../../public/images/currencies/usdt-icon.svg';
import { IoCloseOutline } from 'react-icons/io5';

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
                <FilterTag img={ReviewStar} name={`${reviewStarsSelect}`} />
            );
        }
        return tags.length > 0 ? (
            tags
        ) : (
            <Text color={'white'}>No filters applied.</Text>
        );
    };

    return (
        <Flex gap="20px">
            {filterTags()}
            <Flex
                height="63px"
                ml="auto"
                cursor={'pointer'}
                onClick={() => {
                    setCategorySelect(null);
                    setCurrencySelect(null);
                    setReviewStarsSelect(null);
                }}
            >
                <Text fontSize="16px" alignSelf={'center'} color={'white'}>
                    Clear All
                </Text>
                <Flex>
                    <IoCloseOutline
                        size={19}
                        color="white"
                        style={{ alignSelf: 'center', marginLeft: '5px' }}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default FilterTags;
