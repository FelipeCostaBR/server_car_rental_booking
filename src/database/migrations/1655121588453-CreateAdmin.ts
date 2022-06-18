import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateAdmin1655121588453 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'admins',
                columns: [
                    {
                        name: 'account_id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'account_details_id',
                        type: 'int',
                    },
                    {
                        name: 'role',
                        type: 'varchar',
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'admins',
            new TableForeignKey({
                name: 'account_id_FK',
                columnNames: ['account_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'accounts',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        )

        await queryRunner.createForeignKey(
            'admins',
            new TableForeignKey({
                name: 'account_details_id_FK',
                columnNames: ['account_details_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'accounts_details',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("admins", 'account_id_FK')
        await queryRunner.dropColumn("admins", "account_id")

        await queryRunner.dropForeignKey("admins", 'account_details_id_FK')
        await queryRunner.dropColumn("admins", "account_details_id")

        await queryRunner.dropTable('admins')
    }

}
