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
exports.enrollController = void 0;
const client_1 = require("../massmarket/client");
const util_1 = require("./util");
exports.enrollController = {
    //create store
    enrollKeycard: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        (0, util_1.serveRequest)(req, res, (id, body) => __awaiter(void 0, void 0, void 0, function* () {
            const rc = new client_1.RelayClientWrapper(util_1.ENDPOINT, '0xa954adaed3d8454349846fd7e32db1053c398a8929dce968400cc4ee9bf299a8', '0x38e01876865a58376858c1f975e09f025c09c929b6bfd3b7de14c87c66a93f10', false);
            yield rc.enrollKeycard();
        }), 201);
    }),
};
//# sourceMappingURL=enroll.js.map