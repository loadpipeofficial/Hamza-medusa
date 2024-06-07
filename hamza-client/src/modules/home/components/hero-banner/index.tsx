import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroBanner = () => {
    return (
        <Flex
            pt={8}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Text
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
            <Flex flexDirection={'row'}>
                <Text color={'#FBFDFA'} style={{ fontSize: '20px' }}>
                    By The <b>People</b>
                </Text>
                <Box
                    style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
                    alignSelf="center"
                >
                    <FaArrowRightLong size={20} color="#FBFDFA" />
                </Box>
                <Text color={'#FBFDFA'} style={{ fontSize: '20px' }}>
                    For The <b>People</b> Using Blockchain Tech
                </Text>
            </Flex>
        </Flex>
    );
};

export default HeroBanner;
