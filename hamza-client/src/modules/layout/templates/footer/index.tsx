import { clx } from '@medusajs/ui';
import { Flex, Container, Text, Box, Divider, Image } from '@chakra-ui/react';
import { getCategoriesList, getCollectionsList } from '@lib/data';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import { FaTwitter } from 'react-icons/fa6';
import { FaDiscord } from 'react-icons/fa6';
import Link from 'next/link';
import Reputation from '@modules/home/components/reputation';

const fetchCollections = async () => {
    const { collections } = await getCollectionsList();
    return collections;
};

const fetchCategories = async () => {
    const { product_categories } = await getCategoriesList();
    return product_categories;
};

export default async function Footer() {
    const productCollections = await fetchCollections().then(
        (collections) => collections
    );
    const productCategories = await fetchCategories().then(
        (categories) => categories
    );
    return (
        <Flex
            width="full"
            bgColor={'black'}
            py="4rem"
            justifyContent={'center'}
        >
            <Flex
                maxWidth={'1280px'}
                px="2rem"
                flexDirection={'column'}
                width={'100%'}
            >
                {/* links */}
                <Divider mx="auto" color="#555555" maxWidth={'1014px'} />
                <Flex
                    pt={{ base: '2rem', md: '3rem' }}
                    pb="2rem"
                    flexDirection={{ base: 'column', md: 'row' }}
                    justifyContent={'space-between'}
                    width={'100%'}
                >
                    <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                        <Text className="text-base font-bold">
                            Processing and Shipping
                        </Text>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            Our Copyrights Policy
                        </Text>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            Our Return Policy
                        </Text>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            Catalog
                        </Text>
                    </Flex>

                    <Divider
                        display={{ base: 'block', md: 'none' }}
                        my="2rem"
                    />

                    <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            CONTACT US
                        </Text>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            team@hamza.biz
                        </Text>
                    </Flex>

                    <Divider
                        display={{ base: 'block', md: 'none' }}
                        my="2rem"
                    />

                    <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            Articles
                        </Text>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            Privacy Policy
                        </Text>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            Terms and Conditions
                        </Text>
                        <Text
                            fontSize={{ base: '14px', md: '16px' }}
                            className="text-base font-bold"
                        >
                            Certificate of Authenticity
                        </Text>
                    </Flex>
                </Flex>

                <Divider />
                {/* Reputation */}

                <Box
                    mb={{ base: '-10rem', md: '0' }}
                    display={{ base: 'none', md: 'block' }}
                >
                    <Reputation />
                </Box>

                <Divider />
                {/* Bottom Content */}

                <Flex pt="2rem" justifyContent={'space-between'} width={'100%'}>
                    <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                        <Text
                            display={{ base: 'none', md: 'block' }}
                            className="text-3xl font-bold"
                        >
                            HAMZA
                        </Text>
                    </Flex>
                    <Flex
                        mr={{ base: 'auto', md: '0' }}
                        flexDir={'row'}
                        color={'white'}
                        gap={'8px'}
                    >
                        <Text className="text-base font-bold">
                            Follow us on:{' '}
                        </Text>
                        <Link
                            href="https://x.com/loadpipe?t=mrR1xycvffxf-4MoBAhFJA&s=09"
                            target="_blank"
                        >
                            <FaTwitter size={24} />
                        </Link>
                        <Link
                            href="https://discord.gg/Js2EmJ9k"
                            target="_blank"
                        >
                            <FaDiscord size={24} />
                        </Link>
                    </Flex>

                    <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                        <Text
                            display={{ base: 'none', md: 'block' }}
                            className="text-base font-bold"
                        >
                            Certificate of Authenticity
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
