'use client';

import React, { useEffect, useState } from 'react';
import { Text, Card, Button, Flex, Select } from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';

const PreviewCheckout = () => {
    const [sizes, setSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);

    const { productData } = useProductPreview();

    const getUniqueOptions = (
        variants: Variant[],
        optionIndex: number
    ): string[] => {
        const optionsSet = new Set<string>(
            variants.map((variant) => variant.title.split(' / ')[optionIndex])
        );
        return Array.from(optionsSet);
    };

    useEffect(() => {
        if (productData && productData.variants) {
            setSizes(getUniqueOptions(productData.variants, 0));
            setColors(getUniqueOptions(productData.variants, 1));
        }
    }, [productData]);

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
            <Flex flexDirection="column" my="2rem">
                <Text color="white">Size:</Text>
                <Select placeholder="Select size">
                    {sizes.length > 0 ? (
                        sizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))
                    ) : (
                        <option>No sizes available</option>
                    )}
                </Select>
            </Flex>

            <Flex flexDirection="column" my="2rem">
                <Text color="white">Color:</Text>
                <Select placeholder="Select color">
                    {colors.length > 0 ? (
                        colors.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))
                    ) : (
                        <option>No colors available</option>
                    )}
                </Select>
            </Flex>
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
