import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Flex, Divider, Button } from '@chakra-ui/react';
import ReviewStar from '../../../../public/images/products/review-star.svg';

const ReviewButton = (props: any) => {
    const [rating, setRating] = useState('1 Star');
    const [ratingAlt, setRatingAlt] = useState('1 Star');

    useEffect(() => {
        switch (props.rating) {
            case '1':
                setRating('1 Star');
                setRatingAlt('1 Star');
                break;
            case '2':
                setRating('2 Stars');
                setRatingAlt('2 Stars');
                break;
            case '3':
                setRating('3 Stars');
                setRatingAlt('3 Stars');
                break;
            case '4':
                setRating('4 Stars');
                setRatingAlt('4 Stars');
                break;
            case '5':
                setRating('5 Star');
                setRatingAlt('5 Stars');
                break;
            default:
                setRating('1 Star');
                setRatingAlt('1 Star');
        }
    }, [props.rating]);
    return (
        <Flex>
            <Flex
                onClick={() => {}}
                borderColor={'secondary.davy.900'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                style={{ padding: '10px 24px', cursor: 'pointer' }}
                _hover={{
                    background: 'white',
                    color: 'secondary.onyx.900',
                }}
            >
                <Image src={ReviewStar} alt={ratingAlt} />
                <Text ml="10px">{rating}</Text>
            </Flex>
        </Flex>
    );
};

export default ReviewButton;
