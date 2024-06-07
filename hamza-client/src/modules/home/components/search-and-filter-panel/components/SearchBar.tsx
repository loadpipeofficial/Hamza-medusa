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
        <Box pt="8" display={'flex'} justifyContent={'center'}>
            <InputGroup width="964px" height="82px">
                <Input
                    h="82px"
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
                    justifyContent="center"
                    pointerEvents="none"
                    pr="16px"
                >
                    <FaSearch size={25} color="#3E3E3E" />
                </InputRightElement>
            </InputGroup>
        </Box>
    );
};

export default SearchBar;
