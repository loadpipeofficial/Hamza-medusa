import { Router } from 'express';
import { testController } from '../controllers/test';
import { storeController } from '../controllers/store';
import { cartController } from '../controllers/cart';
import { checkoutController } from '../controllers/checkout';
import { productsController } from '../controllers/products';

const router = Router();

router.get('/', testController.get);

//createStore: POST /store
router.post('/store', storeController.post);

//createCart: POST /cart
router.post('/cart', cartController.post);

//createProducts: POST /products
router.post('/products/:id', productsController.post);

//updateProduct: PUT /products<id>
router.put('/products/:id', productsController.put);

//addToCart: PUT /cart/<cartid>
router.put('/cart:id', cartController.put);

//abandonCart: DELETE /cart
router.delete('/cart', cartController.delete);

//commitCart: POST /cart/<cartid>
router.post('/cart:id', cartController.postId);

//commitCart: POST /checkout
router.post('/checkout', checkoutController.post);

export default router;
