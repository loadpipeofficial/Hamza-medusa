interface Currency {
    contract_address: string;
    precision: number;
}

const chainConfig: any = {
    11155111: {
        chain_name: 'sepolia',
        master_switch: {
            //address: '0x0Ac64d6d09bB3B7ab6999f9BE3b9f017220fb1e9',
            address: '0x74b7284836F753101bD683C3843e95813b381f18',
        },
        massmarket_payment: {
            address: '0x3d9DbbD22E4903274171ED3e94F674Bb52bCF015',
        },
    },
    11155420: {
        chain_name: 'op-sepolia',
        master_switch: {
            address: '0x4B36e6130b4931DCc5A64c4bca366790aAA068d1',
        },
        massmarket_payment: {
            address: '0x0',
        },
    },
    1: {
        chain_name: 'mainnet',
        master_switch: {
            address: '',
        },
        massmarket_payment: {
            address: '0x0',
        },
    },
};

const getCurrencyAddress = (currencyId: string, chainId: number = 1) =>
    chainConfig[chainId]
        ? chainConfig[chainId][currencyId]?.contract_address ?? ''
        : '';

const getMasterSwitchAddress = (chainId: number = 1) =>
    chainConfig[chainId]
        ? chainConfig[chainId]?.master_switch?.address
        : undefined;

const getMassmarketPaymentAddress = (chainId: number = 1) =>
    chainConfig[chainId]
        ? chainConfig[chainId]?.massmarket_payment?.address
        : undefined;

export { getMasterSwitchAddress, getMassmarketPaymentAddress };
