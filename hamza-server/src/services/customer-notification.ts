import { Lifetime } from 'awilix';
import { Logger, TransactionBaseService } from '@medusajs/medusa';
import { CustomerNotificationRepository } from '../repositories/customer-notification';
import { NotificationTypeRepository } from '../repositories/notification-type';
// import { NotificationType } from '../models/notification-type';

const notificationTypes = [
    { name: 'order_shipped' },
    { name: ' posted a new product' },
    { name: 'order status changed' },
    { name: 'promotions/discounts' },
    { name: ' survey_update' },
    { name: 'sms' },
    { name: 'email' },
    { name: 'LINE' },
    { name: 'whatsapp' },
];

class CustomerNotificationSerivce extends TransactionBaseService {
    static LIFE_TIME = Lifetime.SCOPED;
    protected readonly logger: Logger;
    protected readonly customerNotificationRepository: typeof CustomerNotificationRepository;
    protected readonly notificationTypeRepository: typeof NotificationTypeRepository;

    constructor(container) {
        super(container);
        this.logger = container.logger;
        this.customerNotificationRepository =
            container.customerNotificationRepository;
        this.notificationTypeRepository = container.notificationTypeRepository;
    }

    // TODO: Will this be useful for the full implementation when we have two tables later?

    // async createNotificationTypes(): Promise<NotificationType[]> {
    //     const notificationTypes = [
    //         { name: 'order_shipped' },
    //         { name: 'posted a new product' },
    //         { name: 'order status changed' },
    //         { name: 'promotions/discounts' },
    //         { name: 'survey_update' },
    //         { name: 'sms' },
    //         { name: 'email' },
    //         { name: 'LINE' },
    //         { name: 'whatsapp' },
    //     ];
    //
    //     const createdNotificationTypes: NotificationType[] = [];
    //
    //     try {
    //         for (const type of notificationTypes) {
    //             const notificationType =
    //                 this.notificationTypeRepository.create(type);
    //             const savedNotificationType =
    //                 await this.notificationTypeRepository.save(
    //                     notificationType
    //                 );
    //             createdNotificationTypes.push(savedNotificationType);
    //         }
    //     } catch (e) {
    //         this.logger.error(`Error creating notification types: ${e}`);
    //         throw e;
    //     }
    //
    //     return createdNotificationTypes;
    // }

    async addNotification(customerId: string, notificationType: string) {
        try {
            const notification = this.customerNotificationRepository.create({
                customer_id: customerId,
                notification_type: notificationType,
            });
            const notify =
                await this.customerNotificationRepository.save(notification);
            return notify;
        } catch (e) {
            this.logger.error(`Error adding notification: ${e}`);
            throw e;
        }
    }
}

export default CustomerNotificationSerivce;
