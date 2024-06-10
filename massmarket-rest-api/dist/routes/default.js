"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const default_1 = require("../controllers/default");
const router = (0, express_1.Router)();
router.get('/', default_1.test);
//router.get('/:id', f1);
//router.post('/', f2);
//router.put('/:id', f3);
//router.delete('/:id', f4);
exports.default = router;
//# sourceMappingURL=default.js.map