import {
    Box,
    Flex,
    Grid,
    GridItem,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';
import useProductPreview from '@store/product-preview/product-preview';
import React, { useEffect, useState } from 'react';

const PreviewGallery = () => {
    const { productData } = useProductPreview();
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (productData !== null) {
            setImages(productData?.images || []);
        }
    }, [productData]);

    const gridTemplate = useBreakpointValue(
        {
            base: '1fr', // On mobile, stack vertically
            md: '2fr 1fr', // On medium screens and up, use 2 columns
        },
        {
            fallback: 'md',
        }
    );

    //TODO: If each product needs 5 images how will we handle blank images?
    return (
        <Flex maxWidth={'1280px'} width={'100%'} flexDirection={'column'}>
            <Grid templateColumns={gridTemplate} gap={4}>
                <GridItem>
                    <Box
                        backgroundColor={'white'}
                        height={{ sm: '312.22px', md: '504.11px' }}
                        maxHeight="504.11px"
                        maxW={'736.04px'}
                        minW={'352.65px'}
                        overflow="hidden"
                        borderLeftRadius={{ base: 'none', md: '16px' }}
                        borderRadius={{ base: '12px' }}
                    >
                        {images.length > 0 && (
                            <Image
                                src={(images[0] as any).url}
                                alt="Left Image"
                                width="100%"
                                height="100%"
                                objectFit="cover"
                            />
                        )}
                    </Box>
                </GridItem>
                <GridItem>
                    <Grid
                        minW={'375px'}
                        templateColumns={{
                            base: 'repeat(4, 1fr)',
                            md: '1fr 1fr',
                        }}
                        gap={3.5}
                    >
                        <GridItem>
                            <Box
                                backgroundColor={'white'}
                                maxWidth="257.4px"
                                width={{ base: '80px', md: '257.4px' }}
                                height={{ base: '80px', md: '245.18px' }}
                                borderRadius={{ base: '12px', md: '0px' }}
                            >
                                {images.length > 0 && (
                                    <Image
                                        // src="path/to/your/image2.jpg"
                                        src={images[0].url}
                                        alt="Left Image"
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                )}
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box
                                borderTopRightRadius={'16px'}
                                backgroundColor={'white'}
                                width={{ base: '80px', md: '257.4px' }}
                                height={{ base: '80px', md: '245.18px' }}
                            >
                                {images.length > 0 && (
                                    <Image
                                        // src="path/to/your/image2.jpg"
                                        src={images[0].url}
                                        alt="Left Image"
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                )}
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box
                                backgroundColor={'white'}
                                width={{ base: '80px', md: '257.4px' }}
                                height={{ base: '80px', md: '245.18px' }}
                            >
                                {images.length > 0 && (
                                    <Image
                                        // src="path/to/your/image2.jpg"
                                        src={images[0].url}
                                        alt="Left Image"
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                )}
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box
                                borderBottomRightRadius={'16px'}
                                backgroundColor={'white'}
                                width={{ base: '80px', md: '257.4px' }}
                                height={{ base: '80px', md: '245.18px' }}
                            >
                                {images.length > 0 && (
                                    <Image
                                        // src="path/to/your/image2.jpg"
                                        src={images[0].url}
                                        alt="Left Image"
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                )}
                            </Box>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default PreviewGallery;
