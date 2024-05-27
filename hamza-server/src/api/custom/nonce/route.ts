import { SiweMessage, generateNonce } from 'siwe';
import { ConfigModule } from '@medusajs/medusa';
import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';

type MyConfigModule = ConfigModule & {
    projectConfig: {
        nonce?: string;
    };
};

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    try {
        const nonce = generateNonce();
        // console.log("nonce", nonce, "typeof nonce", typeof nonce);
        req.session.nonce = nonce;
        await req.session.save();
        // console.log("SESSION NONCE? GET REQUEST: ", req.session);
        res.send(req.session.nonce);
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: 'Internal server error', error: error.message });
    }
};
