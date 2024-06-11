import {
    BeforeInsert,
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { BaseEntity } from '@medusajs/medusa';
import { generateEntityId } from '@medusajs/medusa/dist/utils';
import { Customer } from '@medusajs/medusa/dist/models/customer';
import { NotificationType } from './notification-type';

@Entity()
export class CustomerNotification extends BaseEntity {
    readonly object = 'customer_notification';

    @Index()
    @Column({ nullable: false })
    customer_id: string;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @ManyToOne(() => NotificationType)
    @JoinColumn({ name: 'notification_type_id' })
    notification_type: NotificationType[];

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, 'customer-notification');
    }
}
