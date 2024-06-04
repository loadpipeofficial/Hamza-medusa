import { LineItem, Region } from '@medusajs/medusa';
import { Table } from '@medusajs/ui';

import Divider from '@modules/common/components/divider';
import Item from '@modules/order/components/item';
import SkeletonLineItem from '@modules/skeletons/components/skeleton-line-item';
import Thumbnail from '@modules/products/components/thumbnail';
import React, { useState } from 'react';
import { Button } from '@medusajs/ui';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import itemStore from '@store/review/review-store';
import axios from 'axios';

type ItemsProps = {
    items: any;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

const Items = ({ items }: ItemsProps) => {
    const [reviewExists, setReviewExists] = useState(false);
    const setItem = itemStore((state) => state.setItem);

    const handleItemClick = async (item) => {
        console.log(`Checking review existence for order: ${item?.order_id}`);
        try {
            const response = await axios.post(
                `http://localhost:9000/custom/review/verify`,
                {
                    order_id: item.order_id,
                }
            );
            setReviewExists(response.data); // Assuming response.data exists and is an object with a property 'exists'
            console.log(`response data ${response.data}`);
            if (response.data) {
                console.log('User has already reviewed');
            } else {
                console.log('User has not reviewed yet');
            }
        } catch (error) {
            alert('Failed to check review existence: ' + error.message);
        }
        setItem(item);
    };

    console.log(`Order Items are ${JSON.stringify(items)}`);
    return (
        <div className="flex flex-col">
            <Divider className="!mb-0" />
            <Table className="m-4">
                <Table.Body>
                    {Object.entries(items).map(([id, cartItems]) =>
                        cartItems.map((item) => (
                            <Table.Row key={item.id}>
                                <Button
                                    className="m-2"
                                    onClick={() => handleItemClick(item)}
                                >
                                    Review
                                </Button>

                                <Table.Cell>
                                    <div className="flex items-center">
                                        <p className="text-sm font-semibold">
                                            Item ID: {item.id}
                                        </p>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex items-center">
                                        <p className="text-sm font-semibold">
                                            Quantity: {item.quantity}
                                            {/* If you need item quantity, use {item.quantity} */}
                                        </p>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Thumbnail
                                        thumbnail={item.thumbnail}
                                        images={[]}
                                        size={65}
                                    />
                                    {item.title}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table>
        </div>
    );
};

export default Items;
