import React from 'react';
import { Card, CardBody, Image, Text, Flex, Box } from '@chakra-ui/react';
import {
    TiStarOutline,
    TiStarFullOutline,
    TiStarHalfOutline,
} from 'react-icons/ti';

const ProductCard = (props: any) => {
    return (
        <Card
            w={['100%', '100%', '235px']}
            h="380px"
            bg="white"
            boxShadow="md"
            border="1px solid black"
            borderRadius="0.725rem"
            overflow="hidden"
        >
            <Box
                h="224px"
                bg="gray.200"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src={props.imageSrc}
                    alt={props.productName}
                    height="100%"
                    width="100%"
                />
            </Box>
            <CardBody w="full" display="flex" flexDirection="column" gap="16px">
                <Flex justify="space-between" align="center">
                    <Text
                        fontWeight="500"
                        fontSize="20.9px"
                        lineHeight="25.29px"
                    >
                        {props.productName}
                    </Text>
                    <Text
                        fontWeight="500"
                        fontSize="13.93px"
                        lineHeight="16.86px"
                        mb="auto"
                    >
                        4.97
                    </Text>
                </Flex>
                <Text fontWeight="700" fontSize="27.86px" lineHeight="33.72px">
                    {props.productPrice}
                </Text>

                <Flex align="center" mb="4">
                    <Text
                        fontWeight="400"
                        fontSize="14px"
                        lineHeight="16.94px"
                        mr="2"
                    >
                        Or pay with
                    </Text>
                    <Flex>
                        <Image
                            src="/path-to-payment-methods-image.png"
                            alt="btc"
                            boxSize="24px"
                            mr="2"
                        />
                        <Image
                            src="/path-to-payment-methods-image.png"
                            alt="btc"
                            boxSize="24px"
                        />
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
