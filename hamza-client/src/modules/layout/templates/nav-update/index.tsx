'use client';

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
import { HiOutlineShoppingCart } from 'react-icons/hi';

interface Region {
    id: string;
    name: string;
}

const Nav = () => {
    const [regions, setRegions] = useState<Region[] | null>(null);

    useEffect(() => {
        const fetchRegions = async () => {
            const regionsData = await listRegions();
            setRegions(regionsData);
        };
        fetchRegions();
    }, []);

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
                <Box
                    display={{ base: 'block', md: 'none' }}
                    alignSelf="center"
                    bgColor={'white'}
                >
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
                        {/* <Box alignSelf={'center'}>
                            <CartButton />
                        </Box> */}
                        <Box alignSelf={'center'}>
                            <WalletConnectButton />
                        </Box>
                    </Suspense>
                    <Box alignSelf={'center'}>
                        <CgBell color="white" size={'24px'} />
                    </Box>
                    <Box alignSelf={'center'}>
                        <HiOutlineShoppingCart color="white" size={'24px'} />
                    </Box>
                    <Box alignSelf={'center'}>
                        <CgProfile color="white" size={'24px'} />
                    </Box>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Nav;
