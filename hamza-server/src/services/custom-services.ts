import { Lifetime } from 'awilix';
import {
    TransactionBaseService,
    User,
    AbstractPaymentProcessor,
    Logger,
} from '@medusajs/medusa';

class HelloService extends TransactionBaseService {
    protected readonly loggedInUser_: User | null;

    constructor(container, options) {
        super(container, options); // Explicitly passing container and options

        try {
            this.loggedInUser_ = container.loggedInUser;
        } catch (e) {
            console.log('ERROR: should only run when backend first runs', e);
        }
    }
}

export default HelloService;
