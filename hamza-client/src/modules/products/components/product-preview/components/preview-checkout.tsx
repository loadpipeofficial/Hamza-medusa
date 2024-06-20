'use client';

import React, { useEffect, useState } from 'react';
import {
    Text,
    Card,
    Button,
    Flex,
    Box,
    Heading,
    Divider,
    textDecoration,
} from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';
import CurrencyButtonPreview from './currency-buttons';
import QuantityButton from './quantity-button';
import { addToCart } from '@modules/cart/actions';
import { useParams } from 'next/navigation';
import ReviewStar from '../../../../../../public/images/products/review-star.svg';
import Image from 'next/image';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import Link from 'next/link';
import { Variant } from 'types/medusa';

const PreviewCheckout = () => {
    const currencies: { [key: string]: 'ETH' | 'USDC' | 'USDT' } = {
        ETH: 'ETH',
        USDT: 'USDT',
        USDC: 'USDC',
    };

    let countryCode = useParams().countryCode as string;
    if (process.env.FORCE_US_COUNTRY)
        countryCode = process.env.FORCE_US_COUNTRY;
    const colorSample = ['black', 'white', 'red', 'teal'];

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
        <Flex
            padding={{ base: '0', md: '2rem' }}
            borderRadius={{ base: '0px', md: '16px' }}
            // height={'800px'}
            maxW={{ base: '100%', md: '504px' }}
            minW="375px"
            width={'100%'}
            flexDirection={'column'}
            backgroundColor={{ base: 'transparent', md: '#121212' }}
            overflow={'hidden'}
        >
            <Flex gap="10px" flexDirection={'column'}>
                <Heading
                    display={{ base: 'block', md: 'none' }}
                    fontSize={'16px'}
                    color="white"
                >
                    {productData.title}
                </Heading>
                <Heading
                    display={{ base: 'none', md: 'block' }}
                    fontSize={'16px'}
                    color="primary.green.900"
                >
                    Listing Price
                </Heading>
                <Flex gap="10px" mb="-0.5rem">
                    <CurrencyButtonPreview
                        width="24px"
                        height="24px"
                        currencyName={currencies['USDC']}
                    />
                    <Heading
                        fontSize={{ base: '18px', md: '32px' }}
                        color="white"
                    >
                        {price}
                    </Heading>
                    <Text
                        style={{ textDecoration: 'line-through' }}
                        alignSelf={'center'}
                        fontSize={{ base: '9px', md: '18px' }}
                        color="#555555"
                    >
                        {price}
                    </Text>
                </Flex>

                <Heading
                    display={{ base: 'none', md: 'block' }}
                    as="h3"
                    variant="semibold"
                    fontSize={'18px'}
                    color="white"
                >
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

                <Heading
                    display={{ base: 'none', md: 'flex' }}
                    as="h4"
                    fontSize="16px"
                    color="white"
                >
                    Also available in other currencies
                </Heading>
                <Flex display={{ base: 'none', md: 'flex' }} gap="10px">
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
            <Divider
                color="#555555"
                display={{ base: 'block', md: 'none' }}
                mt="1rem"
            />
            {/* Varients */}
            <Flex width={'100%'} flexDirection={'column'} mt="1rem">
                <Flex flexDirection="column" gap="10px">
                    <Heading as="h3" fontSize={'18px'} color="white">
                        Size
                    </Heading>
                    <Flex gap="10px" wrap="wrap">
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
                <Flex flexDirection="column" my="1rem" gap="10px">
                    <Heading as="h3" fontSize={'18px'} color="white">
                        Color
                    </Heading>
                    <Flex gap="10px" wrap="wrap">
                        {colorSample.length > 0 ? (
                            colorSample.map((color, index) => (
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
                    {/* <Flex gap="10px">
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
                    </Flex> */}
                </Flex>

                <QuantityButton />

                <Link
                    style={{ width: '100%', marginTop: '5px' }}
                    href="/checkout?step=address"
                >
                    <Button
                        onClick={() => handleAddToCart()}
                        borderRadius={'56px'}
                        height="75px"
                        width="100%"
                        backgroundColor={'primary.yellow.900'}
                    >
                        Buy Now
                    </Button>
                </Link>

                <Button
                    onClick={() => handleAddToCart()}
                    borderRadius={'56px'}
                    height="75px"
                    borderWidth={'1px'}
                    color="primary.yellow.900"
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
                <Divider
                    color="#555555"
                    display={{ base: 'block', md: 'none' }}
                    mt="2rem"
                />
            </Flex>
        </Flex>
    );
};

export default PreviewCheckout;
