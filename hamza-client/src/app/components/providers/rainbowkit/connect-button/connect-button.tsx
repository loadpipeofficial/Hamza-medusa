'use client';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { formatAddress } from '@lib/util/format-address';

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
                    <div
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
                                    <Button
                                        h="2.5rem"
                                        fontSize={'.875rem'}
                                        borderRadius={'50px'}
                                        onClick={openConnectModal}
                                        style={{
                                            backgroundColor: '#94D42A',
                                            outline: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Text
                                            textStyle="h2"
                                            color="black"
                                            fontSize={'.875rem'}
                                        >
                                            Connect Wallet
                                        </Text>
                                    </Button>
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
                                <Flex flexDirection={'row'} gap="20px">
                                    <Box
                                        w="20px"
                                        h="20px"
                                        alignSelf={'center'}
                                        style={{
                                            background: chain.iconBackground,
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {chain.iconUrl && (
                                            <img
                                                alt={`${chain.name ?? 'Chain'} icon`}
                                                src={chain.iconUrl}
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                }}
                                            />
                                        )}
                                    </Box>
                                    <Button
                                        h="2.5rem"
                                        borderRadius={'50px'}
                                        backgroundColor={'#94D42A'}
                                        onClick={openAccountModal}
                                        style={{
                                            outline: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Text
                                            textStyle="h2"
                                            color="black"
                                            fontSize={'.875rem'}
                                        >
                                            {formatAddress(account.address)}
                                        </Text>
                                    </Button>
                                </Flex>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};
