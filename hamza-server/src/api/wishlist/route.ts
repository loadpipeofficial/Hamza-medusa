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
    const payload = { region_id: req.body.region_id, customer_id: null };

    if (req.user && req.user.customer_id) {
        const customerService: CustomerService =
            req.scope.resolve('customerService');
        const customer = await customerService.retrieve(req.user.customer_id);
        payload.customer_id = customer.id;
    }
    const wishlist = await wishlistService.create(payload);
    res.json(wishlist);
};

// ADD Wishlist `item`
export const PATCH = async (req: MedusaRequest, res: MedusaResponse) => {
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    const wishlist = await wishlistService.addWishItem(
        req.params.id,
        req.body.product_id
    );
    res.json(wishlist);
};

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    const wishlist = await wishlistService.removeWishItem(req.params.item_id);
    res.json(wishlist);
};
