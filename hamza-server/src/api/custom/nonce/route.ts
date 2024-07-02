import { SiweMessage, generateNonce } from 'siwe';
import { ConfigModule } from '@medusajs/medusa';
import type { MedusaRequest, MedusaResponse, Logger } from '@medusajs/medusa';

type MyConfigModule = ConfigModule & {
    projectConfig: {
        nonce?: string;
    };
};

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const logger = req.scope.resolve('logger') as Logger;
    try {
        const nonce = generateNonce();
        req.session.nonce = nonce;
        await req.session.save();
        res.send(req.session.nonce);
    } catch (error) {
        logger.error('Get nonce error', error);
        return res
            .status(500)
            .json({ message: 'Internal server error', error: error.message });
    }
};
