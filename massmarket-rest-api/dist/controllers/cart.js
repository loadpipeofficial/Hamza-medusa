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
exports.cartController = void 0;
exports.cartController = {
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const input = req.body;
            const output = {
                success: true,
                cartId: '0x0',
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
            const cartId = req.params.id;
            const input = req.body;
            const output = {
                success: true,
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
    postId: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const cartId = req.params.id;
            const input = req.body;
            const output = {
                success: true,
            };
            res.status(200).json(output);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const cartId = req.params.id;
            const input = req.body;
            const output = {
                success: true,
            };
            res.status(204).json(output);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Internal server error, contact API administrator',
            });
        }
    }),
};
//# sourceMappingURL=cart.js.map