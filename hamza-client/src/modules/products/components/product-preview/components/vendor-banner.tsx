import React from 'react';
import { Box, Text, Flex, Container } from '@chakra-ui/react';

const VendorBanner = () => {
    return (
        <Flex
            backgroundColor={'#121212'}
            maxWidth="1280px"
            width="100%"
            height="165.78px"
            borderRadius={'16px'}
            p="2rem"
        >
            <Flex
                ml="auto"
                alignSelf="center"
                flexDirection={'column'}
                gap={'16px'}
            >
                <Flex
                    borderWidth={'1px'}
                    borderRadius={'37px'}
                    borderColor={'primary.indigo.900'}
                    justifyContent={'center'}
                >
                    <Text color="primary.indigo.900">Chat with them</Text>
                </Flex>
                <Flex
                    borderWidth={'1px'}
                    borderRadius={'37px'}
                    justifyContent={'center'}
                >
                    <Text color="white">Visit Store</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default VendorBanner;
