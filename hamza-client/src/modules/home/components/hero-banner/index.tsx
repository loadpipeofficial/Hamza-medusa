import React from 'react';
import { Container, Flex, Text } from '@chakra-ui/react';

const HeroBanner = () => {
    return (
        <Flex
            pt={8}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Text color={'white'} style={{ fontSize: '32px' }}>
                Buy & Sell Products Using{' '}
                <span style={{ color: '#7B61FF' }}>Crypto</span> as a Community
            </Text>
            <b />
            <Flex flexDirection={'row'}>
                <Text color={'white'} style={{ fontSize: '20px' }}>
                    By The People
                </Text>{' '}
                <Text color={'white'} style={{ fontSize: '20px' }}>
                    Arrow Pointing Right
                </Text>{' '}
                <Text color={'white'} style={{ fontSize: '20px' }}>
                    For The People Using Blockchain Tech
                </Text>
            </Flex>
        </Flex>
    );
};

export default HeroBanner;
