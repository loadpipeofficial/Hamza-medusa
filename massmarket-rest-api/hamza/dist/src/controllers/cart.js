import { ENDPOINT, serveRequest, validateRequiredHexString, validateStoreIdAndKeycard, } from './utils';
import { RelayClientWrapper } from '../massmarket/client';
export const cartController = {
    //create cart
    createCart: async (req, res) => {
        serveRequest(req, res, async (id, body) => {
            const input = body;
            const output = {
                success: false,
                cartId: '0x0',
            };
            if (!validateCreateCartInput(res, input))
                return null;
            //get the client
            const rc = await RelayClientWrapper.get(ENDPOINT, input.storeId, input.keycard);
            //create the cart
            if (rc) {
                output.cartId = await rc.createCart();
                output.success = output.cartId.length > 0;
            }
            return output;
        }, 201);
    },
    //add item to cart
    addToCart: async (req, res) => {
        serveRequest(req, res, async (id, body) => {
            const cartId = id;
            const input = body;
            const output = {
                success: false,
            };
            if (!validateAddItemInput(res, cartId, input))
                return null;
            //get the client
            const rc = await RelayClientWrapper.get(ENDPOINT, input.storeId, input.keycard);
            //add to cart
            if (rc) {
                await rc.addToCart(cartId, input.item.productId, input.item.quantity);
                output.success = true;
            }
            return output;
        }, 201);
    },
    //commit cart
    commitCart: async (req, res) => {
        serveRequest(req, res, async (id, body) => {
            const cartId = id;
            const input = body;
            const output = {
                success: false,
            };
            if (!validateCommitCartInput(res, cartId, input))
                return null;
            //get the client
            const rc = await RelayClientWrapper.get(ENDPOINT, input.storeId, input.keycard);
            //commit the cart
            if (rc) {
                await rc.commitCart(cartId, input.paymentCurrency ??
                    '0x0000000000000000000000000000000000000000');
                output.success = true;
            }
            return output;
        });
    },
};
function validateCreateCartInput(res, input) {
    if (!validateStoreIdAndKeycard(res, input))
        return false;
    return true;
}
function validateAddItemInput(res, cartId, input) {
    if (!validateRequiredHexString(res, cartId, 'cartId'))
        return false;
    if (!validateStoreIdAndKeycard(res, input))
        return false;
    if (!input.item) {
        res.status(400).json({ message: 'Required: item' });
        return false;
    }
    if (!validateRequiredHexString(res, input.item.productId, 'productId')) {
        return false;
    }
    if (!input.item.quantity) {
        res.status(400).json({ message: 'Required: item' });
        return false;
    }
    return true;
}
function validateCommitCartInput(res, cartId, input) {
    if (!validateRequiredHexString(res, cartId, 'cartId'))
        return false;
    if (!validateStoreIdAndKeycard(res, input))
        return false;
    return true;
}
function validateAbandonCartInput(res, cartId, input) {
    if (!validateRequiredHexString(res, cartId, 'cartId'))
        return false;
    if (!validateStoreIdAndKeycard(res, input))
        return false;
    return true;
}
//# sourceMappingURL=cart.js.map