import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import FilterIcon from '../assets/filter-button.svg';
import useStorePage from '@store/store-page/store-page';
import useSideFilter from '@store/store-page/side-filter';

// Define the props interface
interface FilterButtonProps {
    currency?: string;
    review?: string;
    category?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category }) => {
    // Use Zustand store to handle filter object
    const { setCurrencySelect, setReviewStarsSelect, setCategorySelect } =
        useStorePage();
    const {
        reviewFilterSelect,
        currencyFilterSelect,
        setReviewFilterSelect,
        setCurrencyFilterSelect,
    } = useSideFilter();

    return (
        <Button
            onClick={() => {
                if (currencyFilterSelect) {
                    setCurrencySelect(currencyFilterSelect);
                }
                if (reviewFilterSelect) {
                    // Check for undefined to allow review 0
                    setReviewStarsSelect(reviewFilterSelect);
                }
                if (category) {
                    setCategorySelect(category);
                }
                setReviewFilterSelect(null);
                setCurrencyFilterSelect(null);
            }}
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
