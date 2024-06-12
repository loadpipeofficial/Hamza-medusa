import { Router } from 'express';
import { testController } from '../controllers/test';
import { storeController } from '../controllers/store';
import { cartController } from '../controllers/cart';
import { checkoutController } from '../controllers/checkout';
import { productsController } from '../controllers/products';
import { enrollController } from '../controllers/enroll';

const router = Router();

router.get('/test', testController.connectNewKC);

//createStore: POST /store
router.get('/store', storeController.createStore);

//enrollKeycard: POST /enroll
router.get('/enroll', enrollController.enrollKeycard);

//createCart: POST /cart
router.post('/cart', cartController.createCart);

//createProducts: POST /products
router.post('/products/:id', productsController.createProducts);

//updateProduct: PUT /products<id>
router.put('/products/:id', productsController.updateProduct);

//addToCart: PUT /cart/<cartid>
router.put('/cart:id', cartController.addToCart);

//abandonCart: DELETE /cart
router.delete('/cart', cartController.abandonCart);

//commitCart: POST /cart/<cartid>
router.post('/cart:id', cartController.commitCart);

//checkout: POST /checkout
router.post('/checkout', checkoutController.doCheckout);

export default router;
