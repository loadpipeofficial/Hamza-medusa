import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import WishlistService from '../../services/wishlist';
import CustomerService from '../../services/customer';

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    // lets get wishlist items by '/:id'
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    const { id } = req.params;
    const wishlist = await wishlistService.retrieve(id);
    res.json(wishlist);
};

// Create a Wishlist
export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    // lets create a payload for wishlist
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    const payload = {
        region_id: req.body.region_id,
        customer_id: req.body.customer_id,
    };

    console.log('payload: ', payload);

    try {
        const wishlist = await wishlistService.create({ ...payload });
        res.json(wishlist);
    } catch (err) {
        console.log('ERROR: ', err);
    }
};

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    const wishlist = await wishlistService.removeWishItem(req.params.item_id);
    res.json(wishlist);
};
