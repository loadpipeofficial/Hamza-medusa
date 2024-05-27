'use client';
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import hns from '../../../../../public/images/reputation/hns-conference.png';
import cbs from '../../../../../public/images/reputation/crossbordersummit.jpg';
import ethlondon from '../../../../../public/images/reputation/ETHGlobal_London.jpg';
import ethglobal from '../../../../../public/images/reputation/ethglobal.jpg';
import Image from 'next/image';

const reputation = () => {
    return (
        <Box
            bg="black"
            p={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="w-full font-sora"
        >
            <Text
                fontSize="lg"
                color="#94D42A"
                textAlign="center"
                mb={8}
                mt={12}
            >
                AS SEEN IN
            </Text>
            <Flex gap={36} justifyContent="center" mb={12}>
                <Image
                    src={ethlondon}
                    width={146}
                    height={136}
                    alt={'ETH London'}
                />
                <Image
                    src={ethglobal}
                    width={146}
                    height={136}
                    alt={'ETH Global'}
                />
                <Image
                    src={cbs}
                    width={146}
                    height={136}
                    alt={'Cross Border Summit'}
                />
                <Image
                    src={hns}
                    width={146}
                    height={136}
                    alt={'Handshake Conference'}
                />
            </Flex>
        </Box>
    );
};

export default reputation;
