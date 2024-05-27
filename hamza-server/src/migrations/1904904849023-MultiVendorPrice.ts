import { MigrationInterface, QueryRunner } from 'typeorm';

export class MultiVenderPrice1904904849023 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "price_list" ADD COLUMN "store_id" VARCHAR NOT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "price_list" ADD CONSTRAINT "FK_Price_List_Store" FOREIGN KEY ("store_id") REFERENCES "store"("id") ON DELETE SET NULL ON UPDATE CASCADE`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "price_list" DROP CONSTRAINT "FK_Product_Collection_Store"`
        );
        await queryRunner.query(
            `ALTER TABLE "price_list" DROP COLUMN "store_id"`
        );
    }
}
