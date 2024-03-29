'use client'

import { Box, Flex, Button, Text } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import vr from '../../../../../public/hero/vr.png'
import headphones from '../../../../../public/hero/hero_5.png'
import balloons from '../../../../../public/hero/hero_10.png'
import swiggle from '../../../../../public/hero/hero_9.png'
import twizzler from '../../../../../public/hero/hero_8.png'
import watch from '../../../../../public/hero/hero_7.png'
import coin_1 from '../../../../../public/hero/hero_6.png'
import coin_2 from '../../../../../public/hero/hero_4.png'
import coin_3 from '../../../../../public/hero/hero_3.png'
import coin_4 from '../../../../../public/hero/hero_2.png'
import coin_5 from '../../../../../public/hero/coin_5.png'
import coin_6 from '../../../../../public/hero/coin_6.png'

import { useState, useEffect } from 'react'
import { getCustomer } from '@lib/data'
import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Hero = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(true)

    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    useEffect(() => {
        getCustomer()
            .then((customer) => {
                setLoggedIn(customer?.has_account ? true : false)
            })
            .catch(() => {
                console.log('hero: customer not found')
            })
    }, [])

    return (
        <Flex
            className="font-sora"
            maxW="100%"
            bg="black"
            p={5}
            justifyContent="center"
            alignItems="center"
        >
            <Box
                p={5}
                mx={12}
                borderRadius="2xl"
                boxShadow="lg"
                marginLeft={{ lg: 4 }}
                marginRight={{ lg: 4 }}
                flex="1"
                width="70%"
                bg="#2C272D"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    p={5}
                    m={6}
                    borderRadius="2xl"
                    maxWidth="1400px"
                    height="600px"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="lg"
                    marginLeft={{ lg: 4 }}
                    marginRight={{ lg: 4 }}
                    flex="1"
                    bg="black"
                    position="relative" // Add this line
                >
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
                            borderRadius="full"
                            onClick={connect}
                            border="2px" // Sets the border width
                            borderColor="whiteAlpha.600"
                        >
                            Connect wallet <Box as="span" m={2} />{' '}
                            <FaArrowRight />
                        </Button>
                    </Box>
                    <Box flex="1" className="hidden md:block">
                        <Box
                            position="absolute"
                            top={0}
                            right={0}
                            overflow="hidden"
                        >
                            <Image
                                width={368} // Set the width
                                height={400} // Set the height
                                src={balloons.src}
                                alt="Image Balloons"
                            />
                        </Box>
                        <Box
                            zIndex={2}
                            position="absolute"
                            top={70}
                            right={340}
                            overflow="hidden"
                        >
                            <Image
                                width={307}
                                height={479}
                                src={vr.src}
                                alt="Image description"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            zIndex={1}
                            top={300}
                            right={160}
                            overflow="hidden"
                        >
                            <Image
                                width={211}
                                height={256}
                                src={headphones.src}
                                alt="Image description"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            zIndex={1}
                            top={180}
                            right={230}
                            overflow="hidden"
                        >
                            <Image
                                width={80}
                                height={80}
                                src={coin_3.src}
                                alt="Image description"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            zIndex={1}
                            top={250}
                            right={200}
                            overflow="hidden"
                        >
                            <Image
                                width={80}
                                height={80}
                                src={coin_2.src}
                                alt="Image description"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            zIndex={1}
                            top={55}
                            right={275}
                            overflow="hidden"
                        >
                            <Image
                                width={120}
                                height={120}
                                src={coin_4.src}
                                alt="Image description"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            top={100}
                            right={570}
                            zIndex={1}
                            overflow="hidden"
                        >
                            <Image
                                width={159} // Set the width
                                height={167} // Set the height
                                src={swiggle.src}
                                alt="Image Balloons"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            top={0}
                            right={580}
                            zIndex={2}
                            overflow="hidden"
                        >
                            <Image
                                width={160} // Set the width
                                height={160} // Set the height
                                src={coin_5.src}
                                alt="Image Balloons"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            top={395}
                            right={520}
                            zIndex={1}
                            overflow="hidden"
                        >
                            <Image
                                width={201} // Set the width
                                height={255} // Set the height
                                src={twizzler.src}
                                alt="Image Balloons"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            top={375}
                            right={690}
                            zIndex={1}
                            overflow="hidden"
                        >
                            <Image
                                width={218} // Set the width
                                height={218} // Set the height
                                src={coin_1.src}
                                alt="Image Balloons"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            top={280}
                            right={670}
                            overflow="hidden"
                        >
                            <Image
                                width={86} // Set the width
                                height={118} // Set the height
                                src={watch.src}
                                alt="Image Balloons"
                            />
                        </Box>
                        <Box
                            position="absolute"
                            top={200}
                            right={790}
                            overflow="hidden"
                        >
                            <Image
                                width={71} // Set the width
                                height={70} // Set the height
                                src={coin_6.src}
                                alt="Image Balloons"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Hero
