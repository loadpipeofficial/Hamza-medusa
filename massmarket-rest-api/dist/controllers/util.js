"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveRequest = void 0;
function serveRequest(req, res, runFunction, successReturnCode = 200, defaultReturnCode = 500) {
    const onError = (e) => {
        console.error(e);
        res.status(defaultReturnCode).json({
            msg: 'Internal server error, contact API administrator',
        });
    };
    try {
        runFunction(req.params.id, req.body)
            .then((output) => {
            console.log('returning success');
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
//# sourceMappingURL=util.js.map