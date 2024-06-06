import { Box, Text, Flex, Button } from '@chakra-ui/react';
import React from 'react';

const FilterButtons = (props: any) => {
    return (
        <Button
            height="60px"
            padding="10px 24px"
            gap="10px"
            borderRadius="49px"
            borderWidth="1px 0px 0px 0px"
            border="1px solid"
            borderColor="var(--gray-600, #475467)"
            onClick={() => props.setVendorName()}
        >
            <Text px="2" alignSelf={'center'}>
                {props.title}
            </Text>
        </Button>
    );
};

export default FilterButtons;
