import { useMemo } from 'react';
import { Button } from '@medusajs/ui';

import Thumbnail from '@modules/products/components/thumbnail';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import { formatAmount } from '@lib/util/prices';
import { formatCryptoPrice } from '@lib/util/get-product-price';

// Update the type definitions to reflect the structure of the received order
type OrderDetails = {
    thumbnail: string;
    title: string;
    description: string;
};

type Order = {
    id: string;
    display_id: string;
    created_at: string;
    details: OrderDetails;
    paid_total: number;
    currency_code: string;
    unit_price: number;
    thumbnail: string;
    title: string;
    description: string;
    region: {
        id: string;
        name: string;
    };
};

type OrderCardProps = {
    order: Order;
};

const OrderCard = ({ order }: OrderCardProps) => {
    if (!order) {
        return <div>Loading...</div>; // Display loading message if order is undefined
    }
    // console.log(`Order Card information is: ${JSON.stringify(order)}`);
    const orderString = typeof order.currency_code;
    // console.log(
    //     `Order Unit Price ${order.unit_price} and Currency Code ${order.currency_code} ${orderString}`
    // );

    return (
        <div className="flex flex-col">
            <div className="flex items-center divide-x divide-gray-200 text-small-regular text-white">
                <span className="pr-2">
                    {new Date(order.created_at).toDateString()}
                </span>
                <span className="px-2">
                    {formatCryptoPrice(order.unit_price, order.currency_code)}{' '}
                    {order.currency_code}
                </span>
                <span className="pl-2">1 item</span>{' '}
                {/* Static '1 item' since there are no items array */}
            </div>
            <div className="my-4">
                <Thumbnail
                    thumbnail={order.thumbnail}
                    images={[]}
                    size={'small'}
                />
                <div className="text-small-regular text-white mt-2">
                    <span className="font-semibold">{order.title}</span>
                    <p>{order.description}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
