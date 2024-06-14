import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import useStorePage from '@store/store-page/store-page';

const CategoryTopButton = (props: any) => {
    const { categorySelect, setCategorySelect } = useStorePage();

    const handleSelectItem = (itemName: string) => {
        setCategorySelect(itemName);
    };

    return (
        <Flex>
            <Flex
                onClick={() => handleSelectItem(props.name)}
                borderColor={'transparent'}
                backgroundColor={
                    categorySelect !== null && categorySelect === props.name
                        ? 'white'
                        : 'black'
                }
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                cursor="pointer"
                style={{ padding: '10px 24px' }}
                _hover={{
                    background: 'white',
                }}
            >
                {/* <Text marginRight={'8px'}>icon</Text> */}
                <Text
                    color={
                        categorySelect !== null && categorySelect === props.name
                            ? 'black'
                            : 'white'
                    }
                    _hover={{
                        color: 'black',
                    }}
                >
                    {props.name}
                </Text>
            </Flex>
        </Flex>
    );
};

export default CategoryTopButton;
