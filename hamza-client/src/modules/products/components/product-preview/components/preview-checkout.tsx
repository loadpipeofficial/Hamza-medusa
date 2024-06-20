'use client';

import React, { useEffect, useState } from 'react';
import { Text, Card, Button, Flex, Box, Heading } from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';
import CurrencyButtonPreview from './currency-buttons';
import QuantityButton from './quantity-button';
import { addToCart } from '@modules/cart/actions';
import { useParams } from 'next/navigation';
import ReviewStar from '../../../../../../public/images/products/review-star.svg';
import Image from 'next/image';
import { Variant } from 'types/medusa';

const PreviewCheckout = () => {
    const currencies: { [key: string]: 'ETH' | 'USDC' | 'USDT' } = {
        ETH: 'ETH',
        USDT: 'USDT',
        USDC: 'USDC',
    };

    const countryCode = useParams().countryCode as string;
    const [sizes, setSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState('');
    const [price, setSelectedPrice] = useState('');

    const { productData, variantId, quantity } = useProductPreview();

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
            setSelectedPrice(productData.variants[0].prices[0].amount);
            console.log(productData);
        }
    }, [productData]);

    const handleColorSelect = (color: any) => {
        setSelectedColor(color);
    };

    const handleAddToCart = async () => {
        await addToCart({
            variantId: productData.variants[0].id,
            quantity: quantity,
            countryCode: countryCode,
            currencyCode: 'eth',
        });
    };

    return (
        <Card
            padding="2rem"
            borderRadius={'16px'}
            height={'800px'}
            maxW={'504px'}
            width={'100%'}
            backgroundColor={'#121212'}
            overflow={'hidden'}
        >
            <Text color="primary.green.900">Listing Price</Text>

            <Flex gap="10px" flexDirection={'column'}>
                <Flex gap="12px">
                    <CurrencyButtonPreview
                        width="24px"
                        height="24px"
                        currencyName={currencies['USDC']}
                    />
                    <Text fontSize={'32px'} color="white">
                        {price}
                    </Text>
                </Flex>
                <Heading as="h3" color="white">
                    {price}
                </Heading>

                <Flex gap="5px">
                    <Flex flexDirection={'row'}>
                        <Image src={ReviewStar} alt={'star'} />
                        <Image src={ReviewStar} alt={'star'} />
                        <Image src={ReviewStar} alt={'star'} />
                        <Image src={ReviewStar} alt={'star'} />
                        <Image src={ReviewStar} alt={'star'} />
                    </Flex>

                    <Flex flexDirection={'row'}>
                        <Heading
                            as="h4"
                            variant="semibold"
                            fontSize={'16px'}
                            color={'white'}
                            alignSelf={'center'}
                        >
                            4.97
                        </Heading>
                        <Heading
                            ml="4px"
                            as="h4"
                            variant="semibold"
                            fontSize={'16px'}
                            color={'#555555'}
                            alignSelf={'center'}
                        >
                            (0 Reviews)
                        </Heading>
                    </Flex>
                </Flex>

                <Heading as="h4" fontSize="16px" color="white">
                    Also available in other currencies
                </Heading>
                <Flex mt="10px" gap="7px">
                    {Object.keys(currencies)
                        .filter((key: string) => currencies[key] !== 'USDC')
                        .map((key) => (
                            <CurrencyButtonPreview
                                width="20px"
                                height="20px"
                                key={key}
                                currencyName={currencies[key]}
                            />
                        ))}
                </Flex>
            </Flex>

            <Flex width={'100%'} flexDirection={'column'}>
                <Flex flexDirection="column" mt="2rem">
                    <Heading as="h3" fontSize={'18px'} color="white">
                        Size:
                    </Heading>
                    <Flex mt="1rem" gap="10px">
                        {sizes.length > 0 ? (
                            sizes.map((size, index) => (
                                <Flex
                                    backgroundColor={'transparent'}
                                    key={index}
                                    borderWidth={'1px'}
                                    px="16px"
                                    py="8px"
                                    borderRadius="full"
                                    borderColor={'#3E3E3E'}
                                >
                                    <Text color="white">{size}</Text>
                                </Flex>
                            ))
                        ) : (
                            <Text color="primary.green.900">
                                No sizes available
                            </Text>
                        )}
                    </Flex>
                </Flex>
                <Flex flexDirection="column" my="1rem">
                    <Heading as="h3" fontSize={'18px'} color="white">
                        Color :
                    </Heading>
                    <Flex mt="1rem" gap="10px">
                        {colors.length > 0 ? (
                            colors.map((color, index) => (
                                <Flex
                                    key={index}
                                    p="2px"
                                    borderRadius="full"
                                    borderWidth={'2px'}
                                    width="52px"
                                    height="52px"
                                    borderColor={
                                        color === selectedColor ||
                                        (selectedColor === '' && index === 0)
                                            ? 'white'
                                            : 'transparent'
                                    }
                                    backgroundColor={'transparent'}
                                    cursor="pointer"
                                    justifyContent={'center'}
                                    onClick={() => handleColorSelect(color)}
                                >
                                    <Box
                                        alignSelf={'center'}
                                        width="36px"
                                        height="36px"
                                        borderRadius="full"
                                        backgroundColor={color}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    />
                                </Flex>
                            ))
                        ) : (
                            <Text color="primary.green.900">
                                No colors available
                            </Text>
                        )}
                    </Flex>
                </Flex>

                <QuantityButton />
                <Button
                    borderRadius={'56px'}
                    height="75px"
                    backgroundColor={'primary.yellow.900'}
                >
                    Buy Now
                </Button>
                <Button
                    onClick={() => handleAddToCart()}
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
