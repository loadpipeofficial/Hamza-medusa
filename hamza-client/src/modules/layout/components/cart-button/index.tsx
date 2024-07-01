import { LineItem } from '@medusajs/medusa';

import { enrichLineItems, retrieveCart } from '@modules/cart/actions';

import CartDropdown from '../cart-dropdown';

const fetchCart = async () => {
    console.log('calling retrieveCart from checkout-button');
    const cart = await retrieveCart();

    if (cart?.items.length) {
        const enrichedItems = await enrichLineItems(
            cart?.items,
            cart?.region_id
        );
        cart.items = enrichedItems as LineItem[];
    }

    return cart;
};

export default async function CartButton() {
    const cart = await fetchCart();

    return <CartDropdown cart={cart} />;
}
