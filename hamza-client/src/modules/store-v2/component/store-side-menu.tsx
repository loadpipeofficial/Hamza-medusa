'use client';

import React, { useState } from 'react';
import {
    Box,
    Text,
    Heading,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Flex,
    Divider,
} from '@chakra-ui/react';
import CurrencyButton from './currency-button';
import CategoryButton from './category-button';
import currencies from '../data/crypto-currencies';
import ReviewButton from './review-button';
import FilterButton from './filter-button';
import DualSlider from './dual-slider';

const SideMenu = () => {
    const ratings = [1, 2, 3, 4, 5];
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

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
            <DualSlider />
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
                    <CategoryButton name="Arts" />
                    <CategoryButton name="Arts" />
                    <CategoryButton name="Arts" />
                    <CategoryButton name="Arts" />
                    <CategoryButton name="Arts" />
                    <CategoryButton name="Arts" />
                    <CategoryButton name="Arts" />
                    <CategoryButton name="Arts" />
                </Flex>
            </Box>

            {/* Rating */}
            <Box mt="2rem">
                <Heading as="h2" size="h2">
                    Rating
                </Heading>

                <Flex mt="1rem" flexDirection={'column'} gap="16px">
                    {ratings.map((rating) => (
                        <ReviewButton key={rating} rating={rating.toString()} />
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
