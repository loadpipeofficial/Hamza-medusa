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
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import SearchModal from '@modules/search/templates/search-modal';

const SearchBar = () => {
    const [searchOpened, setSearchOpened] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key == 'k') {
                setSearchOpened(true);
            }
        });
    }, []);

    useEffect(() => {
        setSearchOpened(false);
    }, [pathname]);

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
                    onClick={() => {
                        setSearchOpened(true);
                    }}
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
            {searchOpened && (
                <SearchModal
                    closeModal={() => {
                        setSearchOpened(false);
                    }}
                />
            )}
        </Box>
    );
};

export default SearchBar;
