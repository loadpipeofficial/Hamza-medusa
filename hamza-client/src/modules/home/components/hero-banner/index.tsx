import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroBanner = () => {
    return (
        <Flex
            px={6}
            pt={8}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Flex
                w="100%"
                bg="blue.400"
                color="white"
                py={2}
                mb={4}
                justifyContent="center"
                alignItems="center"
            >
                <Link href="https://blog.hamza.biz/affiliate/" isExternal>
                    <Text fontSize="lg" fontWeight="bold">
                        Become an affiliate
                    </Text>
                </Link>
            </Flex>
            <Text
                mb={{ sm: 3, md: '0' }}
                lineHeight={'62px'}
                color={'#FBFDFA'}
                style={{ fontSize: '32px' }}
            >
                Buy & Sell Products Using{' '}
                <span style={{ color: '#7B61FF' }}>
                    <b>Crypto</b>
                </span>{' '}
                as a Community
            </Text>
            <b />
            <Flex
                gap="10px"
                flexDirection={{
                    base: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                }}
                marginRight={{
                    sm: 'auto',
                    md: '0',
                    lg: '0',
                }}
            >
                <Text color={'#FBFDFA'} style={{ fontSize: '20px' }}>
                    By The <b>People</b>
                </Text>
                <Box marginRight={{ sm: 'auto' }} alignSelf="center">
                    <FaArrowRightLong size={24} color="#FBFDFA" />
                </Box>
                <Text color={'#FBFDFA'} style={{ fontSize: '20px' }}>
                    For The <b>People</b> Using Blockchain Tech
                </Text>
            </Flex>
        </Flex>
    );
};

export default HeroBanner;
