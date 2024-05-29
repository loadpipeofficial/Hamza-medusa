'use client';
import {
    PricedProduct,
    PricedVariant,
} from '@medusajs/medusa/dist/types/pricing';
import { clx } from '@medusajs/ui';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    formatCryptoPrice,
    getProductPrice,
} from '@lib/util/get-product-price';
import { RegionInfo } from 'types/global';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

export default function ProductPrice({
    product,
    variant,
    region,
}: {
    product: PricedProduct;
    variant?: PricedVariant;
    region: RegionInfo;
}) {
    const { preferred_currency_code, status } = useCustomerAuthStore();
    const selectedPrices = variant
        ? variant.prices
        : product.variants[0].prices;
    const [averageRating, setAverageRating] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    let preferredPrice =
        status == 'authenticated' &&
        preferred_currency_code &&
        selectedPrices.find((a) => a.currency_code == preferred_currency_code);

    if (!selectedPrices) {
        return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />;
    }

    console.log(`Product is ${product.id}`);
    useEffect(() => {
        const fetchReviewCount = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/review/count`,
                    {
                        product_id: product.id,
                    },
                    { headers: { 'Content-Type': 'application/json' } }
                );
                console.log(`response.data.count is ${response.data}`);
                setReviewCount(response.data); // Assuming the response contains the count directly
            } catch (error) {
                console.error('Failed to fetch review count:', error);
            }
        };

        const fetchAverageRating = async () => {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/custom/review/average`,
                    {
                        product_id: product.id,
                    },
                    { headers: { 'Content-Type': 'application/json' } }
                );
                console.log(`response.data.average is ${response.data}`);
                setAverageRating(response.data); // Assuming the response contains the average directly
            } catch (error) {
                console.error('Failed to fetch average rating:', error);
            }
        };

        fetchReviewCount();
        fetchAverageRating();
    }, [product.id]);

    return (
        <div className="flex flex-col space-y-1 text-ui-fg-base text-white">
            <div>
                <h3>Product Reviews {reviewCount}</h3>
                <p className="text-white">Average Rating: {averageRating}</p>
            </div>
            {preferredPrice ? (
                <span className={clx('text-xl-semi')}>
                    {formatCryptoPrice(
                        preferredPrice.amount,
                        preferredPrice.currency_code
                    )}{' '}
                    {preferredPrice.currency_code.toUpperCase()}
                </span>
            ) : (
                <>
                    {selectedPrices.map((price) => {
                        return (
                            <span
                                key={price.currency_code}
                                className={clx('text-xl-semi')}
                            >
                                {formatCryptoPrice(
                                    price.amount,
                                    price.currency_code
                                )}{' '}
                                {price.currency_code.toUpperCase()}
                            </span>
                        );
                    })}
                </>
            )}
        </div>
    );
}
