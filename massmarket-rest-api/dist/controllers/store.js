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
exports.storeController = void 0;
exports.storeController = {
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const input = req.body;
            const output = {
                success: true,
                storeId: '0x01',
                keyCard: '0x02',
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
};
//# sourceMappingURL=store.js.map