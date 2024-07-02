import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import useWishlistStore, {
    WishlistProduct,
} from '@store/wishlist/wishlist-store';

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

export function useWishlistMutations() {
    const { addWishlistProduct, removeWishlistProduct } = useWishlistStore(
        (state) => state
    );

    // Accessing state safely
    const customerState = useCustomerAuthStore((state) => ({
        customer_id: state.authData.customer_id,
    }));
    const customer_id = customerState?.customer_id;

    const addWishlistItemMutation = useMutation(
        (product: WishlistProduct) => {
            console.log(
                'PASSING CUSTOMER_ID',
                customer_id,
                'AND PRODUCT ID',
                product.id
            );
            addWishlistProduct(product);
            // Return the axios post call from the mutation function
            return axios.post(`${BACKEND_URL}/custom/wishlist/item`, {
                customer_id: customer_id, // Ensure customer_id is handled when null
                product_id: product.id,
            });
        },
        {
            onSuccess: (data, product) => {
                // loadWishlist(customer_id);
                console.log('Adding Wish list item in DB!');
            },
            onError: (error, product) => {
                removeWishlistProduct(product.id);
                console.error('Error adding item to wishlist', error);
            },
        }
    );

    const removeWishlistItemMutation = useMutation(
        (product: WishlistProduct) => {
            // Return the axios delete call from the mutation function
            removeWishlistProduct(product.id);
            return axios.delete(`${BACKEND_URL}/custom/wishlist/item`, {
                data: {
                    customer_id: customer_id, // Ensure customer_id is handled when null
                    product_id: product.id,
                },
            });
        },
        {
            onSuccess: (data, product) => {
                // loadWishlist(customer_id);
                console.log('Removing Wish List item in DB', product.id);
            },
            onError: (error, product) => {
                addWishlistProduct(product);
                console.error(
                    'Error removing item from wishlist-dropdown',
                    error
                );
            },
        }
    );

    return { addWishlistItemMutation, removeWishlistItemMutation };
}
