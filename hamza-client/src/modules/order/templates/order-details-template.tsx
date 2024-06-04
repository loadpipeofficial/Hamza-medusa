'use client';

import { Order } from '@medusajs/medusa';
import { XMark } from '@medusajs/icons';
import React, { useEffect, useState } from 'react';

import Help from '@modules/order/components/help';
import Items from '@modules/order/components/items';
import OrderDetails from '@modules/order/components/order-details';
import OrderSummary from '@modules/order/components/order-summary';
// import OrderReview from '@modules/order/components/order-review';
import ShippingDetails from '@modules/order/components/shipping-details';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import axios from 'axios';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';

type OrderDetailsTemplateProps = {
    order: Order;
};

interface DetailedOrder extends Order {
    details?: any; // Further specify if you have the structure of the details
}

interface Item {
    id: string;
    created_at: string;
    updated_at: string;
    cart_id: string;
    order_id: string | null;
    swap_id: string | null;
    claim_order_id: string | null;
    original_item_id: string | null;
    order_edit_id: string | null;
    title: string;
    description: string;
    thumbnail: string;
    is_return: boolean;
    is_giftcard: boolean;
    should_merge: boolean;
    allow_discounts: boolean;
    has_shipping: boolean;
    unit_price: number;
    variant_id: string;
    quantity: number;
    fulfilled_quantity: number | null;
    returned_quantity: number | null;
    shipped_quantity: number | null;
    metadata: any;
    currency_code: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
    order,
}) => {
    //
    const [detailedOrders, setDetailedOrders] = useState<Item[]>([]);
    const customer_id = useCustomerAuthStore((state) => state.customer_id);
    // console.log('Orders: ', order.cart_id);
    // console.log(`Orders: ${JSON.stringify(order)}`);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'}/custom/order`,
                    {
                        cart_id: order.cart_id,
                    }
                );
                const updatedItems = data.order.map((item: Item) => ({
                    ...item,
                    order_id: order.id, // Append order_id to each item if cart_id matches
                    customer_id: customer_id,
                }));
                console.log('Data: ', updatedItems);
                setDetailedOrders(updatedItems);
            } catch (error) {
                console.error('Error fetching orders: ', error);
            }
        };

        fetchOrders();
    }, [order]);

    console.log('Detailed Orders: ', detailedOrders);

    const specificCart = detailedOrders.reduce((acc, item) => {
        // Check if the item's cart_id matches the order.cart_id
        if (item.cart_id === order.cart_id) {
            if (!acc[item.cart_id]) {
                acc[item.cart_id] = [];
            }
            acc[item.cart_id].push(item);
        }
        return acc;
    }, {});

    return (
        <div className="flex flex-col justify-center gap-y-4 ">
            <div className="flex gap-2 justify-between items-center">
                <h1 className="text-2xl-semi">Order details</h1>
                <LocalizedClientLink
                    href="/account/orders"
                    className="flex gap-2 items-center text-white hover:text-ui-fg-base"
                >
                    <XMark /> Back to overview
                </LocalizedClientLink>
            </div>
            <div className="flex flex-col gap-4 h-full bg-white w-full p-8">
                <OrderDetails order={order} showStatus />
                <Items items={specificCart} />
                <ShippingDetails order={order} />
                <OrderSummary order={order} />
                <Help />
            </div>
        </div>
    );
};

export default OrderDetailsTemplate;
