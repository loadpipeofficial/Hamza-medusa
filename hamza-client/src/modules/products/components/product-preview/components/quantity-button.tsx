'use client';
import React, { useEffect, useState } from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const QuantityButton = () => {
    const [quantityAvailable, setQuantityAvailable] = useState('');
    const { productData, setProductData, quantity, setQuantity } =
        useProductPreview();

    useEffect(() => {
        const updateQuantityButton = async () => {
            if (productData !== null) {
                setQuantityAvailable(
                    productData.variants[0].inventory_quantity
                );
            }
        };

        updateQuantityButton();
    }, [productData, setProductData]);

    const incrementQuantity = () => {
        if (quantity < Number(quantityAvailable)) {
            setQuantity(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

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
                    {`${quantityAvailable} available`}
                </Heading>
            </Flex>

            <Flex mt="1rem" gap="10px">
                <Flex
                    onClick={() => decrementQuantity()}
                    borderWidth={'1px'}
                    padding={'10px'}
                    borderRadius={'8px'}
                    width={'40px'}
                    borderColor={'#3E3E3E'}
                    cursor={'pointer'}
                    justifyContent={'center'}
                >
                    <Flex alignSelf="center">
                        <AiOutlineMinus color="white" />
                    </Flex>
                </Flex>

                <Flex
                    borderWidth={'1px'}
                    width={'109px'}
                    justifyContent={'center'}
                    padding={'10px'}
                    borderRadius={'8px'}
                    borderColor={'#3E3E3E'}
                >
                    <Text color="white">{quantity}</Text>
                </Flex>

                <Flex
                    onClick={() => incrementQuantity()}
                    borderWidth={'1px'}
                    padding={'10px'}
                    borderRadius={'8px'}
                    width={'40px'}
                    borderColor={'#3E3E3E'}
                    cursor={'pointer'}
                    justifyContent={'center'}
                >
                    <Flex alignSelf="center">
                        <AiOutlinePlus color="white" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default QuantityButton;
