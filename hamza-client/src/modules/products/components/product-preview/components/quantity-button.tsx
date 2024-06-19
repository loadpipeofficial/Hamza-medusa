'use client';
import React, { useEffect, useState } from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';

const QuantityButton = () => {
    const [quantity, setQuantity] = useState();
    const { productData } = useProductPreview();

    useEffect(() => {}, []);

    return (
        <Flex flexDirection="column" mb="1rem">
            <Heading as="h3" fontSize={'18px'} color="white">
                Quantity :
            </Heading>

            <Flex mt="1rem" gap="10px">
                <Flex
                    borderWidth={'1px'}
                    padding={'10px'}
                    borderRadius={'8px'}
                    width={'40px'}
                    borderColor={'#3E3E3E'}
                >
                    <Text color="white">{`<-`}</Text>
                </Flex>

                <Flex
                    borderWidth={'1px'}
                    width={'109px'}
                    justifyContent={'center'}
                    padding={'10px'}
                    borderRadius={'8px'}
                    borderColor={'#3E3E3E'}
                >
                    <Text color="white">1</Text>
                </Flex>

                <Flex
                    borderWidth={'1px'}
                    padding={'10px'}
                    borderRadius={'8px'}
                    width={'40px'}
                    borderColor={'#3E3E3E'}
                >
                    <Text color="white">{`->`}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default QuantityButton;
