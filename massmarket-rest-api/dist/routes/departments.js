"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departments_1 = require("../controllers/departments");
const router = (0, express_1.Router)();
router.get('/', departments_1.getDepartments);
router.get('/:id', departments_1.getDepartment);
router.post('/', departments_1.createDepartment);
router.put('/:id', departments_1.updateDepartment);
router.delete('/:id', departments_1.deleteDepartment);
exports.default = router;
//# sourceMappingURL=departments.js.map