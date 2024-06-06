"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToString = exports.privateKeyStringToBytes = void 0;
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
//# sourceMappingURL=utils.js.map