'use client';
import React from 'react';
import {
    Box,
    Flex,
    Text,
    VStack,
    Icon,
    useColorModeValue,
    Container,
} from '@chakra-ui/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import test_1 from '../../../../../public/images/testimonials/testimonial_1.png';
import test_2 from '../../../../../public/images/testimonials/testimonial_2.png';
const Testimonial = () => {
    // Define your HEX colors for icons and text
    const iconColorLeft = '#7B61FF';
    const iconColorRight = '#FABE06';
    const cardBgLeft = '#3B2C4F'; // Card background
    const cardBgRight = '#50483E'; // Card background
    const textColor = '#FFF';

    return (
        <Container
            className="font-sora"
            flex="1"
            maxW="100%"
            p={6}
            bg="#000"
            centerContent
        >
            <Flex mx={3} justify="center" align="center" wrap="wrap" gap={6}>
                <Box
                    flex="1"
                    bg={cardBgLeft}
                    bgImage={`url(${test_1.src})`}
                    style={{
                        backgroundSize: '300px', // Use your desired size
                    }}
                    bgPosition="right bottom"
                    bgRepeat="no-repeat"
                    w={['100%', '48%', '48%']}
                    p={12}
                    borderRadius="2xl"
                    minHeight="350px"
                    boxShadow="lg" // Added shadow for depth
                    color={textColor}
                >
                    <Text
                        fontSize="sm"
                        color={'#7B61FF'}
                        zIndex="docked"
                        textAlign="left"
                    >
                        TESTIMONIALS
                    </Text>
                    <VStack spacing={4} align="center" justify="center">
                        <Flex p={4}>
                            <Icon
                                as={FaQuoteRight}
                                color={iconColorLeft}
                                boxSize={10}
                                mr={12}
                            />
                            <Text
                                fontSize={['md', 'lg', 'xl']}
                                fontStyle="bold"
                                textAlign="left"
                            >
                                Hamza has revolutionized the way I do business.
                                The protocol's clear transactions and real-time
                                reporting have increased my efficiency and
                                profitability.
                            </Text>
                        </Flex>
                        <Box pt={4}>
                            <Text
                                color={'#7B61FF'}
                                fontWeight="bold"
                                fontSize={['sm', 'md', 'lg']}
                                textAlign="left"
                            >
                                Anna Richardson
                            </Text>
                            <Text
                                fontSize={['xs', 'sm', 'md']}
                                fontStyle="italic"
                                opacity={0.7}
                                textAlign="right"
                            >
                                Chief Editor at Art+ Magazine
                            </Text>
                        </Box>
                    </VStack>
                </Box>
                <Box
                    flex="1"
                    bg={cardBgRight}
                    bgImage={`url(${test_2.src})`}
                    style={{
                        backgroundSize: '300px', // Use your desired size
                    }}
                    bgPosition="right bottom"
                    bgRepeat="no-repeat"
                    w={['100%', '48%', '48%']}
                    p={12}
                    borderRadius="2xl"
                    minHeight="350px"
                    boxShadow="lg" // Added shadow for depth
                    color={textColor}
                >
                    <Text
                        fontSize="sm"
                        color={'#FABE06'}
                        zIndex="docked"
                        textAlign="left"
                    >
                        TESTIMONIALS
                    </Text>
                    <VStack spacing={4} align="center" justify="center">
                        <Flex p={4}>
                            <Icon
                                as={FaQuoteRight}
                                color={iconColorRight}
                                mr={12}
                                boxSize={10}
                            />
                            <Text
                                fontSize={['md', 'lg', 'xl']}
                                fontStyle="bold"
                                textAlign="left"
                            >
                                Hamza allows me to sell my products on the
                                blockchain like a true Chad. The girth of my jaw
                                has grown by 128% and my chin length by 97%.
                            </Text>
                        </Flex>
                        <Box pt={4}>
                            <Text
                                color={'#FABE06'}
                                fontWeight="bold"
                                fontSize={['sm', 'md', 'lg']}
                                textAlign="left"
                            >
                                Davey Gam
                            </Text>
                            <Text
                                fontSize={['xs', 'sm', 'md']}
                                fontStyle="italic"
                                opacity={0.7}
                                textAlign="right"
                            >
                                Independent Entrepreneur
                            </Text>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Container>
    );
};

export default Testimonial;
