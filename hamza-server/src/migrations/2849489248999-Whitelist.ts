import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWhiteListTable2849489248999 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "white_list" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "store_id" character varying NOT NULL, "wallet_address" character varying NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdbn" PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('white_list');
    }
}
