import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Flex } from '@chakra-ui/react';
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
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                style={{ padding: '10px 24px', cursor: 'pointer' }}
                color={reviewFilterSelect === title ? 'black' : 'white'}
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
            >
                <Image src={ReviewStar} alt={title} />
                <Text ml="10px">{title}</Text>
            </Flex>
        </Flex>
    );
};

export default ReviewButton;
