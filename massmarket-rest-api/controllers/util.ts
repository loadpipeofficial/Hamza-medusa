import { Request, Response } from 'express';

export function serveRequest(
    req: Request,
    res: Response,
    runFunction: (id: any, body: any) => Promise<any>,
    successReturnCode: number = 200,
    defaultReturnCode: number = 500
) {
    const onError = (e: any) => {
        console.error(e);
        res.status(defaultReturnCode).json({
            msg: 'Internal server error, contact API administrator',
        });
    };

    try {
        runFunction(req.params.id, req.body)
            .then((output) => {
                res.status(successReturnCode).json(output);
            })
            .catch((e) => {
                onError(e);
            });
    } catch (e) {
        console.log(e);
    }
}
