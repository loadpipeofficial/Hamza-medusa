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
exports.sleep = exports.bufferToString = exports.privateKeyStringToBytes = void 0;
/**
 * Utility function; convert private key in the form 0x{string} to a Uint8Array (the
 * '0x' is optional)
 * @param privateKey Private key in the form 0x{hex}, 0x is optional
 * @returns Uint8Array
 */
function privateKeyStringToBytes(privateKey) {
    privateKey = privateKey.startsWith('0x')
        ? privateKey.substring(2)
        : privateKey;
    const match = privateKey.match(/[\da-f]{2}/gi);
    if (match) {
        return new Uint8Array(match.map((h) => parseInt(h, 16)));
    }
    return new Uint8Array(0);
}
exports.privateKeyStringToBytes = privateKeyStringToBytes;
/**
 * Utility function to convert Uint8Array to string in the form 0x{hex}
 * @param buffer any Uint8Array
 * @returns 0x{hex} string representation
 */
function bufferToString(buffer) {
    let output = buffer
        ? Array.from(buffer)
            .map((byte) => byte.toString(16).padStart(2, '0'))
            .join('')
        : ''.padEnd(16, '0');
    return `0x${output}`;
}
exports.bufferToString = bufferToString;
function sleep(seconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    });
}
exports.sleep = sleep;
//# sourceMappingURL=utils.js.map