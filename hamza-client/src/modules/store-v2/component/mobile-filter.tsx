import React from 'react';
import mobileFilter from '../../../../public/images/categories/mobile-filter.svg';
import { Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
const MobileFilter = () => {
    return (
        <Flex
            width={'100%'}
            display={{ base: 'flex', md: 'none' }}
            my="2rem"
            px="1rem"
        >
            <Flex>Search Bar</Flex>
            <Flex
                ml="auto"
                borderWidth={'2px'}
                width={'50px'}
                height={'50px'}
                borderRadius={'full'}
                borderColor={'#555555'}
                justifyContent={'center'}
            >
                <Image
                    style={{
                        width: '18px',
                        height: '18px',
                        alignSelf: 'center',
                    }}
                    src={mobileFilter}
                    alt="mobile filter"
                />
            </Flex>
        </Flex>
    );
};

export default MobileFilter;
