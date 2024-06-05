import React from 'react';
import ProductCard from './components/product-card';
import { Box, SimpleGrid } from '@chakra-ui/react';
import products from './data/data';

const ProductCardGroup = () => {
    //TODO: Make product card clickable to product preview
    //Will we add buy button / cart here?
    //Hovering over it could reveal a buy or cart button?
    return (
        <Box my="8" p="8">
            <SimpleGrid
                columns={[1, 2, 3, 4, 5]}
                spacing="1.25rem"
                rowGap="2.5rem"
                placeItems="center"
            >
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productName={product.productName}
                        productPrice={product.productPrice}
                        imageSrc={product.imageSrc}
                        hasDiscount={product.hasDiscount}
                        discountValue={product.discountValue}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ProductCardGroup;
