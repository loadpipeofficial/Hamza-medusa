import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import {
    // alias the core entity to not cause a naming conflict
    LineItem as MedusaLineItem,
} from '@medusajs/medusa';
import { Store } from './store';

@Entity()
export class LineItem extends MedusaLineItem {
    @Column({ nullable: false, default: '' })
    currency_code: string;
}
