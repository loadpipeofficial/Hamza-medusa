"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToBase64 = exports.generatePk = exports.getRandomStoreId = exports.formatMessageForSigning = exports.snakeToCamel = exports.convertFirstCharToLowerCase = exports.randomBytes = exports.eventId = exports.requestId = void 0;
const buffer_1 = require("buffer");
const viem_1 = require("viem");
const crypto_1 = __importDefault(require("crypto"));
function requestId() {
    return randomBytes(16);
}
exports.requestId = requestId;
function eventId() {
    return randomBytes(32);
}
exports.eventId = eventId;
function randomBytes(n) {
    const b = new Uint8Array(n);
    crypto_1.default.getRandomValues(b);
    return b;
}
exports.randomBytes = randomBytes;
function convertFirstCharToLowerCase(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
exports.convertFirstCharToLowerCase = convertFirstCharToLowerCase;
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letter) => `${letter.toUpperCase()}`);
}
exports.snakeToCamel = snakeToCamel;
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
function formatArray(array) {
    if (typeof array[0] === "number") {
        return array.map((num) => BigInt(num));
    }
    else {
        return array.map((m) => (0, viem_1.bytesToHex)(m));
    }
}
// TODO: there are a lot of assumptions backed in here that should be commented
function formatMessageForSigning(obj) {
    const snakeCase = {};
    for (const [key, value] of Object.entries(obj)) {
        // TODO: Refactor this. Nested ternary operators are hard to read and a nightmare to change.
        snakeCase[camelToSnake(key)] = Array.isArray(value)
            ? formatArray(value)
            : typeof value === "string"
                ? value
                : typeof value === "number"
                    ? BigInt(value)
                    : (0, viem_1.bytesToHex)(value);
    }
    return snakeCase;
}
exports.formatMessageForSigning = formatMessageForSigning;
function getRandomStoreId() {
    return (0, viem_1.bytesToHex)(randomBytes(32));
}
exports.getRandomStoreId = getRandomStoreId;
function generatePk() {
    return (0, viem_1.bytesToHex)(randomBytes(32));
}
exports.generatePk = generatePk;
function hexToBase64(hex) {
    const u8 = new Uint8Array((0, viem_1.toBytes)(hex));
    return buffer_1.Buffer.from(u8).toString("base64");
}
exports.hexToBase64 = hexToBase64;
//# sourceMappingURL=utils.js.map