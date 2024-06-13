import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import CategoryButton from './category-button';

const StoreFilterDisplay = () => {
    return (
        <Flex flexDirection={'column'} mb="2rem">
            <Flex flexDirection={'column'} gap="1.5rem">
                <Text color="White">Home</Text>
                <Flex gap="20px">
                    <CategoryButton name="Goblin Store" />
                    <CategoryButton name="Quality Store" />
                    <CategoryButton name="Headphones Store" />
                </Flex>
                <Text color="primary.indigo.900">Filters Applied</Text>
                <CategoryButton />
            </Flex>
        </Flex>
    );
};

export default StoreFilterDisplay;
