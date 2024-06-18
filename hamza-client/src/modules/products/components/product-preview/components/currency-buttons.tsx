import React from 'react';
import Image from 'next/image';
import { Text, Flex } from '@chakra-ui/react';
import currencyIcons from '../../../../../../public/images/currencies/crypto-currencies';
import useSideFilter from '@store/store-page/side-filter';

interface CurrencyButtonPreviewProps {
    currencyName: 'ETH' | 'USDC' | 'USDT';
}

const CurrencyButtonPreview: React.FC<CurrencyButtonPreviewProps> = ({
    currencyName,
}) => {
    const { currencyFilterSelect, setCurrencyFilterSelect } = useSideFilter();

    return (
        <Flex>
            <Flex
                borderColor={'secondary.davy.900'}
                backgroundColor={
                    currencyFilterSelect === currencyName
                        ? 'white'
                        : 'transparent'
                }
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                cursor="pointer"
                color={
                    currencyFilterSelect === currencyName ? 'black' : 'white'
                }
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
                onClick={() => setCurrencyFilterSelect(currencyName)}
            >
                <Image src={currencyIcons[currencyName]} alt={currencyName} />
            </Flex>
        </Flex>
    );
};

export default CurrencyButtonPreview;
