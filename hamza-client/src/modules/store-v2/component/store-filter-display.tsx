import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import CategoryButton from './category-button';

const StoreFilterDisplay = () => {
    return (
        <Flex flexDirection={'column'} mb="2rem">
            <Flex flexDirection={'column'} gap="1.5rem">
                <Text color="White">Home</Text>
                <CategoryButton />
                <Text color="primary.indigo.900">Filters Applied</Text>
                <CategoryButton />
            </Flex>
        </Flex>
    );
};

export default StoreFilterDisplay;
