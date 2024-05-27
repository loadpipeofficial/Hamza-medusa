import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';
import useWishlistStore from '@store/wishlist/wishlist-store';

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;

export function useWishlistMutations() {
    const { addWishlistProduct, removeWishlistProduct } = useWishlistStore(
        (state) => state
    );

    // Accessing state safely
    const customerState = useCustomerAuthStore((state) => ({
        customer_id: state.customer_id,
    }));
    const customer_id = customerState?.customer_id;

    const addWishlistItemMutation = useMutation(
        (product: ProductType) => {
            console.log(
                'PASSING CUSTOMER_ID',
                customer_id,
                'AND PRODUCT ID',
                product.id
            );
            // Return the axios post call from the mutation function
            return axios.post(`${BACKEND_URL}/custom/wishlist/item`, {
                customer_id: customer_id, // Ensure customer_id is handled when null
                product_id: product.id,
            });
        },
        {
            onSuccess: (data, product) => {
                console.log('Adding Wish list item in DB!');
                console.log('FAILING TO ADD ', product);
                addWishlistProduct(product);
            },
            onError: (error) => {
                console.error('Error adding item to wishlist', error);
            },
        }
    );

    const removeWishlistItemMutation = useMutation(
        (product: ProductType) => {
            console.log(
                'PASSING CUSTOMER_ID',
                customer_id,
                'AND PRODUCT ID',
                product.id
            );
            // Return the axios delete call from the mutation function
            return axios.delete(`${BACKEND_URL}/custom/wishlist/item`, {
                data: {
                    customer_id: customer_id, // Ensure customer_id is handled when null
                    product_id: product.id,
                },
            });
        },
        {
            onSuccess: (data, product) => {
                console.log('Removing Wish List item in DB', product.id);
                removeWishlistProduct(product.id);
            },
            onError: (error) => {
                console.error(
                    'Error removing item from wishlist-dropdown',
                    error
                );
            },
        }
    );

    return { addWishlistItemMutation, removeWishlistItemMutation };
}
