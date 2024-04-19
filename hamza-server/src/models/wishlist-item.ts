import {
    BeforeInsert,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    Unique,
} from 'typeorm';
import { BaseEntity } from '@medusajs/medusa';
import { generateEntityId } from '@medusajs/medusa/dist/utils';
import { Product } from '@medusajs/medusa/dist/models/product';
import { Wishlist } from './wishlist';

@Entity()
@Unique(['wishlist_id', 'product_id'])
export class WishlistItem extends BaseEntity {
    @Column()
    wishlist_id: string;

    @ManyToOne(() => Wishlist, (wishlist) => wishlist.items)
    @JoinColumn({ name: 'wishlist_id' })
    wishlist: Wishlist;

    @Column()
    product_id: string;

    @ManyToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, 'item');
    }
}
