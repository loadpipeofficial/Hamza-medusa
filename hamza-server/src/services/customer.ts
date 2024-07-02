import {
    CustomerService as MedusaCustomerService,
    Logger,
} from '@medusajs/medusa';
import { CreateCustomerInput } from '@medusajs/medusa/dist/types/customers';
import { Lifetime } from 'awilix';
import { CustomerRepository } from '../repositories/customer';
import CustomerWalletAddressRepository from '../repositories/customer-wallet-address';

interface CustomCustomerInput extends CreateCustomerInput {
    wallet_address: string;
}

export default class CustomerService extends MedusaCustomerService {
    static LIFE_TIME = Lifetime.SINGLETON; // default, but just to show how to change it

    protected customerRepository_: typeof CustomerRepository;
    protected logger: Logger;

    constructor(container) {
        super(container);
        this.customerRepository_ = container.customerRepository;
        this.logger = container.logger;
    }

    async create(input: CustomCustomerInput): Promise<any> {
        this.logger.debug(
            `CustomerService.create() method running with input; ${input}`
        );

        let existingWalletAddress =
            await CustomerWalletAddressRepository.findOne({
                where: { wallet_address: input.wallet_address },
                relations: { customer: { preferred_currency: true } },
                select: { wallet_address: true },
            });

        if (existingWalletAddress) {
            this.logger.debug(
                `Customer with wallet address ${input.wallet_address} already exists`
            );
            return {
                customer: existingWalletAddress.customer,
                customerWalletAddress: existingWalletAddress,
                customerPreferredCurrency:
                    existingWalletAddress.customer.preferred_currency,
            };
        } else {
            this.logger.debug(
                `Customer with wallet address ${input.wallet_address} not found`
            );
        }
        this.logger.debug(
            `creating Customer with input ${JSON.stringify(input)}`
        );
        try {
            const _customer: any = await super.create(input);
            const _customerWalletAddress =
                await CustomerWalletAddressRepository.save({
                    customer: { id: _customer.id },
                    wallet_address: input.wallet_address,
                });
            let _customerPreferredCurrency =
                await this.customerRepository_.findOne({
                    where: { id: _customer.id },
                    relations: { preferred_currency: true },
                    select: { id: true },
                });
            this.logger.debug(
                `Extending Customer with wallet address: ${_customer.wallet_address}`
            );
            return {
                customer: _customer,
                customerWalletAddress: _customerWalletAddress,
                customerPreferredCurrency:
                    _customerPreferredCurrency.preferred_currency,
            };
        } catch (e) {
            this.logger.error(`Error creating customer: ${e}`);
        }
        // lets add a try catch for actually creating a customer?
    }

    async updateCurrency(customerId: string, currency: string): Promise<any> {
        this.logger.debug('CustomerService UpdateCurrency method running');
        let customer = await this.customerRepository_.findOne({
            where: { id: customerId },
            select: { id: true },
        });
        if (!customer) {
            this.logger.debug(`Customer with id ${customerId} not found`);
            return null;
        }
        this.logger.debug(`Customer Selected ${JSON.stringify(customer)}`);
        try {
            let updatedCustomer = await this.customerRepository_.save({
                ...customer,
                preferred_currency_id: currency,
            });
            this.logger.debug(
                `Customer with id ${currency} updated with currency ID ${currency}`
            );
            return updatedCustomer;
        } catch (e) {
            this.logger.error(`Error updating customer currency: ${e}`);
            throw e; // It might be helpful to rethrow the error for further handling by the caller.
        }
    }
}
