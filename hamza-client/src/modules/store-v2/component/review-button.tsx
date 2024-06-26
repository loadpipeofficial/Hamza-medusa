import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Flex, Box } from '@chakra-ui/react';
import ReviewStar from '../../../../public/images/products/review-star.svg';
import useStorePage from '@store/store-page/store-page';
import useSideFilter from '@store/store-page/side-filter';

// Define the props type with TypeScript
interface ReviewButtonProps {
    title: string;
    value: string;
}

const ReviewButton: React.FC<ReviewButtonProps> = ({ title, value }) => {
    const { reviewFilterSelect, setReviewFilterSelect } = useSideFilter();

    return (
        <Flex>
            <Flex
                onClick={() => setReviewFilterSelect(value)}
                backgroundColor={
                    reviewFilterSelect === title ? 'white' : 'transparent'
                }
                borderColor={'secondary.davy.900'}
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                width={{ base: '125px', md: '154px' }}
                // minW={'101px'}
                style={{ padding: '10px 24px', cursor: 'pointer' }}
                color={reviewFilterSelect === title ? 'black' : 'white'}
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
            >
                <Image src={ReviewStar} alt={title} />
                <Flex justifyContent={'flex-start'} flex="1">
                    <Text ml="10px" fontSize={{ base: '14px', md: '16px' }}>
                        {title}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ReviewButton;
