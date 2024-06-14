import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import useSideFilter from '@store/store-page/side-filter';

const CategoryButton = (props: any) => {
    const { categoryFilterSelect, setCategoryFilterSelect } = useSideFilter();
    return (
        <Flex>
            <Flex
                borderColor={'secondary.davy.900'}
                backgroundColor={
                    categoryFilterSelect === props.name
                        ? 'white'
                        : 'transparent'
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
                onClick={() => setCategoryFilterSelect(props.name)}
            >
                {/* <Text marginRight={'8px'}>icon</Text> */}
                <Text
                    color={
                        categoryFilterSelect === props.name ? 'black' : 'white'
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

export default CategoryButton;
