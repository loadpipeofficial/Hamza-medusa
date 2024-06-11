import React from 'react';
import { Suspense, useState, useEffect } from 'react';
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
import { CgProfile, CgBell } from 'react-icons/cg';

export default async function Nav() {
    const regions = await listRegions().then((regions) => regions);
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
                <Box display={{ base: 'block', md: 'none' }} alignSelf="center">
                    <SideMenu regions={regions} />
                </Box>
                <LocalizedClientLink href="/">
                    <Text
                        display={{ base: 'none', md: 'block' }}
                        alignSelf="center"
                        color={'white'}
                        fontSize={'40px'}
                        mr="1rem"
                    >
                        Hamza
                    </Text>
                </LocalizedClientLink>

                <Flex display={{ base: 'none', md: 'flex' }}>
                    <NavLink href="/" title={'Home'} />
                    <NavLink href="/store" title={'Store'} />
                    <NavLink href="/account" title={'Account'} />
                    <NavLink href="/verify-email" title={'Verify'} />
                </Flex>

                <Flex marginLeft="auto" gap={'15px'}>
                    <Suspense>
                        <Box alignSelf={'center'}>
                            <WalletConnectButton />
                        </Box>

                        <Box alignSelf={'center'}>
                            <CgBell color="white" size={'24px'} />
                        </Box>
                        <CartButton />
                        <Box
                            alignSelf={'center'}
                            display={{ base: 'none', md: 'block' }}
                        >
                            <CgProfile color="white" size={'24px'} />
                        </Box>
                    </Suspense>
                </Flex>
            </Flex>
        </Container>
    );
}
