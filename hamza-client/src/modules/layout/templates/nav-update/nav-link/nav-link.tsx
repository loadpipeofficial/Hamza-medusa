'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
    const { countryCode } = useParams();

    return (
        <Link
            style={{ borderWidth: '1px', borderColor: 'transparent' }}
            href={`/${countryCode}${href}`}
        >
            <Flex h="100%" p="4">
                <Text alignSelf={'center'} fontSize={'20px'} color="white">
                    {title}
                </Text>
            </Flex>
        </Link>
    );
};

export default NavLink;
