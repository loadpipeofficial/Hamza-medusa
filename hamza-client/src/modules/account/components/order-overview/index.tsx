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
    const [orderStatus, setOrderStatus] = useState('');
    const [cancelReason, setCancelReason] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
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
                // console.log('Data: ', data);
                setDetailedOrders(data.order);
            } catch (error) {
                console.error('Error fetching orders: ', error);
            }
        };

        const fetchOrderStatus = async () => {
            try {
                const { data } = await axios.get(
                    `${MEDUSA_SERVER_URL}/custom/order/status`,
                    {
                        params: {
                            order_id: orders[0].id,
                        },
                    }
                );
                console.log('Order status: ', data.order);
                setOrderStatus(data.order);
            } catch (error) {
                console.error('Error fetching order status: ', error);
            }
        };

        fetchOrderStatus();
        fetchOrders();
    }, [orders]);

    const handleCancel = async () => {
        try {
            await axios.delete(`${MEDUSA_SERVER_URL}/custom/order/cancel`, {
                params: { order_id: orders[0].id },
            });
            setOrderStatus('canceled');
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

    const groupedByCartId = detailedOrders.reduce((acc, item) => {
        if (!acc[item.cart_id]) {
            acc[item.cart_id] = [];
        }
        acc[item.cart_id].push(item);
        return acc;
    }, {});

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
                                            <Button variant="secondary">
                                                See details
                                            </Button>
                                        </LocalizedClientLink>
                                        {orderStatus === 'canceled' ? (
                                            <Button
                                                variant="outline"
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
                                                onClick={openModal}
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
