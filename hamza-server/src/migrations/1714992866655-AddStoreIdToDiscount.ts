import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStoreIdToDiscount1714992866655 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "discount"
                ADD "store_id" character varying`,
        );
        await queryRunner.query(
            `CREATE INDEX "DiscountStoreId" ON "discount" ("store_id")`,
        );
        await queryRunner.query(
            `ALTER TABLE "discount"
                ADD CONSTRAINT "fk_discount_store" FOREIGN KEY ("store_id") REFERENCES "store"("id")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."DiscountStoreId"`);
        await queryRunner.query(`ALTER TABLE "discount"
            DROP COLUMN "store_id"`);
        await queryRunner.query(
            `ALTER TABLE "discount"
                DROP CONSTRAINT "fk_discount_store"`,
        );
    }
}
