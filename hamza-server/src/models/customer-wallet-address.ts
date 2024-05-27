import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity, } from '@medusajs/medusa';
import { Customer } from './customer'

@Entity()
export class CustomerWalletAddress {
    @PrimaryColumn({ type: 'varchar', primary: true })
    wallet_address: string;

    @ManyToOne(() => Customer, customer => customer.walletAddresses, { nullable: false })
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @Column({ type: 'varchar', name: 'customer_id' })
    customer_id: string;
}