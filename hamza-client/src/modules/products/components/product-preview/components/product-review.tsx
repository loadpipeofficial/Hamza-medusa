import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import ReviewCard from './review-card';

const ProductReview = () => {
    return (
        <Flex width="1280px" height="450.57px">
            <Flex
                background="linear-gradient(317.5deg, #53594A 42.03%, #2C272D 117.46%, #2C272D 117.46%)"
                width="100%"
                height="100%"
                justifyContent={'center'}
                borderRadius={'16px'}
            >
                <Flex
                    mr="auto"
                    alignSelf={'center'}
                    height="100%"
                    px="1.5rem"
                    cursor={'pointer'}
                >
                    <Flex alignSelf={'center'}>
                        <GoArrowLeft color="white" size={36} />
                    </Flex>
                </Flex>

                <Flex>
                    <Flex gap="26px">
                        <ReviewCard />
                        <ReviewCard />
                    </Flex>
                </Flex>

                <Flex
                    ml="auto"
                    alignSelf={'center'}
                    height="100%"
                    px="1.5rem"
                    cursor={'pointer'}
                >
                    <Flex alignSelf={'center'}>
                        <GoArrowRight color="white" size={36} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProductReview;
