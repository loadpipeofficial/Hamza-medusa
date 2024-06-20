import React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';

interface ReviewCardProps {
    name: string;
    location: string;
    review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, location, review }) => {
    return (
        <Flex width={'506.63px'} borderWidth={'1px'} borderColor={'red'}>
            <Flex flexDirection={'column'}>
                <Heading as="h2" color="white" fontSize={'24px'}>
                    {name}
                </Heading>
                <Text color="primary.green.900">{location}</Text>
                <Text color="white">{review}</Text>
            </Flex>
        </Flex>
    );
};

export default ReviewCard;
