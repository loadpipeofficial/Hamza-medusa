'use client';

import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import CurrencyButton from './currency-button';
import CategoryButton from './category-button';
import currencies from '../data/crypto-currencies';
import ReviewButton from './review-button';
import FilterButton from './filter-button';
import RangeSlider from './range-slider';
import useStorePage from '@store/store-page/store-page';

const SideMenu = () => {
    const ratings = ['1', '2', '3', '4', '5'];
    const { setCurrencySelect, setReviewStarsSelect, setCategorySelect } =
        useStorePage();

    return (
        <Box
            px="2rem"
            py="2rem"
            color={'white'}
            borderRadius={'20px'}
            maxWidth={'348.74px'}
            width={'100%'}
            height={'100%'}
            backgroundColor={'secondary.onyx.900'}
        >
            <Heading as="h2" size="h2">
                Price Range
            </Heading>
            <Text mt="5px" color="secondary.davy.900">
                Prices before fees and taxes
            </Text>

            {/* Slider  */}
            <RangeSlider />
            {/* Slider end */}

            {/* Crypto Currencies */}
            <Box mt="2rem">
                <Heading as="h2" size="h2">
                    Cryptocurrency
                </Heading>
                <Text mt="5px" color="secondary.davy.900">
                    Pay with different cryptocurrencies
                </Text>

                <Flex mt="1rem" flexDirection={'column'} gap="16px">
                    {Object.keys(currencies).map((key) => (
                        <CurrencyButton key={key} name={currencies[key]} />
                    ))}
                </Flex>
            </Box>

            {/* Categories */}
            <Box mt="2rem">
                <Heading as="h2" size="h2">
                    Categories
                </Heading>

                <Flex mt="1rem" flexDirection={'column'} gap="16px">
                    <CategoryButton name="Goblin Store" />
                    <CategoryButton name="Quality Store" />
                    <CategoryButton name="Headphones Store" />
                </Flex>
            </Box>

            {/* Rating */}
            <Box mt="2rem">
                <Heading as="h2" size="h2">
                    Rating
                </Heading>

                <Flex mt="1rem" flexDirection={'column'} gap="16px">
                    {ratings.map((rating) => (
                        <ReviewButton key={rating} rating={rating} />
                    ))}
                </Flex>
            </Box>

            <Box mt="2rem">
                <FilterButton />
            </Box>
        </Box>
    );
};

export default SideMenu;
