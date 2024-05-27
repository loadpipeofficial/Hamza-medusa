'use client';

import { Box, Flex, Button, Text, useBreakpointValue } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import vr from '../../../../../public/images/hero/vr.png';
import { useState, useEffect } from 'react';
import { getCustomer } from '@lib/data';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { useConnectModal } from '@rainbow-me/rainbowkit';

const Hero = () => {
    // styling breakpoints
    // TODO: Add Tailwind config for multiple breakpoints eg;
    /**
     *
     * 320px — Extra small devices (very small mobile phones)
     * 480px — Small devices (older smartphones)
     * 768px — Tablets (portrait)
     * 992px — Tablets (landscape) and small desktops/laptops
     * 1200px — Medium desktops
     * 1440px and higher — Large desktops
     *
     * **/

    const [loggedIn, setLoggedIn] = useState<boolean>(true);
    const { openConnectModal } = useConnectModal();
    const { connector: activeConnector, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    //connects wallet if necessary
    const connectWallet = () => {
        console.log('isConnected:', isConnected);
        if (!isConnected) {
            if (openConnectModal) openConnectModal();
        }
    };

    useEffect(() => {
        getCustomer()
            .then((customer) => {
                setLoggedIn(customer?.has_account ? true : false);
            })
            .catch(() => {
                console.log('hero: customer not found');
            });
    }, []);

    return (
        <Flex className="font-sora" maxW="100%" bg="black" p={5}>
            <Box
                p={5}
                mx={12}
                borderRadius="xl"
                boxShadow="lg"
                bgGradient="linear(to-l, #53594A 70%, #2C272D 100%)" // This creates a gradient from right to left
                marginLeft={{ lg: 4 }}
                marginRight={{ lg: 4 }}
                flex="1"
                // bg="#2C272D"
                display="flex"
            >
                <Box
                    p={5}
                    m={6}
                    borderRadius="xl"
                    minHeight="600px"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="lg"
                    marginLeft={{ lg: 4 }}
                    marginRight={{ lg: 4 }}
                    flex="1"
                    bg="black"
                    position="relative" // Add this line
                >
                    <Flex>
                        <Box flex="1" m={12}>
                            <Text fontSize="5xl" color="white" textAlign="left">
                                Buy & Sell <br />
                                Products Using <br />
                                <Box as="span" fontSize="6xl" fontWeight="bold">
                                    Crypto
                                </Box>{' '}
                                as a <br />
                                Community
                            </Text>
                            <Text color="white" fontSize="2xl" m={2}>
                                By The
                                <Box as="span" fontWeight="bold">
                                    {' '}
                                    People{' '}
                                </Box>
                                <Box
                                    as="span"
                                    display="inline-flex"
                                    alignItems="center"
                                >
                                    <FaArrowRight
                                        className="ml-1 mr-2"
                                        fontSize="20px"
                                    />
                                </Box>
                                For The
                                <Box as="span" fontWeight="bold">
                                    {' '}
                                    People
                                </Box>
                                <br />
                                Using Blockchain Tech
                            </Text>
                            <Button
                                fontWeight="italic"
                                size="lg"
                                bg="transparent"
                                color="white"
                                borderRadius="xl"
                                onClick={connectWallet}
                                border="2px" // Sets the border width
                                borderColor="whiteAlpha.600"
                            >
                                Connect wallet <Box as="span" m={2} />{' '}
                                <FaArrowRight />
                            </Button>
                        </Box>
                        {/*<Box flex="1" className="hidden lg:flex">*/}
                        {/*    <Image*/}
                        {/*        width={307}*/}
                        {/*        height={479}*/}
                        {/*        src={vr} // Adjust path accordingly*/}
                        {/*        alt="Image description"*/}
                        {/*    />*/}
                        {/*</Box>*/}
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default Hero;
