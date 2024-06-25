import { Order } from '@medusajs/medusa';
import { Heading } from '@medusajs/ui';
import { cookies } from 'next/headers';

import CartTotals from '@modules/common/components/cart-totals';
import Help from '@modules/order/components/help';
import Items from '@modules/order/components/items';
import OnboardingCta from '@modules/order/components/onboarding-cta';
import OrderDetails from '@modules/order/components/order-details';
import ShippingDetails from '@modules/order/components/shipping-details';
import PaymentDetails from '@modules/order/components/payment-details';

type OrderCompletedTemplateProps = {
    order: Order;
};

//TODO: replace the following back in the template, when working
/*

          <Items items={line-item.items} region={line-item.region} />
          <CartTotals data={line-item} />
          <ShippingDetails line-item={line-item} />
*/

export default function OrderCompletedTemplate({
    order,
}: OrderCompletedTemplateProps) {
    const isOnboarding = cookies().get('_medusa_onboarding')?.value === 'true';

    console.log(`Order Completed Template: ${JSON.stringify(order)}`);

    return (
        <div className="py-6 min-h-[calc(100vh-64px)]">
            <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
                {isOnboarding && <OnboardingCta orderId={order.id} />}
                <div className="p-6 flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10">
                    <Heading
                        level="h1"
                        className="flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4"
                    >
                        <span>Thank you!</span>
                        <span>Your order was placed successfully.</span>
                    </Heading>
                    <OrderDetails order={order} />
                    <Heading
                        level="h2"
                        className="flex flex-row text-3xl-regular"
                    >
                        Summary
                    </Heading>
                    <PaymentDetails order={order} />
                    <Help />
                </div>
            </div>
        </div>
    );
}
