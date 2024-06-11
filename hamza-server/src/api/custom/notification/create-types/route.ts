import type { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';
import CustomerNotificationService from '../../../../services/customer-notification';

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const customerNotificationService: CustomerNotificationService =
        req.scope.resolve('customerNotificationService');
    const logger: Logger = req.scope.resolve('logger');

    try {
        const types =
            await customerNotificationService.createNotificationTypes();

        res.status(200).json({ types });
    } catch (err) {
        logger.error('Error creating notification types', err);
        res.status(500).json({
            error: 'Failed to create notification types',
        });
    }
};
