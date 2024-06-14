import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Flex } from '@chakra-ui/react';

const FilterTag = (props: any) => {
    return (
        <Flex>
            <Flex
                backgroundColor={'#020202'}
                borderColor={'secondary.onyx.900'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                style={{ padding: '10px 24px', cursor: 'pointer' }}
            >
                <Image src={props.img} alt={props.name} />
                <Text ml="10px" color="white">
                    {props.name}
                </Text>
            </Flex>
        </Flex>
    );
};

export default FilterTag;
