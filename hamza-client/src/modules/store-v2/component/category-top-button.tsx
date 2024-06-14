import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import useStorePage from '@store/store-page/store-page';
import categoryIcons from '../data/category-icons';
import Image from 'next/image';

interface CategoryButtonProps {
    categoryName: string;
    categoryType: 'clothes' | 'games' | 'gadgets';
}

const CategoryTopButton: React.FC<CategoryButtonProps> = ({
    categoryName,
    categoryType,
}) => {
    const { categorySelect, setCategorySelect } = useStorePage();

    const handleSelectItem = (itemName: string) => {
        setCategorySelect(itemName);
    };

    return (
        <Flex>
            <Flex
                onClick={() => handleSelectItem(categoryName)}
                borderColor={'transparent'}
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
                height={'63px'}
                cursor="pointer"
                style={{ padding: '10px 24px' }}
                _hover={{
                    background: 'white',
                }}
            >
                <Image src={categoryIcons[categoryType]} alt={categoryName} />
                <Text
                    ml="10px"
                    fontSize={'18px'}
                    color={
                        categorySelect !== null &&
                        categorySelect === categoryName
                            ? 'black'
                            : 'white'
                    }
                    _hover={{
                        color: 'black',
                    }}
                >
                    {categoryName}
                </Text>
            </Flex>
        </Flex>
    );
};

export default CategoryTopButton;
