'use client';
import { Box, Button, Text, Flex, Image } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { formatAddress } from '@lib/util/format-address';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

export const WalletConnectButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Ensure the component is ready and not in a loading state
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    authenticationStatus === 'authenticated';

                return (
                    <Flex
                        width={'100%'}
                        height={'100%'}
                        {...(!ready && {
                            'aria-hidden': true,
                            style: {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Flex
                                        width={'100%'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        gap={'8px'}
                                        backgroundColor={'primary.green.900'}
                                        onClick={openConnectModal}
                                    >
                                        <Flex alignSelf={'center'}>
                                            <MdOutlineAccountBalanceWallet
                                                size={30}
                                            />
                                        </Flex>
                                        <Text
                                            alignSelf={'center'}
                                            fontWeight={'600'}
                                            fontSize={'20px'}
                                        >
                                            Connect Wallet
                                        </Text>
                                    </Flex>
                                );
                            }
                            if (chain && chain.unsupported) {
                                return (
                                    <button
                                        onClick={openChainModal}
                                        type="button"
                                    ></button>
                                );
                            }
                            return (
                                <Flex flexDirection={'row'}>
                                    <Box
                                        mr="0.5rem"
                                        w="2.5rem"
                                        h="2.5rem"
                                        display={'flex'}
                                        justifyContent={'center'}
                                        borderRadius={'50%'}
                                        alignSelf={'center'}
                                        backgroundColor={'#2C272D'}
                                    >
                                        {chain.iconUrl && (
                                            <Image
                                                alignSelf={'center'}
                                                alt={`${chain.name ?? 'Chain'} icon`}
                                                src={chain.iconUrl}
                                            />
                                        )}
                                    </Box>
                                    <Button
                                        h="2.5rem"
                                        borderRadius={'50px'}
                                        backgroundColor={'#2C272D'}
                                        onClick={openAccountModal}
                                        style={{
                                            outline: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Text
                                            textStyle="h2"
                                            color="white"
                                            fontSize={{
                                                base: '12px',
                                                md: '20px',
                                            }}
                                        >
                                            {formatAddress(account.address)}
                                        </Text>
                                    </Button>
                                </Flex>
                            );
                        })()}
                    </Flex>
                );
            }}
        </ConnectButton.Custom>
    );
};
