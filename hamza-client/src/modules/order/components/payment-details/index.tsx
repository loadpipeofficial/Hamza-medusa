import { Order } from '@medusajs/medusa';
import { Container, Heading, Text } from '@medusajs/ui';
import { formatAmount } from '@lib/util/prices';

import { paymentInfoMap } from '@lib/constants';
import Divider from '@modules/common/components/divider';

type PaymentDetailsProps = {
    order: Order;
};

const PaymentDetails = ({ order }: PaymentDetailsProps) => {
    const payment = order.payments[0];
    return (
        <div>
            <Heading level="h2" className="flex flex-row text-3xl-regular my-6">
                Payment
            </Heading>
            <div>
                {payment && (
                    <div className="flex items-start gap-x-1 w-full">
                        <div className="flex flex-col w-1/3">
                            <Text className="txt-medium-plus text-ui-fg-base mb-1">
                                Payment method
                            </Text>
                            <Text className="txt-medium text-ui-fg-subtle">
                                {paymentInfoMap[payment.provider_id].title}
                            </Text>
                        </div>
                        <div className="flex flex-col w-2/3">
                            <Text className="txt-medium-plus text-ui-fg-base mb-1">
                                Payment details
                            </Text>
                            <div className="flex gap-2 txt-medium text-ui-fg-subtle items-center">
                                <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                                    {paymentInfoMap[payment.provider_id].icon}
                                </Container>
                                <Text>
                                    {payment.data.card_last4
                                        ? `**** **** **** ${payment.data.card_last4}`
                                        : `${formatAmount({
                                              amount: payment.amount,
                                              region: order.region,
                                              includeTaxes: false,
                                              currency_code: '',
                                          })} paid at ${new Date(payment.created_at).toString()}`}
                                </Text>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Divider className="mt-8" />
        </div>
    );
};

export default PaymentDetails;
