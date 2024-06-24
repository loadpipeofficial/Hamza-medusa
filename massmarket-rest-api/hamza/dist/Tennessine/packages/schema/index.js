// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: MIT
import pb from "./compiled.js";
var schema = pb.market.mass;
var google = pb.google;
export default schema;
export { google };
// TODO: codegen these
export const MESSAGE_TYPES = new Map([
    [schema.PingRequest, 1],
    [schema.PingResponse, 2],
    [schema.EventWriteRequest, 3],
    [schema.EventWriteResponse, 4],
    [schema.SyncStatusRequest, 5],
    [schema.SyncStatusResponse, 6],
    [schema.EventPushRequest, 7],
    [schema.EventPushResponse, 8],
    // auth
    [schema.AuthenticateRequest, 20],
    [schema.AuthenticateResponse, 21],
    [schema.ChallengeSolvedRequest, 22],
    [schema.ChallengeSolvedResponse, 23],
    // store
    [schema.GetBlobUploadURLRequest, 30],
    [schema.GetBlobUploadURLResponse, 31],
    [schema.CommitItemsToOrderRequest, 32],
    [schema.CommitItemsToOrderResponse, 33],
]);
// TODO: codegen these
export const MESSAGE_PREFIXES = new Map([
    [1, schema.PingRequest],
    [2, schema.PingResponse],
    [3, schema.EventWriteRequest],
    [4, schema.EventWriteResponse],
    [5, schema.SyncStatusRequest],
    [6, schema.SyncStatusResponse],
    [7, schema.EventPushRequest],
    [8, schema.EventPushResponse],
    [20, schema.AuthenticateRequest],
    [21, schema.AuthenticateResponse],
    [22, schema.ChallengeSolvedRequest],
    [23, schema.ChallengeSolvedResponse],
    [30, schema.GetBlobUploadURLRequest],
    [31, schema.GetBlobUploadURLResponse],
    [32, schema.CommitItemsToOrderRequest],
    [33, schema.CommitItemsToOrderResponse],
]);
//# sourceMappingURL=index.js.map