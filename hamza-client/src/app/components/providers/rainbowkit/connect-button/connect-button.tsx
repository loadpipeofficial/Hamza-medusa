'use client';
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
                                    <button
                                        onClick={openConnectModal}
                                        type="button"
                                        style={{
                                            padding: '5px 10px',
                                            border: '2px solid white',
                                            backgroundColor: 'transparent',
                                            color: 'white',
                                            cursor: 'pointer',
                                            borderRadius: '4px',
                                            fontWeight: 'bold',
                                            outline: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Connect Wallet
                                        </span>
                                    </button>
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
