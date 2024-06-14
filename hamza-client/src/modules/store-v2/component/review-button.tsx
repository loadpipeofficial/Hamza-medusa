import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Flex } from '@chakra-ui/react';
import ReviewStar from '../../../../public/images/products/review-star.svg';
import useStorePage from '@store/store-page/store-page';
import useSideFilter from '@store/store-page/side-filter';

// Define the props type with TypeScript
interface ReviewButtonProps {
    rating: string;
}

const ReviewButton: React.FC<ReviewButtonProps> = ({ rating }) => {
    const { reviewFilterSelect, setReviewFilterSelect } = useSideFilter();
    const [title, setTitle] = useState('1 Star');
    const [ratingAlt, setRatingAlt] = useState('1 Star');

    useEffect(() => {
        switch (rating) {
            case '1':
                setTitle('1 Star');
                setRatingAlt('1 Star');
                break;
            case '2':
                setTitle('2 Stars');
                setRatingAlt('2 Stars');
                break;
            case '3':
                setTitle('3 Stars');
                setRatingAlt('3 Stars');
                break;
            case '4':
                setTitle('4 Stars');
                setRatingAlt('4 Stars');
                break;
            case '5':
                setTitle('5 Stars');
                setRatingAlt('5 Stars');
                break;
            default:
                setTitle('1 Star');
                setRatingAlt('1 Star');
        }
    }, [rating]);

    return (
        <Flex>
            <Flex
                onClick={() => setReviewFilterSelect(title)}
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
                <Image src={ReviewStar} alt={ratingAlt} />
                <Text ml="10px">{title}</Text>
            </Flex>
        </Flex>
    );
};

export default ReviewButton;
