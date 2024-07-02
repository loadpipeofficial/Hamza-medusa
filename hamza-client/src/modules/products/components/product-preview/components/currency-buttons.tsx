import React from 'react';
import Image from 'next/image';
import { Text, Flex } from '@chakra-ui/react';
import currencyIcons from '../../../../../../public/images/currencies/crypto-currencies';
import useSideFilter from '@store/store-page/side-filter';

interface CurrencyButtonPreviewProps {
    currencyName: 'ETH' | 'USDC' | 'USDT';
    width: string;
    height: string;
}

const CurrencyButtonPreview: React.FC<CurrencyButtonPreviewProps> = ({
    currencyName,
    width,
    height,
}) => {
    const { currencyFilterSelect, setCurrencyFilterSelect } = useSideFilter();

    return (
        <Flex>
            <Flex
                borderColor={'secondary.davy.900'}
                backgroundColor={'transparent'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
            >
                <Image
                    style={{ width: width, height: height }}
                    src={currencyIcons[currencyName]}
                    alt={currencyName}
                />
            </Flex>
        </Flex>
    );
};

export default CurrencyButtonPreview;
