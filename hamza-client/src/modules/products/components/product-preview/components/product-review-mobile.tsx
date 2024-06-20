import React, { useState } from 'react';
import ReviewCardMobile from './review-card-mobile';
import { Text, Flex, Box } from '@chakra-ui/react';

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        location: 'New York',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        location: 'California',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        location: 'Texas',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

const ProductReviewMobile = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handlers = useSwipeable({
    //     onSwipedLeft: () => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    //     },
    //     onSwipedRight: () => {
    //         setCurrentIndex(
    //             (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    //         );
    //     },
    // });

    // const displayedReviews = [
    //     reviews[currentIndex],
    //     reviews[(currentIndex + 1) % reviews.length],
    // ];

    return (
        <Flex
            maxW="1280px"
            width={'100%'}
            height="450.57px"
            display={{ base: 'flex', md: 'none' }}
            overflow={'hidden'}
        >
            <Flex flexDirection={'column'} my="2rem">
                <Flex
                    mt="2rem"
                    flexDirection="row"
                    gap="26px"
                    overflow={'hidden'}
                >
                    {reviews.map((review) => (
                        <ReviewCardMobile
                            key={review.id}
                            name={review.name}
                            location={review.location}
                            review={review.review}
                        />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProductReviewMobile;
