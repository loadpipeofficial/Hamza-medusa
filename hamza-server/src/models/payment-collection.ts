import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';
import { PaymentCollection as MedusaPaymentCollection } from '@medusajs/medusa';
import { Store } from './store';

@Entity()
export class PaymentCollection extends MedusaPaymentCollection {
    @PrimaryColumn({ type: 'varchar', primary: true })
    id: string;

    @Column({ nullable: false, default: '' })
    store_id: string;

    @ManyToOne(() => Store)
    @JoinColumn({ name: 'store_id', referencedColumnName: 'id' })
    store?: Store;
}
