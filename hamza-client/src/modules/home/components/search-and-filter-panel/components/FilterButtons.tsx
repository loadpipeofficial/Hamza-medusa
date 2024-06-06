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
            borderWidth="1px 0px 0px 0px"
            border="1px solid"
            borderColor="var(--gray-600, #475467)"
            backgroundColor={
                props.selected === props.title ? 'white' : 'transparent'
            }
            color={props.selected === props.title ? 'black' : 'white'}
            onClick={() => props.setVendorName()}
            _hover={{
                backgroundColor: 'white',
                color: 'black',
            }}
        >
            <Flex>
                <FaTshirt color="green" />
                <Text px="2" alignSelf={'center'}>
                    {props.title}
                </Text>
            </Flex>
        </Button>
    );
};

export default FilterButtons;
