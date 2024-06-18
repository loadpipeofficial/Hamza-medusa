import { Request, Response } from 'express';
import { RelayClientWrapper } from '../massmarket/client';
import { ENDPOINT, serveRequest } from './util';

export const enrollController = {
    //create store
    enrollKeycard: async (req: Request, res: Response) => {
        serveRequest(
            req,
            res,
            async (id, body) => {
                const rc = new RelayClientWrapper(
                    ENDPOINT,
                    '0xa954adaed3d8454349846fd7e32db1053c398a8929dce968400cc4ee9bf299a8',
                    '0x38e01876865a58376858c1f975e09f025c09c929b6bfd3b7de14c87c66a93f10',
                    false
                );

                await rc.enrollKeycard();
            },
            201
        );
    },
};
