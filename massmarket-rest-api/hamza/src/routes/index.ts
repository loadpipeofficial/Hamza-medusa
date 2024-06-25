import { Router } from 'express';
import { testController } from '../controllers/test.js';
import { checkoutController } from '../controllers/checkout.js';
import { storeController } from '../controllers/store.js';
import { productsController } from '../controllers/products.js';
const router = Router();

router.get('/test', testController.test);
router.post('/checkout', checkoutController.doCheckout);
router.post('/store', storeController.createStore);
router.post('/product', productsController.createProducts);

export default router;