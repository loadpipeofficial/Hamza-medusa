import {
    BeforeInsert,
    Column,
    Entity,
    Index,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { BaseEntity } from '@medusajs/medusa';
import { generateEntityId } from '@medusajs/medusa/dist/utils';
import { Permission } from './permission';
import { User } from './user';
import { Store } from './store';

@Entity()
export class Role extends BaseEntity {
    @Column({ type: 'varchar' })
    name: string;

    @Index()
    @Column({ nullable: true })
    store_id: string;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: 'role_permissions',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'permission_id',
            referencedColumnName: 'id',
        },
    })
    permissions: Permission[];

    @OneToMany(() => User, (user) => user.team_role)
    @JoinColumn({ name: 'id', referencedColumnName: 'role_id' })
    users: User[];

    @ManyToOne(() => Store, (store) => store.roles)
    @JoinColumn({ name: 'store_id' })
    store: Store;

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, 'role');
    }
}
