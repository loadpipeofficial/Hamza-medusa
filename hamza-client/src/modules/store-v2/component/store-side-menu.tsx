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
    Button,
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
            <Text mt="5px" color="secondary.davy.900">
                Prices before fees and taxes
            </Text>

            {/* Slider  */}
            <Box my="2rem">
                <Slider aria-label="slider-ex-1" defaultValue={0}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>

                <Flex mt="1rem" justifyContent={'center'}>
                    <Flex
                        borderColor={'secondary.davy.900'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        mr="auto"
                        borderRadius={'12px'}
                        borderWidth={'1px'}
                        h="56px"
                        w="124px"
                    >
                        <Text color="secondary.davy.900" lineHeight="1">
                            Minimum
                        </Text>
                        <Text fontSize={'18px'} lineHeight="1">
                            USD {minValue}
                        </Text>
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
                        justifyContent={'center'}
                        ml="auto"
                        borderRadius={'12px'}
                        borderWidth={'1px'}
                        h="56px"
                        w="124px"
                    >
                        <Text color="secondary.davy.900" lineHeight="1">
                            Maximum
                        </Text>
                        <Text fontSize={'18px'} lineHeight="1">
                            USD {maxValue}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
            {/* Slider end */}

            {/* Crypto Currencies */}
            <Heading as="h2" size="h2">
                Cryptocurrency
            </Heading>
            <Text mt="5px" color="secondary.davy.900">
                Pay with different cryptocurrencies
            </Text>

            <Flex mt="1rem" flexDirection={'column'} gap="16px">
                <Flex>
                    <Text>icon</Text>
                    <Text>ETH</Text>
                </Flex>

                <Flex>
                    <Text>icon</Text>
                    <Text>ETH</Text>
                </Flex>

                <Flex>
                    <Text>icon</Text>
                    <Text>ETH</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default SideMenu;
