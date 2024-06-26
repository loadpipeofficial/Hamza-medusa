import { formatAmount } from '@lib/util/prices';
import { LineItem, Region } from '@medusajs/medusa';
import { clx } from '@medusajs/ui';

import { getPercentageDiff } from '@lib/util/get-precentage-diff';
import { CalculatedVariant } from 'types/medusa';
import { formatCryptoPrice } from '@lib/util/get-product-price';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';

type ExtendedLineItem = LineItem & {
    currency_code?: string;
};

type LineItemUnitPriceProps = {
    item: Omit<ExtendedLineItem, 'beforeInsert'>;
    region: Region;
    style?: 'default' | 'tight';
};

const LineItemUnitPrice = ({
    item,
    region,
    style = 'default',
}: LineItemUnitPriceProps) => {
    const originalPrice = (item.variant as CalculatedVariant).original_price;
    const hasReducedPrice = (originalPrice * item.quantity || 0) > item.total!;
    const reducedPrice = (item.total || 0) / item.quantity!;

    return (
        <div className="flex flex-col text-ui-fg-muted justify-center h-full">
            {hasReducedPrice && (
                <>
                    <p>
                        {style === 'default' && (
                            <span className="text-ui-fg-muted">Original: </span>
                        )}
                        <span className="line-through">
                            {formatCryptoPrice(
                                originalPrice,
                                item.currency_code ?? ''
                            )}{' '}
                            {item.currency_code?.toUpperCase() ?? ''}
                        </span>
                    </p>
                    {style === 'default' && (
                        <span className="text-ui-fg-interactive">
                            -
                            {getPercentageDiff(
                                originalPrice,
                                reducedPrice || 0
                            )}
                            %
                        </span>
                    )}
                </>
            )}
            <span
                className={clx('text-base-regular', {
                    'text-ui-fg-interactive': hasReducedPrice,
                })}
            >
                {formatCryptoPrice(
                    reducedPrice || item.unit_price || 0,
                    item.currency_code ?? ''
                )}{' '}
                {item.currency_code?.toUpperCase() ?? ''}
            </span>
        </div>
    );
};

export default LineItemUnitPrice;
