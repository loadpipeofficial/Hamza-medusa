import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import WishlistService from '../../../services/wishlist';

// ADD Wishlist `item`
export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    try {
        const wishlist = await wishlistService.addWishItem(
            req.params.id,
            req.body.product_id
        );
        res.json(wishlist);
    } catch (err) {
        console.log('ERROR: ', err);
    }
};
