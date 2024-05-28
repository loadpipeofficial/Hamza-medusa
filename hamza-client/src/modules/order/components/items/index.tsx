import { LineItem, Region } from '@medusajs/medusa';
import { Table } from '@medusajs/ui';

import Divider from '@modules/common/components/divider';
import Item from '@modules/order/components/item';
import SkeletonLineItem from '@modules/skeletons/components/skeleton-line-item';
import Thumbnail from '@modules/products/components/thumbnail';
import React from 'react';
import { Button } from '@medusajs/ui';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import { XMark } from '@medusajs/icons';

type ItemsProps = {
    items: any;
};

const Items = ({ items }: ItemsProps) => {
    console.log(`Order Items are ${JSON.stringify(items)}`);
    console.log(`Order Items are ${items}`);
    return (
        <div className="flex flex-col">
            <Divider className="!mb-0" />
            <Table className="m-4">
                <Table.Body>
                    {Object.entries(items).map(([id, cartItems]) =>
                        cartItems.map((item) => (
                            <Table.Row key={item.id}>
                                <LocalizedClientLink
                                    href={`/account/reviews/${item.id}`}
                                    className="flex gap-2 items-center text-white hover:text-ui-fg-base"
                                >
                                    <Button className="m-2">Review</Button>
                                </LocalizedClientLink>

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
