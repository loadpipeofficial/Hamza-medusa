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

const SideMenu = () => {
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
            backgroundColor={'#121212'}
        >
            <Heading as="h2" size="h2">
                Price Range
            </Heading>
            <Text color="secondary.davy.900">Prices before fees and taxes</Text>

            {/* Slider  */}
            <Box my="1rem">
                <Slider aria-label="slider-ex-1" defaultValue={0}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>

                <Flex justifyContent={'center'}>
                    <Flex
                        borderColor={'secondary.davy.900'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        mr="auto"
                        borderRadius={'12px'}
                        borderWidth={'1px'}
                        h="56px"
                        w="124px"
                    >
                        <Text color="secondary.davy.900">Minimum</Text>
                        <Text fontSize={'18px'}>USD {minValue}</Text>
                    </Flex>
                    <Divider
                        borderColor="secondary.davy.900"
                        w="15.87px"
                        alignSelf={'center'}
                    />
                    <Flex
                        borderColor={'secondary.davy.900'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        ml="auto"
                        borderRadius={'12px'}
                        borderWidth={'1px'}
                        h="56px"
                        w="124px"
                    >
                        <Text color="secondary.davy.900">Maximum</Text>
                        <Text fontSize={'18px'}>USD {maxValue}</Text>
                    </Flex>
                </Flex>
            </Box>

            <Heading as="h2" size="h2">
                Cryptocurrency
            </Heading>
            <Text color="secondary.davy.900">
                Pay with different cryptocurrencies
            </Text>
        </Box>
    );
};

export default SideMenu;
