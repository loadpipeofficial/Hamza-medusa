'use client';
import { Box, Button, Text, Flex, Image } from '@chakra-ui/react';
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
                                        borderRadius={'50px'}
                                        onClick={openConnectModal}
                                        style={{
                                            backgroundColor: '#94D42A',
                                            outline: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Text
                                            className="font-semibold"
                                            fontFamily={'Sora'}
                                            color="black"
                                            fontSize={{
                                                base: '12px',
                                                md: '16px',
                                            }}
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
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};
