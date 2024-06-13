import {
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Flex,
    Text,
    Divider,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const DualSlider = () => {
    const [minValue, setMinValue] = useState(10);
    const [maxValue, setMaxValue] = useState(100);

    return (
        <Box my="2rem">
            <Slider onChange={(val) => setMinValue(val)}>
                <SliderTrack bg="secondary.charcoal.900">
                    <SliderFilledTrack bg="primary.indigo.900" />
                </SliderTrack>
                <SliderThumb boxSize={6} bg="primary.indigo.900" />
                <SliderThumb boxSize={6} bg="primary.indigo.900" />
            </Slider>

            {/* Display for min and max values */}
            <Flex mt="1rem" justifyContent={'center'}>
                <Flex
                    borderColor="secondary.davy.900"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    mr="auto"
                    borderRadius="12px"
                    borderWidth="1px"
                    h="56px"
                    w="124px"
                >
                    <Text color="secondary.davy.900" lineHeight="1">
                        Minimum
                    </Text>
                    <Text fontSize="18px" lineHeight="1">
                        USD {minValue}
                    </Text>
                </Flex>
                <Divider
                    borderColor="secondary.davy.900"
                    w="15.87px"
                    alignSelf="center"
                />
                <Flex
                    borderColor="secondary.davy.900"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    ml="auto"
                    borderRadius="12px"
                    borderWidth="1px"
                    h="56px"
                    w="124px"
                >
                    <Text color="secondary.davy.900" lineHeight="1">
                        Maximum
                    </Text>
                    <Text fontSize="18px" lineHeight="1">
                        USD {maxValue}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default DualSlider;
