import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import { readRequestBody } from '../../../utils/request-body';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    const { message, signature } = readRequestBody(req.body, [
        'message',
        'signature',
    ]);

    const customerService = req.scope.resolve('customerService');

    console.log('Received for verification:', {
        signature,
        message,
    });

    try {
        const isVerified = await customerService.verifyWalletSignature(
            signature,
            message
        );
        console.log('Verification result:', isVerified);

        if (!isVerified) {
            return res
                .status(401)
                .json({ success: false, message: 'Authentication failed' });
        }
        res.json({ success: true, message: 'Authentication successful' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const customerService = req.scope.resolve('customerService');
    try {
        const customer = await customerService.generateNonce();
        return res.json({ nonce: customer });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
};
