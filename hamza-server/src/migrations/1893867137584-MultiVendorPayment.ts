import { MigrationInterface, QueryRunner } from 'typeorm';

export class MultiVendorPayment1893867137584 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "payment" ADD COLUMN "transaction_id" VARCHAR NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "payment" ADD COLUMN "escrow_contract_address" VARCHAR NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "payment" ADD COLUMN "payer_address" VARCHAR NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "payment" ADD COLUMN "receiver_address" VARCHAR NULL`
        );
        await queryRunner.query(`DROP INDEX "UniquePaymentActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "payment" DROP COLUMN "transaction_id"`
        );
        await queryRunner.query(
            `ALTER TABLE "payment" DROP COLUMN "escrow_contract_address"`
        );
        await queryRunner.query(
            `ALTER TABLE "payment" DROP COLUMN "payer_address"`
        );
        await queryRunner.query(
            `ALTER TABLE "payment" DROP COLUMN "receiver_address"`
        );
    }
}
