"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = require("../controllers/test");
const store_1 = require("../controllers/store");
const cart_1 = require("../controllers/cart");
const checkout_1 = require("../controllers/checkout");
const products_1 = require("../controllers/products");
const enroll_1 = require("../controllers/enroll");
const router = (0, express_1.Router)();
router.get('/test', test_1.testController.checkout);
//createStore: POST /store
router.get('/store', store_1.storeController.createStore);
//enrollKeycard: POST /enroll
router.get('/enroll', enroll_1.enrollController.enrollKeycard);
//createCart: POST /cart
router.post('/cart', cart_1.cartController.createCart);
//createProducts: POST /products
router.post('/products/:id', products_1.productsController.createProducts);
//updateProduct: PUT /products<id>
router.put('/products/:id', products_1.productsController.updateProduct);
//addToCart: PUT /cart/<cartid>
router.put('/cart:id', cart_1.cartController.addToCart);
//abandonCart: DELETE /cart
router.delete('/cart', cart_1.cartController.abandonCart);
//commitCart: POST /cart/<cartid>
router.post('/cart:id', cart_1.cartController.commitCart);
//checkout: POST /checkout
router.get('/checkout', checkout_1.checkoutController.doCheckout);
exports.default = router;
//# sourceMappingURL=index.js.map