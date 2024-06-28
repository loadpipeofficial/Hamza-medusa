import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import useModalFilter from '@store/store-page/filter-modal';
import categoryIcons from '../../../data/category-icons';

interface CategoryButtonProps {
    categoryName: string;
    categoryType: 'clothes' | 'games' | 'gadgets';
}

const CategoryModalButton: React.FC<CategoryButtonProps> = ({
    categoryName,
    categoryType,
}) => {
    const {
        modalCategoryFilterSelect,
        setModalCategoryFilterSelect,
        setModalCategoryTypeFilterSelect,
    } = useModalFilter();

    return (
        <Flex>
            <Flex
                borderColor={'secondary.davy.900'}
                backgroundColor={
                    modalCategoryFilterSelect === categoryName
                        ? 'white'
                        : 'transparent'
                }
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                height={'42px'}
                cursor="pointer"
                color={
                    modalCategoryFilterSelect === categoryName
                        ? 'black'
                        : 'white'
                }
                padding="10px 24px"
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
                onClick={() => {
                    setModalCategoryFilterSelect(categoryName),
                        setModalCategoryTypeFilterSelect(categoryType);
                }}
            >
                <Image src={categoryIcons[categoryType]} alt={categoryName} />
                <Text ml="10px" fontSize={{ base: '14px', md: '16px' }}>
                    {categoryName}
                </Text>
            </Flex>
        </Flex>
    );
};

export default CategoryModalButton;
