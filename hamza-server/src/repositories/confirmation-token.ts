import { dataSource } from '@medusajs/medusa/dist/loaders/database';
import { ConfirmationToken } from '../models/confirmation-token';

export const ConfirmationTokenRepository = dataSource.getRepository(ConfirmationToken);

export default ConfirmationTokenRepository;
