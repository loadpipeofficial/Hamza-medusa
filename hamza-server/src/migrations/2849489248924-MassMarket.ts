import { MigrationInterface, QueryRunner } from 'typeorm';

export class MassMarket2849489248924 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "store" ADD COLUMN "massmarket_store_id" VARCHAR NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "store" ADD COLUMN "massmarket_keycard" VARCHAR NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "product" ADD COLUMN "massmarket_prod_id" VARCHAR NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "store" DROP COLUMN "massmarket_store_id"`
        );
        await queryRunner.query(
            `ALTER TABLE "store" DROP COLUMN "massmarket_keycard"`
        );
        await queryRunner.query(
            `ALTER TABLE "product" DROP COLUMN "massmarket_prod_id"`
        );
    }
}
