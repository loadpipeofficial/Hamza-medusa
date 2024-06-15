import { AbstractNotificationService, Logger } from '@medusajs/medusa';
import NotificationDataService from './notification-data-handler';
import SmtpMailService from './smtp-mail';

class SmtpNotificationService extends AbstractNotificationService {
    static identifier = 'smtp-notification';
    notificationDataService: NotificationDataService;
    smtpMailService: SmtpMailService;
    logger: Logger;

    constructor(container) {
        super(container);
        this.notificationDataService = new NotificationDataService(container);
        this.smtpMailService = new SmtpMailService();
        this.logger = container.logger;
    }

    async sendNotification(
        event: string,
        data: any,
        attachmentGenerator: unknown
    ): Promise<{
        to: string;
        status: string;
        data: Record<string, unknown>;
    }> {
        switch (event) {
            case 'order.placed':
                if (!data.email.includes('@evm.blockchain')) {
                    this.logger.debug(`Sending mail for order: ${data}`);

                    await this.smtpMailService.sendMail({
                        from: process.env.SMTP_FROM,
                        subject: 'Order Placed',
                        mailData: {
                            orderId: 'order_0285759727374345',
                            dateTimeString: new Date(
                                Date.now()
                            ).toLocaleString(),
                            orderItems: '...',
                            orderAmount: '23.00 USDT',
                        },
                        to: data.email,
                        templateName: 'order-placed',
                    });
                }
                return {
                    to: data.email,
                    status: 'success',
                    data: data,
                };
            default:
                return null;
        }
    }

    resendNotification(
        notification: unknown,
        config: unknown,
        attachmentGenerator: unknown
    ): Promise<{
        to: string;
        status: string;
        data: Record<string, unknown>;
    }> {
        throw new Error('Method not implemented.');
    }
}

export default SmtpNotificationService;
