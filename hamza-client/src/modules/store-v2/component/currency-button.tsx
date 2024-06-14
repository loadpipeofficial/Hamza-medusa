import React from 'react';
import Image from 'next/image';
import { Text, Flex } from '@chakra-ui/react';
import ETH from '../../../../public/images/currencies/eth-icon.svg';
import USDC from '../../../../public/images/currencies/usdc-icon.svg';
import USDT from '../../../../public/images/currencies/usdt-icon.svg';
import useSideFilter from '@store/store-page/side-filter';

interface CurrencyButtonProps {
    currencyName: 'ETH' | 'USDC' | 'USDT';
}

const CurrencyButton: React.FC<CurrencyButtonProps> = ({ currencyName }) => {
    const { currencyFilterSelect, setCurrencyFilterSelect } = useSideFilter();

    const currencyIcons: {
        [key in CurrencyButtonProps['currencyName']]: string;
    } = {
        ETH: ETH,
        USDC: USDC,
        USDT: USDT,
    };

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
                borderWidth={'1px'}
                borderRadius={'49px'}
                cursor="pointer"
                color={
                    currencyFilterSelect === currencyName ? 'black' : 'white'
                }
                style={{ padding: '10px 24px' }}
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
                onClick={() => setCurrencyFilterSelect(currencyName)}
            >
                <Image src={currencyIcons[currencyName]} alt={currencyName} />
                <Text ml="1rem">{currencyName}</Text>
            </Flex>
        </Flex>
    );
};

export default CurrencyButton;
