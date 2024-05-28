import { AbstractNotificationService } from '@medusajs/medusa';
import NotificationDataService from './notification-data-handler';
import SmtpMailService from './smtp-mail';

class SmtpNotificationService extends AbstractNotificationService {
    static identifier = 'smtp-notification';
    notificationDataService: NotificationDataService;
    smtpMailService: SmtpMailService;
    constructor(container) {
        super(container);
        this.notificationDataService = new NotificationDataService(container);
        this.smtpMailService = new SmtpMailService();
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
        console.log();

        switch (event) {
            case 'order.placed':
                await this.smtpMailService.mailSender({
                    from: process.env.SMTP_FROM,
                    subject: 'Order Placed',
                    mailData: {},
                    to: data.email,
                    templateName: 'order-placed',
                });
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
