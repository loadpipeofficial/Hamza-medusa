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
} from '@chakra-ui/react';
import React from 'react';
import FilterIcon from '../../../../public/images/categories/mobile-filter.svg';
import Image from 'next/image';
import CurrencyButton from './currency-button';
import currencies from '../data/currency-category';
interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent backgroundColor={'#121212'} padding={'0px'}>
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
                    <ModalHeader
                        padding={'1rem'}
                        fontWeight={'600'}
                        fontSize={'16px'}
                        color="white"
                    >
                        Cryptocurrency
                    </ModalHeader>
                    <Flex p="1rem" flexDirection={'row'} gap="16px">
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
                        padding={'1rem'}
                        fontWeight={'600'}
                        fontSize={'16px'}
                        color="white"
                    >
                        Ratings
                    </ModalHeader>
                </ModalBody>

                <ModalFooter padding={'1rem'}>
                    <Button
                        fontSize={'16px'}
                        fontWeight={'400'}
                        justifyItems={'flex-start'}
                        color={'white'}
                        backgroundColor={'red'}
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
