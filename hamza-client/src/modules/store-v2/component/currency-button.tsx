import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Flex, Divider, Button } from '@chakra-ui/react';
import EthIcon from '../../../../public/images/currencies/eth-icon.svg';
import USDCIcon from '../../../../public/images/currencies/usdc-icon.svg';
import USDTIcon from '../../../../public/images/currencies/usdt-icon.svg';
import useStorePage from '@store/store-page/store-page';
import useSideFilter from '@store/store-page/side-filter';

const CurrencyButton = (props: any) => {
    const [currency, setCurrency] = useState(EthIcon);
    const [currencyAlt, setCurrencyAlt] = useState('Ethereum');
    const { currencyFilterSelect, setCurrencyFilterSelect } = useSideFilter();

    useEffect(() => {
        switch (props.name) {
            case 'ETH':
                setCurrency(EthIcon);
                setCurrencyAlt('Ethereum');
                break;
            case 'USDC':
                setCurrency(USDCIcon);
                setCurrencyAlt('USD Coin');
                break;
            case 'USDT':
                setCurrency(USDTIcon);
                setCurrencyAlt('Tether');
                break;
            default:
                setCurrency(EthIcon);
                setCurrencyAlt('Ethereum');
        }
    }, [props.name]);
    return (
        <Flex>
            <Flex
                borderColor={'secondary.davy.900'}
                backgroundColor={
                    currencyFilterSelect === props.name
                        ? 'white'
                        : 'transparent'
                }
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                borderWidth={'1px'}
                borderRadius={'49px'}
                cursor="pointer"
                color={currencyFilterSelect === props.name ? 'black' : 'white'}
                style={{ padding: '10px 24px' }}
                _hover={{
                    background: 'white',
                    color: 'black',
                }}
                onClick={() => setCurrencyFilterSelect(props.name)}
            >
                <Image src={currency} alt={currencyAlt} />
                <Text ml="1rem">{props.name}</Text>
            </Flex>
        </Flex>
    );
};

export default CurrencyButton;
