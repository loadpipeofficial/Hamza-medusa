import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

const SideMenu = () => {
    return (
        <Box
            px="2rem"
            py="2rem"
            color={'white'}
            borderRadius={'20px'}
            maxWidth={'348.74px'}
            width={'100%'}
            backgroundColor={'#121212'}
        >
            <Heading as="h2" size="h2">
                Price Range
            </Heading>
            <Text color="secondary.davy.900">Prices before fees and taxes</Text>

            <Heading as="h2" size="h2">
                Cryptocurrency
            </Heading>
            <Text color="secondary.davy.900">
                Pay with different cryptocurrencies
            </Text>
        </Box>
    );
};

export default SideMenu;
