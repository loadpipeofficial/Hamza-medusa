import React from 'react';
import { Text, Flex, Divider, Button } from '@chakra-ui/react';

const CurrencyButton = (props: any) => {
    return (
        <Flex>
            <Flex
                borderColor={'secondary.davy.900'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                style={{ padding: '10px 24px' }}
            >
                <Text marginRight={'8px'}>icon</Text>
                <Text>{props.name}</Text>
            </Flex>
        </Flex>
    );
};

export default CurrencyButton;
