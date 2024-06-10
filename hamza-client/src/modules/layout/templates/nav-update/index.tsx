import React from 'react';
import { headers } from 'next/headers';
import { Suspense, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { listRegions } from '@lib/data';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import CartButton from '@modules/layout/components/cart-button';
import WishListPopover from '@/components/wishlist-dropdown';
import SideMenu from '@modules/layout/components/side-menu';
import Image from 'next/image';
import logo from '../../../../../public/nav/hamza_logo.png';
import { WalletConnectButton } from '@/components/providers/rainbowkit/connect-button/connect-button';
import SearchModal from '@modules/search/templates/search-modal';
import SearchModalWrapper from '@modules/search/templates/search-wrapper';
import dynamic from 'next/dynamic';
import { Container, Box, Flex, Text } from '@chakra-ui/react';

const Nav = () => {
    return (
        <Container
            h={'78px'}
            maxW={'1440px'}
            bgColor={'black'}
            display="flex"
            alignItems="center"
        >
            <Flex
                width={'100%'}
                gap={'56px'}
                alignSelf="center"
                backgroundColor={'red'}
            >
                <Text alignSelf="center">Hamza</Text>
                <Box alignSelf="center">Home</Box>
                <Box alignSelf="center">Market Place</Box>
                <Box alignSelf="center">Store</Box>
                <Box alignSelf={'center'}>About</Box>

                <Box ml="auto">
                    <Suspense
                        fallback={
                            <LocalizedClientLink
                                className="hover:text-ui-fg-base font-sora"
                                href="/cart"
                            >
                                <span
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Cart (0)
                                </span>
                            </LocalizedClientLink>
                        }
                    >
                        <CartButton />
                        <WalletConnectButton />
                    </Suspense>
                </Box>
            </Flex>
        </Container>
    );
};

export default Nav;
