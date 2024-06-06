"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
exports.productsController = {
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const input = req.body;
            const output = {
                success: true,
                productId: '0x01',
            };
            res.status(201).json(output);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    }),
    put: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const prodId = req.params.id;
            const input = req.body;
            const output = {
                success: true,
            };
            res.status(200).json({});
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    }),
};
//# sourceMappingURL=products.js.map