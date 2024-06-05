import type { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';
import { readRequestBody } from '../../../../utils/request-body';
import ProductService from '../../../../services/product';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const logger = req.scope.resolve('logger') as Logger;
    const productService: ProductService = req.scope.resolve('storeService');

    const { store_id } = readRequestBody(req.body, ['store_id']);
    logger.log('store_id: ' + store_id);
    try {
        const stores = await productService.getProductsFromStore(store_id);
        res.json(stores);
    } catch (err) {
        logger.error('Error fetching stores:', err);
        res.status(500).json({
            error: 'Failed to fetch stores',
        });
    }
};
