import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import ConfirmationTokenService from "../../../../services/confirmation-token";



export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    try {
        let confirmationTokenService: ConfirmationTokenService = req.scope.resolve('confirmationTokenService');
        await confirmationTokenService.verifyConfirmationToken(req.query.token.toString());
        return res.send({ status: true });
    } catch (e) {
        console.log('error in verifying token ', e);
        return res.send({ status: false, message: e.message })
    }
};