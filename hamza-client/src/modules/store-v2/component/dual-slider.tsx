import React, { useState } from 'react';
import {
    Box,
    Text,
    Flex,
    Divider,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react';

// Define a type for the range state
type RangeType = [number, number];

const DualSlider = () => {
    // Using the RangeType for the state
    const [range, setRange] = useState<RangeType>([10, 2000]);

    // Define the type for the values parameter
    const handleRangeChange = (values: number[]) => {
        setRange(values as RangeType);
    };

    return (
        <Box my="2rem">
            <RangeSlider
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-label={['min', 'max']}
                defaultValue={[10, 2000]}
                min={0}
                max={2000}
                onChange={handleRangeChange}
                colorScheme="blue"
            >
                <RangeSliderTrack bg="secondary.charcoal.900">
                    <RangeSliderFilledTrack bg="primary.indigo.900" />
                </RangeSliderTrack>
                <RangeSliderThumb
                    index={0}
                    boxSize={6}
                    bg="primary.indigo.900"
                />
                <RangeSliderThumb
                    index={1}
                    boxSize={6}
                    bg="primary.indigo.900"
                />
            </RangeSlider>

            {/* Display for min and max values */}
            <Flex mt="1rem" justifyContent="center">
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
                        USD {range[0]}
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
                        USD {range[1]}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default DualSlider;
