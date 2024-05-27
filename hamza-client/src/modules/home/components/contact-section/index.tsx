import Email from '../../../../../public/images/smpt_email/email_image.png';
import {
    Box,
    FormControl,
    Flex,
    Input,
    Button,
    Heading,
    Text,
    VStack,
    // Image,
    Card,
    CardBody,
    CardFooter,
} from '@chakra-ui/react';
import Image from 'next/image';

const ContactSection = () => {
    return (
        <Box className="font-sora" bg="black" color="white" p={5}>
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow="hidden"
                variant="outline"
                bg="#2C272D"
                borderRadius="2xl"
                marginLeft={{ lg: 4 }}
                marginRight={{ lg: 4 }}
            >
                <VStack
                    spacing={5}
                    align="flex-start"
                    w={{ base: '100%', md: '60%' }}
                    p={6}
                >
                    <CardBody>
                        <Heading color="white" as="h2" size="xl" mb={4}>
                            Ready to embrace HAMZA?
                        </Heading>
                        <Text color="white" fontSize="lg" opacity="0.8" mb={2}>
                            Discover the Future of E-commerce
                        </Text>
                        <Text color="white" mb={4}>
                            Dive into the vibrant world of Blockchain. Discover
                            your next product today.
                        </Text>
                        <Flex flexDirection="column" alignItems="center">
                            <Flex mt="4">
                                <FormControl id="first-name" isRequired mr={3}>
                                    <Input
                                        color="white"
                                        borderColor="white"
                                        borderRadius="full"
                                        placeholder="First Name*"
                                    />
                                </FormControl>
                                <FormControl id="email" isRequired mb={3}>
                                    <Input
                                        borderColor="white"
                                        borderRadius="full"
                                        type="email"
                                        placeholder="E-Mail*"
                                    />
                                </FormControl>
                            </Flex>

                            <Flex width="100%" justifyContent="center" mt={3}>
                                <Button
                                    mx="2"
                                    size="lg"
                                    bg="#7B61FF"
                                    color="black"
                                    borderRadius="full"
                                >
                                    Subscribe
                                </Button>
                            </Flex>
                        </Flex>
                    </CardBody>
                </VStack>

                <Box
                    flexShrink={0}
                    w={{ base: '100%', md: '40%' }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        objectFit="cover"
                        width={650}
                        height={550}
                        src={Email}
                        alt="Inspirational"
                    />
                </Box>
            </Card>
        </Box>
    );
};

export default ContactSection;
