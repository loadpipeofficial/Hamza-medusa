import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import {
    // alias the core entity to not cause a naming conflict
    Product as MedusaProduct,
} from '@medusajs/medusa';
import { Store } from './store';

@Entity()
export class Product extends MedusaProduct {
    @Column({ nullable: false, default: '' })
    store_id: string;

    @ManyToOne(() => Store)
    @JoinColumn({ name: 'store_id', referencedColumnName: 'id' })
    store?: Store;

    @Column('massmarket_prod_id')
    massmarket_prod_id?: string;
}
