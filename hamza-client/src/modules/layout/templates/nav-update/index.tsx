import React from 'react';
import { headers } from 'next/headers';
import { Suspense, useState, useEffect } from 'react';
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
import NavLink from './nav-link/nav-link';

const Nav = () => {
    return (
        <Container
            style={{
                zIndex: '1',
                backgroundColor: '#020202',
            }}
            className="sticky top-0"
            h={'78px'}
            maxW={'1440px'}
            bgColor={'transparent'}
            display="flex"
            alignItems="center"
        >
            <Flex width={'100%'} alignSelf="center">
                <Text
                    alignSelf="center"
                    color={'white'}
                    fontSize={'40px'}
                    mr="1rem"
                >
                    Hamza
                </Text>
                <Flex>
                    <NavLink href="/" title={'Home'} />
                    <NavLink href="/store" title={'Store'} />
                    <NavLink href="/account" title={'Account'} />
                </Flex>

                <Flex marginLeft="auto" gap={'20px'}>
                    <Suspense
                        fallback={
                            <LocalizedClientLink
                                className="mt-auto"
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
                        <Box alignSelf={'center'}>
                            <CartButton />
                        </Box>
                        <Box alignSelf={'center'}>
                            <WalletConnectButton />
                        </Box>
                    </Suspense>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Nav;
