import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || '8000',
    apiPaths: {
        default: '/api',
    },
};
