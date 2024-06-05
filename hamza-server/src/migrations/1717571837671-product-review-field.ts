import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductReviewField1717571837671 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "product" ADD COLUMN "review" VARCHAR[] NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "review"`);
    }
}
