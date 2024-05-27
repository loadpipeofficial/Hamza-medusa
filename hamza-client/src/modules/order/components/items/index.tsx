import { LineItem, Region } from '@medusajs/medusa';
import { Table } from '@medusajs/ui';

import Divider from '@modules/common/components/divider';
import Item from '@modules/order/components/item';
import SkeletonLineItem from '@modules/skeletons/components/skeleton-line-item';
import Thumbnail from '@modules/products/components/thumbnail';

type ItemsProps = {
    items: any;
};

const Items = ({ items }: ItemsProps) => {
    console.log(`Order Items are ${JSON.stringify(items)}`);
    console.log(`Order Items are ${items}`);
    return (
        <div className="flex flex-col">
            <Divider className="!mb-0" />
            <Table>
                <Table.Body>
                    {Object.entries(items).map(([id, cartItems]) =>
                        cartItems.map((item) => (
                            <Table.Row key={item.id}>
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
