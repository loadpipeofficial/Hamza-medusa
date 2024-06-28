'use client';

import React from 'react';
import { Suspense, useState, useEffect } from 'react';
import { listRegions } from '@lib/data';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import CartButton from '@modules/layout/components/cart-button';
import WishListPopover from '@/components/wishlist-dropdown';
import SideMenu from '@modules/layout/components/side-menu';
import { WalletConnectButton } from '@/components/providers/rainbowkit/connect-button/connect-button';
import {
    Box,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';
import Image from 'next/image';
import HamzaLogo from '../../../../../public/images/logo/logo_green.svg';
import HamzaTitle from '../../../../../public/images/logo/hamza-title.svg';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CgProfile, CgBell } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

export default function Nav() {
    // const regions = await listRegions().then((regions) => regions);
    const { countryCode } = useParams();

    return (
        <Flex
            zIndex={'1'}
            className="sticky top-0"
            width="100%"
            height={'125px'}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={'#020202'}
        >
            <Flex
                h={'87px'}
                mx="1rem"
                maxWidth={'1280px'}
                width={'100%'}
                bgColor={'transparent'}
                display="flex"
                alignItems="center"
            >
                <Flex width={'100%'} alignSelf="center">
                    <LocalizedClientLink href="/">
                        <Flex>
                            <Image
                                src={HamzaLogo}
                                style={{ width: '100%', height: '67px' }}
                                alt="Hamza"
                            />

                            <Image
                                src={HamzaTitle}
                                style={{
                                    width: '100%',
                                    height: '23.07px',
                                    alignSelf: 'center',
                                    marginLeft: '1rem',
                                }}
                                alt="Hamza"
                            />
                        </Flex>
                    </LocalizedClientLink>
                    <Flex
                        width={'162px'}
                        height={'52px'}
                        borderWidth={'1px'}
                        borderRadius={'full'}
                        borderColor="white"
                        alignSelf={'center'}
                        justifyContent={'center'}
                        marginLeft={'auto'}
                        backgroundColor={'transparent'}
                        cursor={'pointer'}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Text
                            className="font-sora"
                            fontWeight={'600'}
                            fontSize={'16px'}
                            color="White"
                            alignSelf={'center'}
                        >
                            Sell on Hamza
                        </Text>
                    </Flex>

                    <Menu placement="bottom-end">
                        <MenuButton
                            width={'115px'}
                            height={'52px'}
                            px="1rem"
                            borderRadius={'full'}
                            justifyContent={'center'}
                            alignSelf={'center'}
                            marginLeft={{ base: 'auto', md: '1rem' }}
                            backgroundColor={'primary.green.900'}
                            cursor={'pointer'}
                        >
                            <Flex>
                                <Flex alignSelf={'center'}>
                                    <IoMdMenu color="black" size={30} />
                                </Flex>
                                <Flex marginLeft={'auto'} alignSelf={'center'}>
                                    <CgProfile color="black" size={30} />
                                </Flex>
                            </Flex>
                        </MenuButton>
                        <MenuList
                            marginTop={'1rem'}
                            pb={'0px'}
                            borderTopRadius={'0px'}
                            borderBottomRadius={'16px'}
                            backgroundColor={'black'}
                            width={'321px'}
                        >
                            <MenuItem
                                fontWeight={'600'}
                                mt="0.5rem"
                                px="2rem"
                                color={'white'}
                                backgroundColor={'black'}
                                _hover={{ color: 'primary.green.900' }}
                            >
                                Sell on Hamza
                            </MenuItem>
                            <Link href={`https://blog.hamza.biz/affiliate/`}>
                                <MenuItem
                                    fontWeight={'600'}
                                    mb="1rem"
                                    px="2rem"
                                    color={'white'}
                                    backgroundColor={'black'}
                                    _hover={{ color: 'primary.green.900' }}
                                >
                                    Be an affiliate
                                </MenuItem>
                            </Link>
                            <MenuDivider opacity={'1'} borderColor={'white'} />

                            <Link href={`/${countryCode}/store`}>
                                <MenuItem
                                    fontWeight={'600'}
                                    mt="1rem"
                                    px="2rem"
                                    color={'white'}
                                    backgroundColor={'black'}
                                    _hover={{ color: 'primary.green.900' }}
                                >
                                    <Text> Market</Text>
                                </MenuItem>
                            </Link>
                            <MenuItem
                                fontWeight={'600'}
                                px="2rem"
                                color={'white'}
                                backgroundColor={'black'}
                                _hover={{ color: 'primary.green.900' }}
                            >
                                About Us
                            </MenuItem>
                            <MenuItem
                                fontWeight={'600'}
                                px="2rem"
                                mb="1.5rem"
                                color={'white'}
                                backgroundColor={'black'}
                                _hover={{ color: 'primary.green.900' }}
                            >
                                Help Center
                            </MenuItem>
                            <MenuDivider
                                mb="0px"
                                opacity={'1'}
                                borderColor={'white'}
                            />
                            <MenuItem
                                mb="0px"
                                borderBottomRadius={'15px'}
                                height={'91px'}
                                backgroundColor={'primary.green.900'}
                                color={'black'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <Flex gap={'8px'}>
                                    <Flex alignSelf={'center'}>
                                        <MdOutlineAccountBalanceWallet
                                            size={30}
                                        />
                                    </Flex>
                                    <Text
                                        alignSelf={'center'}
                                        fontWeight={'600'}
                                        fontSize={'20px'}
                                    >
                                        Connect Wallet
                                    </Text>
                                </Flex>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    );
}
