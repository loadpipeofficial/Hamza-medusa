import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Flex, Divider, Button } from '@chakra-ui/react';
import ReviewStar from '../../../../public/images/products/review-star.svg';
import useStorePage from '@store/store-page/store-page';

const ReviewButton = (props: any) => {
    const { setReviewStarsSelect } = useStorePage();

    const handleSelectItem = (itemName: string) => {
        setReviewStarsSelect(itemName);
    };

    const [title, setTitle] = useState('1 Star');
    const [ratingAlt, setRatingAlt] = useState('1 Star');

    useEffect(() => {
        switch (props.rating) {
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
                setTitle('5 Star');
                setRatingAlt('5 Stars');
                break;
            default:
                setTitle('1 Star');
                setRatingAlt('1 Star');
        }
    }, [props.rating]);
    return (
        <Flex>
            <Flex
                onClick={() => handleSelectItem(props.rating)}
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
                <Text ml="10px">{title}</Text>
            </Flex>
        </Flex>
    );
};

export default ReviewButton;
