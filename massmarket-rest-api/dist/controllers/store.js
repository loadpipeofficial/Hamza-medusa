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
const client_1 = require("../massmarket/client");
const util_1 = require("./util");
/*
{
    "success":true,
    "storeId":"0xb3196680cda22f98635bbc104e1f5e829ee8e71db27b5d6c9241d0e20c64e109",
    "keyCard":"0x7e683da67b0079c20a4856bfbd92b3c90b63f51bd57f7a9d2643aaba5c6b659b"
}
*/
exports.storeController = {
    //create store
    post: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const input = body;
            const output = {
                success: false,
                storeId: '0x0',
                keyCard: '0x0',
            };
            const data = yield client_1.RelayClientWrapper.createAndInitializeStore();
            output.storeId = data.storeId;
            output.keyCard = data.keyCard;
            //TODO: check for zeroAddress
            output.success =
                output.storeId.length > 0 && output.keyCard.length > 0;
            return output;
        }), 201);
    }),
};
//# sourceMappingURL=store.js.map