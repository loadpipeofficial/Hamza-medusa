import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Divider,
    Text,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import FilterIcon from '../../../../public/images/categories/mobile-filter.svg';
import Image from 'next/image';
import CurrencyButton from './currency-button';
import currencies from '../data/currency-category';
import ReviewButton from './review-button';
import RangeSliderComponent from './range-slider';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor={'#121212'}>
                <ModalHeader
                    fontWeight={'600'}
                    fontSize={'16px'}
                    textAlign={'center'}
                    color="primary.green.900"
                >
                    Filters
                </ModalHeader>
                <ModalCloseButton color={'white'} />
                <ModalBody padding={'0px'}>
                    <ModalHeader
                        padding={'1rem'}
                        fontWeight={'600'}
                        fontSize={'16px'}
                        color="white"
                    >
                        Filters
                    </ModalHeader>
                    <ModalHeader
                        padding={'1rem'}
                        fontWeight={'600'}
                        fontSize={'16px'}
                        color="white"
                    >
                        Price Range
                    </ModalHeader>

                    <Text
                        px={'1rem'}
                        mt="-0.5rem"
                        fontSize={'14px'}
                        color="secondary.davy.900"
                    >
                        Prices before fees and taxes
                    </Text>

                    <RangeSliderComponent />

                    <ModalHeader
                        px={'1rem'}
                        fontWeight={'600'}
                        fontSize={'16px'}
                        color="white"
                    >
                        Cryptocurrency
                    </ModalHeader>
                    <Text
                        px={'1rem'}
                        mt="-0.5rem"
                        fontSize={'14px'}
                        color="secondary.davy.900"
                    >
                        Pay with different cryptocurrencies
                    </Text>

                    <Flex p="1rem" mt="0.5rem" flexDirection={'row'} gap="12px">
                        {Object.keys(currencies).map((key) => (
                            <CurrencyButton
                                key={key}
                                currencyName={
                                    (currencies as { [key: string]: any })[key]
                                }
                            />
                        ))}
                    </Flex>
                    <ModalHeader
                        px={'1rem'}
                        fontWeight={'600'}
                        fontSize={'16px'}
                        color="white"
                    >
                        Ratings
                    </ModalHeader>
                    <Flex
                        mt="0.5rem"
                        px="1rem"
                        flexDirection={'row'}
                        wrap={'wrap'}
                        gap="12px"
                    >
                        <ReviewButton title={'All'} value={'All'} />
                        <ReviewButton title={'4 Stars'} value={'4'} />
                        <ReviewButton title={'3 Stars'} value={'3'} />
                        <ReviewButton title={'2 Stars'} value={'2'} />
                        <ReviewButton title={'1 Star'} value={'1'} />
                    </Flex>
                </ModalBody>

                <Divider mt="1.5rem" />

                <ModalFooter px={'1rem'} pt="1.4rem" pb="1.2rem">
                    <Button
                        fontSize={'16px'}
                        fontWeight={'400'}
                        justifyItems={'flex-start'}
                        color={'white'}
                        backgroundColor={'transparent'}
                        mr={3}
                        onClick={onClose}
                        mr="auto"
                    >
                        Clear All
                    </Button>
                    <Button
                        fontSize={'16px'}
                        fontWeight={'400'}
                        leftIcon={
                            <Image
                                style={{
                                    width: '16px',
                                    height: '16px',
                                    alignSelf: 'center',
                                }}
                                src={FilterIcon}
                                alt="mobile filter"
                            />
                        }
                        backgroundColor={'primary.indigo.900'}
                        width={'100%'}
                        maxW={'155px'}
                        variant="ghost"
                        color="white"
                        borderRadius={'full'}
                    >
                        Apply Filters
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default FilterModal;
