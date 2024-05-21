import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import { readRequestBody } from '../../../utils/request-body';
import { LineItemService } from '@medusajs/medusa';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const orderService: LineItemService = req.scope.resolve('lineItemService');

    const { cart_id } = readRequestBody(req.query, ['cart_id']);

    try {
        const order = await orderService.list({ cart_id });

        res.status(200).json({ order });
    } catch (err) {
        console.error('Error retrieving order', err);
        res.status(500).json({
            error: 'Failed to retrieve order',
        });
    }
};
