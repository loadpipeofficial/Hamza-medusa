import React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';

const ReviewCard = () => {
    return (
        <Flex width={'506.63px'} borderWidth={'1px'} borderColor={'red'}>
            <Flex flexDirection={'column'}>
                <Heading as="h2" color="white" fontSize={'24px'}>
                    John Doe
                </Heading>
                <Text color="primary.green.900">Location</Text>
            </Flex>
        </Flex>
    );
};

export default ReviewCard;
