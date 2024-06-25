'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Image,
    Text,
    Stack,
    Link,
    SimpleGrid,
    Heading,
} from '@chakra-ui/react';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import Thumbnail from '@modules/products/components/thumbnail';

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

interface Product {
    store_id: string;
    massmarket_prod_id: string;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    title: string;
    subtitle: string | null;
    description: string;
    handle: string;
    is_giftcard: boolean;
    status: string;
    thumbnail: string;
    weight: number;
    length: number | null;
    height: number | null;
    width: number | null;
    hs_code: string | null;
    origin_country: string | null;
    mid_code: string | null;
    material: string | null;
    collection_id: string | null;
    type_id: string | null;
    discountable: boolean;
    external_id: string | null;
    metadata: Record<string, any> | null;
}

const Summary: React.FC<{ cart_id: string }> = ({ cart_id }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/order/complete-template`,
                    {
                        cart_id: cart_id,
                    }
                );
                // Assuming the response contains the products array in `response.data.products`
                const fetchedProducts: Product[] = response.data.cart || [];
                console.log(`Fetched products: ${JSON.stringify(response)}`);
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]); // Ensure products is always an array
            }
        };

        fetchProducts();
    }, [cart_id]);

    return (
        <div className="flex flex-col">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col mb-8 p-6 border border-gray-200 rounded-lg"
                >
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">{product.title}</h2>
                        <p className="mt-2">{product.description}</p>
                    </div>
                    <span className="pr-2">
                        {new Date(product.created_at).toDateString()}
                    </span>
                    <span className="pr-2">store_id: {product.store_id}</span>
                    <LocalizedClientLink href={`/products/${product.handle}`}>
                        <Thumbnail
                            thumbnail={product.thumbnail}
                            images={[]}
                            size={'small'}
                        />
                    </LocalizedClientLink>
                </div>
            ))}
        </div>
    );
};

export default Summary;
