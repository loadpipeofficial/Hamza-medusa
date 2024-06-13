import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import FilterIcon from '../assets/filter-button.svg';

const FilterButton = () => {
    //Use zustain to handle filter object
    return (
        <Button
            backgroundColor={'secondary.onyx.900'}
            borderRadius={'56px'}
            borderWidth={'1px'}
            borderColor={'white'}
            width="100%"
            h={'3.5rem'}
        >
            <Flex>
                <Image
                    src={FilterIcon}
                    alt="Filter Button"
                    width={24}
                    height={24}
                />

                <Text ml="1rem" color={'white'} fontSize={'18px'}>
                    Apply Filter
                </Text>
            </Flex>
        </Button>
    );
};

export default FilterButton;
