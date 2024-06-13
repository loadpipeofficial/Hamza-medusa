import React from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';
import { FaTshirt } from 'react-icons/fa';

const FilterButtons = (props: any) => {
    return (
        <Button
            height="60px"
            padding="10px 24px"
            gap="10px"
            borderRadius="49px"
            backgroundColor={props.selected === props.title ? 'white' : 'black'}
            color={props.selected === props.title ? 'black' : 'white'}
            onClick={() => props.setVendorName()}
            _hover={{
                backgroundColor: 'white',
                color: 'black',
            }}
        >
            <Flex overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                <FaTshirt color="green" />
                <Text
                    fontWeight={'400'}
                    px="2"
                    alignSelf={'center'}
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    {props.title}
                </Text>
            </Flex>
        </Button>
    );
};

export default FilterButtons;
