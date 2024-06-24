import { Router } from 'express';
import { testController } from '../controllers/test.js';
import { checkoutController } from '../controllers/checkout.js';
//import { storeController } from '../controllers/store.js';
const router = Router();

router.get('/test', testController.test);
router.post('/checkout', checkoutController.doCheckout);
//router.post('/store', storeController.createStore);

export default router;
