import { clx } from '@medusajs/ui';
import { Flex, Container, Text, Box } from '@chakra-ui/react';

import { getCategoriesList, getCollectionsList } from '@lib/data';

import LocalizedClientLink from '@modules/common/components/localized-client-link';
import MedusaCTA from '../../components/medusa-cta';

const fetchCollections = async () => {
    const { collections } = await getCollectionsList();
    return collections;
};

const fetchCategories = async () => {
    const { product_categories } = await getCategoriesList();
    return product_categories;
};

export default async function Footer() {
    const productCollections = await fetchCollections().then(
        (collections) => collections
    );
    const productCategories = await fetchCategories().then(
        (categories) => categories
    );
    return (
        <Flex width="full" bgColor={'black'} justifyContent={'center'}>
            <Flex
                maxWidth={'1440px'}
                justifyContent={'space-between'}
                pt="4rem"
                pb="3rem"
                width={'100%'}
            >
                <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                    <Text className="text-base font-bold">
                        Processing and Shipping
                    </Text>
                    <Text className="text-base font-bold">
                        Our Copyrights Policy
                    </Text>
                    <Text className="text-base font-bold">
                        Our Return Policy
                    </Text>
                    <Text className="text-base font-bold">Catalog</Text>
                    <Text className="text-base font-bold">Articles</Text>
                    <Text className="text-base font-bold">Privacy Policy</Text>
                    <Text className="text-base font-bold">
                        Terms and Conditions
                    </Text>
                </Flex>

                <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                    <Text className="text-base font-bold">
                        Processing and Shipping
                    </Text>
                    <Text className="text-base font-bold">
                        Our Copyrights Policy
                    </Text>
                    <Text className="text-base font-bold">
                        Our Return Policy
                    </Text>
                    <Text className="text-base font-bold">Catalog</Text>
                    <Text className="text-base font-bold">Articles</Text>
                    <Text className="text-base font-bold">Privacy Policy</Text>
                    <Text className="text-base font-bold">
                        Terms and Conditions
                    </Text>
                </Flex>

                <Flex flexDir={'column'} color={'white'} gap={'8px'}>
                    <Text className="text-base font-bold">
                        Processing and Shipping
                    </Text>
                    <Text className="text-base font-bold">
                        Our Copyrights Policy
                    </Text>
                    <Text className="text-base font-bold">
                        Our Return Policy
                    </Text>
                    <Text className="text-base font-bold">Catalog</Text>
                    <Text className="text-base font-bold">Articles</Text>
                    <Text className="text-base font-bold">Privacy Policy</Text>
                    <Text className="text-base font-bold">
                        Terms and Conditions
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
