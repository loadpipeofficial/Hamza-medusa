import { MigrationInterface, QueryRunner } from 'typeorm';

export class NotificationType1718096049797 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create notification_type table first
        await queryRunner.query(`
            CREATE TABLE "notification_type" (
                "id" character varying NOT NULL,
                "name" character varying NOT NULL,
                "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP WITH TIME ZONE,
                CONSTRAINT "PK_notification_type_id" PRIMARY KEY ("id"),
                CONSTRAINT "UQ_notification_type_name" UNIQUE ("name")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "notification_type"`);
    }
}
