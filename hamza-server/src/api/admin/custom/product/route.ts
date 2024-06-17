import type { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';
import { Product } from '../../../../models/product';
import { readRequestBody } from '../../../../utils/request-body';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const logger = req.scope.resolve('logger') as Logger;
    try {
        const productService = req.scope.resolve('productService');
        const productRepository = req.scope.resolve('productRepository');
        const productCollectionRepository = req.scope.resolve('productCollectionRepository');

        const { products } = readRequestBody(req.body, [
            'products',
        ]);

        if (!products) {
            return res
                .status(400)
                .json({ message: 'Missing products' });
        }

        const promises: Promise<Product>[] = [];
        for (let prod of products) {
            promises.push(productService.create(prod));
        }

        await Promise.all(promises);
        logger.debug(`added ${products.length} products.`)

        return res.json({ ok: 'true' });
    } catch (error) {
        logger.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
