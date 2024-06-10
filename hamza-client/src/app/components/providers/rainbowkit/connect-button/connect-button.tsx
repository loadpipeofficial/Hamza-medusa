'use client';
import { Button } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
                                        h="50px"
                                        borderRadius={'50px'}
                                        onClick={openConnectModal}
                                        style={{
                                            backgroundColor: '#94D42A',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            outline: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: 'black',
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Connect Wallet
                                        </span>
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
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }}
                                >
                                    <button
                                        onClick={openAccountModal}
                                        type="button"
                                        style={{
                                            background: 'none',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <div
                                            style={{
                                                background:
                                                    chain.iconBackground,
                                                width: 20, // Adjust the size as needed
                                                height: 20,
                                                borderRadius: '50%', // Makes it circular
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
                                        </div>
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};
