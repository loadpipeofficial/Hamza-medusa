import React from 'react';
import { Box, Text, Flex, Container } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

type VendorProps = {
    vendor: string;
};

const VendorBanner = (props: VendorProps) => {
    const router = useRouter();
    const { countryCode } = useParams();

    console.log(`vendor name is ${props.vendor}`);
    const navigateToVendor = () => {
        router.push(`/${countryCode}/vendor/${props.vendor}`);
    };

    return (
        <Flex
            backgroundColor={'#121212'}
            maxWidth="1280px"
            width="100%"
            height="165.78px"
            borderRadius={'16px'}
            p="2rem"
        >
            <Flex
                ml="auto"
                alignSelf="center"
                flexDirection={'column'}
                gap={'16px'}
            >
                <Flex
                    height={'47px'}
                    width={'190px'}
                    borderColor={'primary.indigo.900'}
                    borderWidth={'1px'}
                    borderRadius={'37px'}
                    justifyContent={'center'}
                    cursor={'pointer'}
                >
                    <Text alignSelf={'center'} color="primary.indigo.900">
                        Chat with them
                    </Text>
                </Flex>
                <Flex
                    height={'47px'}
                    width={'190px'}
                    borderColor={'transparent'}
                    backgroundColor={'primary.indigo.900'}
                    borderWidth={'1px'}
                    borderRadius={'37px'}
                    justifyContent={'center'}
                    cursor={'pointer'}
                >
                    <Text
                        onClick={navigateToVendor}
                        alignSelf={'center'}
                        color="white"
                    >
                        Visit Store
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default VendorBanner;
