'use client';

import { formatAmount } from '@lib/util/prices';
import { InformationCircleSolid } from '@medusajs/icons';
import { Cart, Order, LineItem } from '@medusajs/medusa';
import { Tooltip } from '@medusajs/ui';
import { formatCryptoPrice } from '@lib/util/get-product-price';
import React from 'react';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';

type CartTotalsProps = {
    data: Omit<Cart, 'refundable_amount' | 'refunded_total'> | Order;
};

type ExtendedLineItem = LineItem & {
    currency_code?: string;
};

const CartTotals: React.FC<CartTotalsProps> = ({ data }) => {
    const {
        subtotal,
        discount_total,
        gift_card_total,
        tax_total,
        shipping_total,
        total,
    } = data;

    const { preferred_currency_code } = useCustomerAuthStore();

    const getAmount = (amount: number | null | undefined) => {
        return formatAmount({
            amount: amount || 0,
            region: data.region,
            includeTaxes: false,
            currency_code: '',
        });
    };

    //TODO: this can be replaced later by extending the cart, if necessary
    const getCartSubtotals = (cart: any) => {
        const subtotals: { [key: string]: number } = {};

        for (let n = 0; n < cart.items.length; n++) {
            const item: ExtendedLineItem = cart.items[n];
            const currency: string = item.currency_code ?? '';
            if (currency.length) {
                subtotals[currency] = subtotals[currency] ?? 0;
                subtotals[currency] += item.unit_price * item.quantity;
            }
        }

        return subtotals;
    };

    const subtotals = getCartSubtotals(data);

    return (
        <div>
            <div className="flex flex-col gap-y-2 txt-medium text-ui-fg-subtle ">
                {subtotals['eth'] && (
                    <div className="flex items-center justify-between">
                        <span className="flex gap-x-1 items-center">
                            Subtotal ETH
                            <Tooltip content="Cart total excluding shipping and taxes.">
                                <InformationCircleSolid color="var(--fg-muted)" />
                            </Tooltip>
                        </span>
                        <span>
                            {formatCryptoPrice(subtotals['eth'], 'eth')} ETH
                        </span>
                    </div>
                )}
                {subtotals['usdt'] && (
                    <div className="flex items-center justify-between">
                        <span className="flex gap-x-1 items-center">
                            Subtotal USDT
                            <Tooltip content="Cart total excluding shipping and taxes.">
                                <InformationCircleSolid color="var(--fg-muted)" />
                            </Tooltip>
                        </span>
                        <span>
                            {formatCryptoPrice(subtotals['usdt'], 'usdt')} USDT
                        </span>
                    </div>
                )}
                {subtotals['usdc'] && (
                    <div className="flex items-center justify-between">
                        <span className="flex gap-x-1 items-center">
                            Subtotal USDC
                            <Tooltip content="Cart total excluding shipping and taxes.">
                                <InformationCircleSolid color="var(--fg-muted)" />
                            </Tooltip>
                        </span>
                        <span>
                            {formatCryptoPrice(subtotals['usdc'], 'usdc')} USDC
                        </span>
                    </div>
                )}
                {!!discount_total && (
                    <div className="flex items-center justify-between">
                        <span>Discount</span>
                    </div>
                )}
                {!!gift_card_total && (
                    <div className="flex items-center justify-between">
                        <span>Gift card</span>
                    </div>
                )}
                <div className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span>
                        {formatCryptoPrice(
                            shipping_total!,
                            preferred_currency_code!
                        ).toString()}{' '}
                        {preferred_currency_code?.toUpperCase()}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span className="flex gap-x-1 items-center ">Taxes</span>
                    <span>{getAmount(tax_total).toString()}</span>
                </div>
            </div>
            <div className="h-px w-full border-b border-gray-200 mt-4" />
        </div>
    );
};

export default CartTotals;
