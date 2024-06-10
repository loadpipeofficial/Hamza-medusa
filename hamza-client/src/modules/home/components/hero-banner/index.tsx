import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
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
                    md: 'row',
                }}
                marginRight={{
                    base: 'auto',
                    md: '0',
                }}
            >
                <Text color={'#FBFDFA'} style={{ fontSize: '20px' }}>
                    By The <b>People</b>
                </Text>
                <Box marginRight={{ base: 'auto', md: '0' }} alignSelf="center">
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
