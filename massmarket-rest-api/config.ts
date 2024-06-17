import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || '3001',
    apiPaths: {
        default: '/api',
    },
};
