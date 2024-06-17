"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT = exports.validateStoreIdAndKeycard = exports.validateRequiredString = exports.validateRequiredHexString = exports.serveRequest = void 0;
function serveRequest(req, res, runFunction, successReturnCode = 200, defaultReturnCode = 500) {
    console.log('request served: ', JSON.stringify(req.body));
    const onError = (e) => {
        console.error(e);
        res.status(defaultReturnCode).json({
            msg: 'Internal server error',
        });
    };
    try {
        runFunction(req.params.id, req.body)
            .then((output) => {
            if (output)
                res.status(successReturnCode).json(output);
        })
            .catch((e) => {
            onError(e);
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.serveRequest = serveRequest;
function validateRequiredHexString(res, str, name) {
    //TODO: check also for zero address
    if (!str || !str.trim().length || str.trim() === '0x0') {
        res.status(400).json({
            msg: `Required: ${name}`,
        });
        return false;
    }
    return true;
}
exports.validateRequiredHexString = validateRequiredHexString;
function validateRequiredString(res, str, name) {
    //TODO: check also for zero address
    if (!str || !str.trim().length) {
        res.status(400).json({
            msg: `Required: ${name}`,
        });
        return false;
    }
    return true;
}
exports.validateRequiredString = validateRequiredString;
function validateStoreIdAndKeycard(res, input) {
    if (!validateRequiredHexString(res, input.keycard, 'keycard')) {
        return false;
    }
    if (!validateRequiredHexString(res, input.storeId, 'storeId')) {
        return false;
    }
    return true;
}
exports.validateStoreIdAndKeycard = validateStoreIdAndKeycard;
exports.ENDPOINT = 'relay-beta.mass.market/v1';
//# sourceMappingURL=util.js.map