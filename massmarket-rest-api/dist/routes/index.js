"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = require("../controllers/test");
const store_1 = require("../controllers/store");
const cart_1 = require("../controllers/cart");
const checkout_1 = require("../controllers/checkout");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
router.get('/', test_1.testController.get);
//createStore: POST /store
router.post('/store', store_1.storeController.post);
//createCart: POST /cart
router.post('/cart', cart_1.cartController.post);
//createProducts: POST /products
router.post('/products/:id', products_1.productsController.post);
//updateProduct: PUT /products<id>
router.put('/products/:id', products_1.productsController.put);
//addToCart: PUT /cart/<cartid>
router.put('/cart:id', cart_1.cartController.put);
//abandonCart: DELETE /cart
router.delete('/cart', cart_1.cartController.delete);
//commitCart: POST /cart/<cartid>
router.post('/cart:id', cart_1.cartController.postId);
//commitCart: POST /checkout
router.post('/checkout', checkout_1.checkoutController.post);
exports.default = router;
//# sourceMappingURL=index.js.map