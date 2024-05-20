'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Order } from '@medusajs/medusa';
import { Button } from '@medusajs/ui';
import OrderCard from '../order-card';
import LocalizedClientLink from '@modules/common/components/localized-client-link';

// Define a type that extends the Order type with any additional data
interface DetailedOrder extends Order {
    details?: any; // Further specify if you have the structure of the details
}

const OrderOverview = ({ orders }: { orders: Order[] }) => {
    // Initialize state with the correct type
    const [detailedOrders, setDetailedOrders] = useState<DetailedOrder[]>([]);
    console.log('Orders: ', orders);

    // lets make an axios call to http://localhost:9000/custom/order
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.post(
                    'http://localhost:9000/custom/order',
                    {
                        cart_id: orders[0].cart_id,
                    }
                );
                console.log('Data: ', data);
                setDetailedOrders(data.order);
            } catch (error) {
                console.error('Error fetching orders: ', error);
            }
        };

        fetchOrders();
    }, [orders]);

    const groupedByCartId = detailedOrders.reduce((acc, item) => {
        if (!acc[item.cart_id]) {
            acc[item.cart_id] = [];
        }
        acc[item.cart_id].push(item);
        return acc;
    }, {});

    console.log('Grouped Orders: ', groupedByCartId);

    if (Object.keys(groupedByCartId).length > 0) {
        console.log('Detailed Orders:', groupedByCartId);

        return (
            <div className="flex flex-col gap-y-8 w-full bg-black text-white p-8">
                {Object.entries(groupedByCartId).map(
                    ([cartId, items], index) => (
                        <div
                            key={cartId}
                            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
                        >
                            <div className="p-4 bg-gray-700">
                                Order {orders[index] ? orders[index].id : 'N/A'}{' '}
                                - Total Items: {items.length}
                            </div>
                            {items.map((item) => (
                                <OrderCard key={item.id} order={item} />
                            ))}
                            <div className="flex justify-end">
                                <LocalizedClientLink
                                    href={`/account/orders/details/${orders[index] ? orders[index].id : '#'}`}
                                    passHref
                                >
                                    <Button variant="secondary">
                                        See details
                                    </Button>
                                </LocalizedClientLink>
                            </div>
                        </div>
                    )
                )}
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-center gap-y-4 bg-black text-white p-8">
            <h2 className="text-large-semi">Nothing to see here</h2>
            <p className="text-base-regular">
                You don't have any orders yet, let us change that {':)'}
            </p>
            <div className="mt-4">
                <LocalizedClientLink href="/" passHref>
                    <Button>Continue shopping</Button>
                </LocalizedClientLink>
            </div>
        </div>
    );
};

export default OrderOverview;
