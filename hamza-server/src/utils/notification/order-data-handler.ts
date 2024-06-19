import moment from 'moment';

type Address = {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    customer_id: string | null;
    company: string;
    first_name: string;
    last_name: string;
    address_1: string;
    address_2: string;
    city: string;
    country_code: string;
    province: string;
    postal_code: string;
    phone: string;
    metadata: any | null;
};

type LineItem = {
    currency_code: string;
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
};

type Cart = {
    object: string;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    email: string;
    billing_address_id: string;
    shipping_address_id: string;
    region_id: string;
    customer_id: string;
    payment_id: string | null;
    type: string;
    completed_at: string;
    payment_authorized_at: string | null;
    idempotency_key: string | null;
    context: {
        ip: string;
        user_agent: string;
    };
    metadata: any | null;
    sales_channel_id: string;
    items: LineItem[];
};

type Payment = {
    transaction_id: string;
    receiver_address: string;
    payer_address: string;
    escrow_contract_address: string;
    id: string;
    created_at: string;
    updated_at: string;
    swap_id: string | null;
    cart_id: string;
    order_id: string;
    amount: number;
    currency_code: string;
    amount_refunded: number;
    provider_id: string;
    data: any;
    captured_at: string | null;
    canceled_at: string | null;
    metadata: any | null;
    idempotency_key: string | null;
};

type Region = {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    name: string;
    currency_code: string;
    tax_rate: number;
    tax_code: string | null;
    gift_cards_taxable: boolean;
    automatic_taxes: boolean;
    tax_provider_id: string | null;
    metadata: any | null;
};

type Customer = {
    is_verified: boolean;
    preferred_currency: string | null;
    preferred_currency_id: string;
    walletAddresses: any | null;
    notifications: any | null;
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    email: string;
    first_name: string;
    last_name: string;
    billing_address_id: string | null;
    phone: string | null;
    has_account: boolean;
    metadata: any | null;
};

type Store = {
    owner: any | null;
    name: string;
    owner_id: string;
    massmarket_store_id: string;
    massmarket_keycard: string;
    icon: string;
    id: string;
    created_at: string;
    updated_at: string;
    default_currency_code: string;
    swap_link_template: string | null;
    payment_link_template: string | null;
    invite_link_template: string | null;
    default_location_id: string | null;
    metadata: any | null;
    default_sales_channel_id: string | null;
};

type Order = {
    object: string;
    store: Store;
    store_id: string;
    massmarket_order_id: string;
    massmarket_ttl: number;
    massmarket_amount: string;
    id: string;
    created_at: string;
    updated_at: string;
    status: string;
    fulfillment_status: string;
    payment_status: string;
    display_id: number;
    cart_id: string;
    customer_id: string;
    email: string;
    billing_address_id: string;
    shipping_address_id: string;
    region_id: string;
    currency_code: string;
    tax_rate: number | null;
    draft_order_id: string | null;
    canceled_at: string | null;
    metadata: any | null;
    no_notification: string | null;
    idempotency_key: string | null;
    external_id: string | null;
    sales_channel_id: string;
    billing_address: Address;
    cart: Cart;
    claims: any[];
    customer: Customer;
    discounts: any[];
    fulfillments: any[];
    gift_card_transactions: any[];
    gift_cards: any[];
    items: any[];
    payments: Payment[];
    refunds: any[];
    region: Region;
    returns: any[];
    shipping_address: Address;
    shipping_methods: any[];
    swaps: any[];
    shipping_total: number;
    discount_total: number;
    tax_total: number;
    refunded_total: number;
    gift_card_total: number;
    gift_card_tax_total: number;
    subtotal: number;
    total: number;
};

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
