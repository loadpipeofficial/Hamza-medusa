import React from 'react';
import { Card, CardBody, Image, Text, Flex, Box } from '@chakra-ui/react';
import {
    TiStarOutline,
    TiStarFullOutline,
    TiStarHalfOutline,
} from 'react-icons/ti';

interface ProductCardProps {
    productName: string;
    productPrice: string;
    imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productName,
    productPrice,
    imageSrc,
}) => {
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
                    src={imageSrc}
                    alt={productName}
                    height="100%"
                    width="100%"
                />
            </Box>
            <CardBody display={'flex'} flexDirection={'column'}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    h="100%"
                    w="100%"
                >
                    <Flex mb="1">
                        <Text
                            fontWeight="500"
                            fontSize="1.30625rem"
                            lineHeight="25.29px"
                            noOfLines={2}
                        >
                            {productName}
                        </Text>
                        <Flex pl="1.5rem" mb="auto" ml="auto">
                            <TiStarFullOutline
                                style={{
                                    width: '1.16125rem',
                                    height: '1.16125rem',
                                }}
                            />
                            <Text
                                alignSelf={'center'}
                                fontWeight="500"
                                fontSize="13.93px"
                                lineHeight="16.86px"
                                pl="0.1rem"
                            >
                                4.97
                            </Text>
                        </Flex>
                    </Flex>

                    <Box mt="auto">
                        <Text
                            mr="auto"
                            fontWeight="700"
                            fontSize="27.86px"
                            lineHeight="33.72px"
                            mb="1"
                        >
                            {productPrice}
                        </Text>
                        <Flex align="center">
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
                    </Box>
                </Box>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
