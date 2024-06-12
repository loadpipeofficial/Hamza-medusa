'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Order } from '@medusajs/medusa';
import OrderCard from '../order-card';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import { addToCart } from '@modules/cart/actions';
import { useParams, useRouter } from 'next/navigation';
import { getVendors } from '@lib/data/index';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Textarea,
    VStack,
} from '@chakra-ui/react';

const MEDUSA_SERVER_URL =
    process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000';

// Define a type that extends the Order type with any additional data
interface DetailedOrder extends Order {
    details?: any; // Further specify if you have the structure of the details
}

const OrderOverview = ({ orders }: { orders: Order[] }) => {
    // Initialize state with the correct type
    const [detailedOrders, setDetailedOrders] = useState<DetailedOrder[]>([]);
    const [orderStatuses, setOrderStatuses] = useState<{
        [key: string]: string;
    }>({});
    const [cancelReason, setCancelReason] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

    const openModal = (orderId: string) => {
        setSelectedOrderId(orderId);
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);
    // console.log('Orders: ', orders);

    const countryCode = useParams().countryCode as string;
    const router = useRouter();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.post(
                    `${MEDUSA_SERVER_URL}/custom/order`,
                    {
                        cart_id: orders[0].cart_id,
                    }
                );
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

    useEffect(() => {
        const fetchStatuses = async () => {
            if (!orders || orders.length === 0) return;

            const statuses = await Promise.allSettled(
                orders.map(async (order, index) => {
                    console.log(`Fetching status for order ${order.id}`);
                    try {
                        const statusRes = await axios.get(
                            `${MEDUSA_SERVER_URL}/custom/order/status`,
                            {
                                params: {
                                    order_id: order.id,
                                },
                            }
                        );
                        return {
                            orderId: order.id,
                            status: statusRes.data.order,
                        };
                    } catch (error) {
                        console.error(
                            `Error fetching status for order ${order.id}:`,
                            error
                        );
                        return {
                            orderId: order.id,
                            status: 'unknown',
                        };
                    }
                })
            );

            const statusMap = {};
            statuses.forEach((result) => {
                if (result.status === 'fulfilled') {
                    const { orderId, status } = result.value;
                    statusMap[orderId] = status;
                } else {
                    console.error(
                        `Failed to fetch status for order: ${result.reason}`
                    );
                }
            });

            setOrderStatuses(statusMap);
            console.log('Order statuses: ', statusMap);
        };

        if (Object.keys(detailedOrders).length > 0) {
            fetchStatuses();
        }
    }, [detailedOrders, orders]);

    const handleCancel = async () => {
        if (!selectedOrderId) return;

        try {
            await axios.delete(`${MEDUSA_SERVER_URL}/custom/order/cancel`, {
                params: { order_id: selectedOrderId },
            });
            setOrderStatuses((prevStatuses) => ({
                ...prevStatuses,
                [selectedOrderId]: 'canceled',
            }));
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error cancelling order: ', error);
        }
    };

    const handleReorder = async (items: any) => {
        // console.log('Reorder button clicked');
        items.map(async (item: any) => {
            try {
                await addToCart({
                    variantId: item.variant_id,
                    countryCode: countryCode,
                    currencyCode: item.currency_code,
                    quantity: item.quantity,
                });
            } catch (e) {
                alert(`Product with name ${item.title} could not be added`);
            }
        });

        router.push('/checkout');

        return;
    };

    // console.log('groupedByCartId: ', groupedByCartId);

    if (Object.keys(groupedByCartId).length > 0) {
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
                                <span
                                    className="pl-2 text-blue-400 underline underline-offset-1 cursor-pointer"
                                    onClick={() => {
                                        handleReorder(items);
                                    }}
                                >
                                    Re-order
                                </span>
                            </div>

                            {items.map((item) => (
                                <>
                                    <OrderCard key={item.id} order={item} />
                                    <div className="flex justify-end items-center">
                                        <LocalizedClientLink
                                            href={`/account/orders/details/${orders[index].id}`}
                                            passHref
                                        >
                                            <Button colorScheme="blue">
                                                See details
                                            </Button>
                                        </LocalizedClientLink>
                                        {orderStatuses[orders[index].id] ===
                                        'canceled' ? (
                                            <Button
                                                colorScheme="red"
                                                ml={4}
                                                isDisabled
                                            >
                                                Order Cancelled
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="solid"
                                                colorScheme="blue"
                                                ml={4}
                                                onClick={() =>
                                                    openModal(
                                                        orderStatuses[
                                                            orders[index].id
                                                        ]
                                                    )
                                                }
                                            >
                                                Request Cancellation
                                            </Button>
                                        )}
                                    </div>
                                </>
                            ))}
                        </div>
                    )
                )}
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Request Cancellation</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Textarea
                                placeholder="Reason for cancellation"
                                value={cancelReason}
                                onChange={(e) =>
                                    setCancelReason(e.target.value)
                                }
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="ghost" onClick={closeModal}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="blue"
                                ml={3}
                                onClick={handleCancel}
                            >
                                Submit
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
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
