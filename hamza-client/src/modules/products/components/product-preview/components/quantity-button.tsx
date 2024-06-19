'use client';
import React, { useEffect, useState } from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';

const QuantityButton = () => {
    const [quantity, setQuantity] = useState('');
    const { productData, setProductData } = useProductPreview();

    useEffect(() => {
        if (productData !== null) {
            setQuantity(productData.variants[0].inventory_quantity);
        }
    }, [productData, setProductData]);

    //TODO:Get varient id and update quantity.
    return (
        <Flex flexDirection="column" mb="1rem">
            <Flex>
                <Heading as="h3" fontSize={'18px'} color="white">
                    Quantity &#x2022;
                </Heading>
                <Heading
                    as="h4"
                    ml="5px"
                    mt="auto"
                    fontSize="16px"
                    color="primary.indigo.900"
                >
                    {`${quantity} available`}
                </Heading>
            </Flex>

            <Flex mt="1rem" gap="10px">
                <Flex
                    borderWidth={'1px'}
                    padding={'10px'}
                    borderRadius={'8px'}
                    width={'40px'}
                    borderColor={'#3E3E3E'}
                    cursor={'pointer'}
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
                    cursor={'pointer'}
                >
                    <Text color="white">{`->`}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default QuantityButton;
