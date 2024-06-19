import moment from 'moment';
import { Order } from 'src/models/order';

export default function ordersDataParser(orders: Order[]) {
    let parsedData = {};
    orders.forEach((order) => {
        if (parsedData[order.store_id]) {
            parsedData[order.store_id].orders.push({
                orderId: order.id,
                items: order.cart.items.map((a) => {
                    return {
                        thumbnail: a.thumbnail,
                        title: a.title,
                        quantity: a.quantity,
                        unit_price: a.unit_price,
                    };
                }),
                orderDate: moment(order.created_at).format(
                    'MMMM Do YYYY, h:mm:ss a'
                ),
                orderAmount: order.payments[0].amount,
            });

            parsedData[order.store_id].totalStoreOrderAmount +=
                order.payments[0].amount;
        } else {
            parsedData[order.store_id] = {
                orders: [
                    {
                        orderId: order.id,
                        items: order.cart.items.map((a) => {
                            return {
                                thumbnail: a.thumbnail,
                                title: a.title,
                                quantity: a.quantity,
                                unit_price: a.unit_price,
                            };
                        }),
                        orderDate: moment(order.created_at).format(
                            'MMMM Do YYYY, h:mm:ss a'
                        ),
                        orderAmount: order.payments[0].amount,
                    },
                ],
                storeName: order.store.name,
                storeId: order.store_id,
                totalStoreOrderAmount: order.payments[0].amount,
            };
        }
    });
    return parsedData;
}
