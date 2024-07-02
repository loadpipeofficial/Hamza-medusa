import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import useStorePage from '@store/store-page/store-page';
import { FaTshirt } from 'react-icons/fa';

interface CategoryButtonProps {
    categoryName: string;
    categoryType: string;
}

const CategoryButtons: React.FC<CategoryButtonProps> = ({
    categoryName,
    categoryType,
}) => {
    const { categorySelect, setCategorySelect, setCategoryTypeSelect } =
        useStorePage();

    return (
        <Flex
            flexShrink={0}
            onClick={() => {
                setCategorySelect(categoryName),
                    setCategoryTypeSelect(categoryType);
            }}
            borderColor={'#3E3E3E'}
            backgroundColor={
                categorySelect !== null && categorySelect === categoryName
                    ? 'white'
                    : 'black'
            }
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            borderWidth={'1px'}
            borderRadius={'49px'}
            height={{ base: '42px', md: '63px' }}
            cursor="pointer"
            style={{ padding: '10px 24px' }}
            color={
                categorySelect !== null && categorySelect === categoryName
                    ? 'black'
                    : 'white'
            }
            transition="background 0.1s ease-in-out, color 0.1s ease-in-out"
            _hover={{
                color: 'black',
                background: 'white',
            }}
        >
            <FaTshirt />
            <Text ml="10px" fontSize={{ base: '14px', md: '18px' }}>
                {categoryName}
            </Text>
        </Flex>
    );
};

export default CategoryButtons;
