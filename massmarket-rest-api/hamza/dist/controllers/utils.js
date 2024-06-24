export function serveRequest(req, res, runFunction, successReturnCode = 200, defaultReturnCode = 500) {
    console.log('request received: ', JSON.stringify(req.body));
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
export function validateRequiredHexString(res, str, name) {
    //TODO: check also for zero address
    if (!str || !str.trim().length || str.trim() === '0x0') {
        res.status(400).json({
            msg: `Required: ${name}`,
        });
        return false;
    }
    return true;
}
export function validateRequiredString(res, str, name) {
    //TODO: check also for zero address
    if (!str || !str.trim().length) {
        res.status(400).json({
            msg: `Required: ${name}`,
        });
        return false;
    }
    return true;
}
export function validateStoreIdAndKeycard(res, input) {
    if (!validateRequiredHexString(res, input.keycard, 'keycard')) {
        return false;
    }
    if (!validateRequiredHexString(res, input.storeId, 'storeId')) {
        return false;
    }
    return true;
}
export const ENDPOINT = 'relay-beta.mass.market/v2';
//# sourceMappingURL=utils.js.map