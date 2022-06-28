import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateInvoice1656163307491 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'invoices',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isUnique: true,
                    },
                    {
                        name: "booking_id",
                        type: 'int'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey('invoices',
            new TableForeignKey({
                name: 'invoice_booking_FK',
                columnNames: ['booking_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'bookings',
                onUpdate: 'CASCADE',
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('invoices')
    }

}
