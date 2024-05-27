import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import WishlistService from '../../../../services/wishlist';
import { readRequestBody } from '../../../../utils/request-body';

// ADD Wishlist `item` by customer_id
export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');

    const { customer_id, product_id } = readRequestBody(req.body, [
        'customer_id',
        'product_id',
    ]);

    try {
        const wishlist = await wishlistService.addWishItem(
            customer_id,
            product_id
        );
        res.json(wishlist);
    } catch (err) {
        console.log('ERROR: ', err);
        res.status(500).send('Internal Server Error');
    }
};

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    const { customer_id, product_id } = readRequestBody(req.body, [
        'customer_id',
        'product_id',
    ]);

    try {
        // Call removeWishItem instead of addWishItem
        const wishlist = await wishlistService.removeWishItem(
            customer_id,
            product_id
        );
        res.json(wishlist);
    } catch (err) {
        console.log('ERROR: ', err);
        res.status(500).send('Internal Server Error');
    }
};
