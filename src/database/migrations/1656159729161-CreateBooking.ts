import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateBooking1656159729161 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bookings',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'driver_id',
                        type: 'int',
                    },
                    {
                        name: 'vehicle_id',
                        type: 'int',
                    },
                    {
                        name: 'confirmation_date',
                        type: 'date',
                    },
                    {
                        name: 'collect_date',
                        type: 'date',
                    },
                    {
                        name: 'return_date',
                        type: 'date',
                    },
                    {
                        name: 'price_total',
                        type: 'decimal',
                    },
                    {
                        name: 'reason',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp',
                        isNullable: true,
                    },
                ]
            })
        )

        await queryRunner.createForeignKeys('bookings', [
            new TableForeignKey({
                name: 'booking_driver_FK',
                columnNames: ['driver_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'account_drivers',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'booking_vehicle_FK',
                columnNames: ['vehicle_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'vehicles',
                onUpdate: 'CASCADE',
            }),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bookings', 'booking_driver_FK')
        await queryRunner.dropColumn('bookings', 'driver_id')

        await queryRunner.dropForeignKey('bookings', 'booking_vehicle_FK')
        await queryRunner.dropColumn('bookings', 'vehicle_id')

        await queryRunner.dropTable('bookings')
    }

}
