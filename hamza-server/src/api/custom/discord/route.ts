import { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import CustomerRepository from '../../../repositories/customer';

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    try {
        let decoded: any = jwt.decode(req.cookies['_medusa_jwt']);

        const tokenResponse = await axios.post(
            'https://discord.com/api/oauth2/token',
            new URLSearchParams({
                client_id: process.env.DISCORD_ACCESS_KEY,
                client_secret: process.env.DISCORD_ACCESS_SECRET,
                grant_type: 'authorization_code',
                redirect_uri: process.env.DISCORD_REDIRECT_URL,
                code: req.query.code.toString(),
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        const userResponse = await axios.get(
            'https://discord.com/api/users/@me',
            {
                headers: {
                    Authorization: `Bearer ${tokenResponse.data.access_token}`,
                },
            }
        );

        console.log('user resposne ', userResponse.data);

        if (userResponse.data.email) {
            await CustomerRepository.update(
                { id: decoded.customer_id },
                {
                    email: userResponse.data.email,
                    is_verified: true,
                }
            );
            return res.redirect(`${process.env.STORE_URL}/account`);
        }

        return res.send({
            status: false,
            message: 'Failed to retrieve email from discord',
        });
    } catch (err) {
        console.error('Error creating product review:', err);
        res.status(500).json({
            error: 'Failed to verify with discord',
        });
    }
};
