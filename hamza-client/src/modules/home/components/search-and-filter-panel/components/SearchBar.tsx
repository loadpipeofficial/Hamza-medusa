import React from 'react';
import {
    Box,
    Container,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <Box pt="8" px="6" display={'flex'} justifyContent={'center'}>
            <InputGroup width="964px" height="82px">
                <Input
                    fontSize={'22px'}
                    placeholder="Search for product name, product type, brand name, category, etc..."
                    height="100%"
                    borderRadius="40px"
                    padding="16px 8px 16px 28px"
                    border="2px solid"
                    borderColor="#3E3E3E"
                    backgroundColor="black"
                    color="white"
                />
                <InputRightElement
                    height="100%"
                    display="flex"
                    alignItems="center"
                    pointerEvents="none"
                    mr="5"
                >
                    <FaSearch size={28} color="#3E3E3E" />
                </InputRightElement>
            </InputGroup>
        </Box>
    );
};

export default SearchBar;
