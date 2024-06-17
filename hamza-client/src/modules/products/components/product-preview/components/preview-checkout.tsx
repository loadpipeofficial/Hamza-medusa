import React from 'react';
import { Box, Text, Card, Button } from '@chakra-ui/react';

const PreviewCheckout = () => {
    return (
        <Card
            borderRadius={'16px'}
            height={'739px'}
            maxW={'504px'}
            width={'100%'}
            backgroundColor={'yellow'}
        >
            <Text>Listing Price</Text>

            <Button mt="auto" mx="2rem" mb="2rem">
                Checkout
            </Button>
        </Card>
    );
};

export default PreviewCheckout;
