import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateConfirmationTokenTable1715196617015
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "confirmation_token" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "token" character varying NOT NULL, "email_address" character varying NOT NULL, "redeemed" boolean DEFAULT false, "expiration_hours" int DEFAULT 3, "customer_id" character varying NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("token"))`
        );
        await queryRunner.query(
            `ALTER TABLE "confirmation_token" ADD CONSTRAINT "FK_auvt4ec8rnokwoadgpxqf9bf66" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('confirmation_token');
    }
}
