'use client';
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import hns from '../../../../../public/images/reputation/hns-conference.png';
import cbs from '../../../../../public/images/reputation/crossbordersummit.jpg';
import ethlondon from '../../../../../public/images/reputation/ETHGlobal_London.jpg';
import ethglobal from '../../../../../public/images/reputation/ethglobal.jpg';
import Image from 'next/image';

const Reputation = () => {
    return (
        <Box
            bg="transparent"
            mt={6}
            p={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="w-full font-sora"
        >
            <Text
                className="font-sora text-xs font-bold leading-6 tracking-wider text-center"
                color="#9C9B9B"
                mb={8}
            >
                AS SEEN IN
            </Text>
            <Flex gap={'42px'} justifyContent="center" mb={6}>
                <Image
                    src={hns}
                    width={126}
                    height={116}
                    alt={'ETH London'}
                    style={{
                        filter: 'invert(47%) sepia(2%) saturate(0%) hue-rotate(186deg) brightness(90%) contrast(90%)',
                    }}
                />
                <Image
                    src={hns}
                    width={126}
                    height={116}
                    alt={'ETH Global'}
                    style={{
                        filter: 'invert(47%) sepia(2%) saturate(0%) hue-rotate(186deg) brightness(90%) contrast(90%)',
                    }}
                />
                <Image
                    src={hns}
                    width={126}
                    height={116}
                    alt={'Cross Border Summit'}
                    style={{
                        filter: 'invert(47%) sepia(2%) saturate(0%) hue-rotate(186deg) brightness(90%) contrast(90%)',
                    }}
                />
                <Image
                    src={hns}
                    width={126}
                    height={116}
                    alt={'Handshake Conference'}
                    style={{
                        filter: 'invert(47%) sepia(2%) saturate(0%) hue-rotate(186deg) brightness(90%) contrast(90%)',
                    }}
                />
            </Flex>
        </Box>
    );
};

export default Reputation;
