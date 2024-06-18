import React from 'react';
import { Text, Card, Button, Flex } from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';

const PreviewCheckout = () => {
    const { productData } = useProductPreview();

    console.log(productData);
    return (
        <Card
            padding="2rem"
            borderRadius={'16px'}
            height={'739px'}
            maxW={'504px'}
            width={'100%'}
            backgroundColor={'#121212'}
        >
            <Text color="primary.green.900">Listing Price</Text>
            <Text color="primary.green.900">Listing Price</Text>

            <Flex width={'100%'} flexDirection={'column'} mt="auto">
                <Button
                    borderRadius={'56px'}
                    height="75px"
                    backgroundColor={'primary.yellow.900'}
                >
                    Buy Now
                </Button>
                <Button
                    borderRadius={'56px'}
                    height="75px"
                    borderWidth={'1px'}
                    color="white"
                    borderColor={'primary.yellow.900'}
                    backgroundColor={'transparent'}
                    mt="1rem"
                    _hover={{
                        color: 'black',
                        bg: 'white',
                        borderColor: 'white',
                    }}
                >
                    Add To Cart
                </Button>
            </Flex>
        </Card>
    );
};

export default PreviewCheckout;
