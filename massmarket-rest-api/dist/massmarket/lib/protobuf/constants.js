"use strict";
// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: MIT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGE_PREFIXES = exports.MESSAGE_TYPES = void 0;
const pb = __importStar(require("./compiled"));
var mmproto = pb.market.mass;
// TODO: codegen these
exports.MESSAGE_TYPES = new Map([
    [mmproto.PingRequest, 1],
    [mmproto.PingResponse, 2],
    [mmproto.AuthenticateRequest, 3],
    [mmproto.AuthenticateResponse, 4],
    [mmproto.ChallengeSolvedRequest, 5],
    [mmproto.ChallengeSolvedResponse, 6],
    [mmproto.GetBlobUploadURLRequest, 9],
    [mmproto.GetBlobUploadURLResponse, 0x0a],
    [mmproto.EventWriteRequest, 0x0d],
    [mmproto.EventWriteResponse, 0x0e],
    [mmproto.CommitCartRequest, 0x13],
    [mmproto.CommitCartResponse, 0x14],
    [mmproto.SyncStatusRequest, 0x0f],
    [mmproto.SyncStatusResponse, 0x10],
    [mmproto.EventPushRequest, 0x11],
    [mmproto.EventPushResponse, 0x12],
]);
// TODO: codegen these
exports.MESSAGE_PREFIXES = new Map([
    [1, mmproto.PingRequest],
    [2, mmproto.PingResponse],
    [3, mmproto.AuthenticateRequest],
    [4, mmproto.AuthenticateResponse],
    [5, mmproto.ChallengeSolvedRequest],
    [6, mmproto.ChallengeSolvedResponse],
    [9, mmproto.GetBlobUploadURLRequest],
    [0x0a, mmproto.GetBlobUploadURLResponse],
    [0x0d, mmproto.EventWriteRequest],
    [0x0e, mmproto.EventWriteResponse],
    [0x0f, mmproto.SyncStatusRequest],
    [0x10, mmproto.SyncStatusResponse],
    [0x11, mmproto.EventPushRequest],
    [0x12, mmproto.EventPushResponse],
    [0x13, mmproto.CommitCartRequest],
    [0x14, mmproto.CommitCartResponse],
]);
//# sourceMappingURL=constants.js.map