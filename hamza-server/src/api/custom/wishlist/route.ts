import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import WishlistService from 'src/services/wishlist';
import { readRequestBody } from '../../../utils/request-body';

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');
    const customer_id = req.query.customer_id; // Correctly retrieving from query parameters

    if (!customer_id) {
        // Respond with an error if no customer_id is provided
        return res.status(400).json({ error: 'customer_id is required' });
    }

    try {
        const wishlist = await wishlistService.retrieve(customer_id);
        res.json(wishlist);
    } catch (err) {
        if (err.message.includes('not found')) {
            console.log(
                'Wishlist does not exist, creating a new wishlist-dropdown for:',
                customer_id
            );
            try {
                const newWishlist = await wishlistService.create(customer_id);
                res.status(201).json(newWishlist); // Respond with HTTP 201 for created resources
            } catch (createErr) {
                console.error(
                    'Error creating new wishlist-dropdown:',
                    createErr
                );
                res.status(500).json({
                    error: 'Failed to create new wishlist-dropdown',
                });
            }
        } else {
            console.error('Error retrieving wishlist-dropdown:', err);
            res.status(500).json({
                error: 'Failed to retrieve wishlist-dropdown',
            });
        }
    }
};

// Create a Wishlist
export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    // lets create a payload for wishlist-dropdown
    const wishlistService: WishlistService =
        req.scope.resolve('wishlistService');

    const { customer_id } = readRequestBody(req.body, ['customer_id']);

    console.log('customer_id: ', customer_id);

    try {
        console.log('TRYING TO CREATE WISHLIST');
        const wishlist = await wishlistService.create(customer_id);
        res.json(wishlist);
    } catch (err) {
        console.log('ERROR: ', err);
    }
};
