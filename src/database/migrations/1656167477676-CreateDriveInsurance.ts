import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateDriveInsurance1656167477676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'drivers_insurances',

                columns: [
                    {
                        name: 'driver_id',
                        type: 'int',
                    },
                    {
                        name: 'insurance_id',
                        type: 'int',
                    },
                ]
            })
        )

        await queryRunner.createForeignKeys('drivers_insurances', [
            new TableForeignKey({
                name: 'drivers_insurances_driver_FK',
                columnNames: ['driver_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'account_drivers',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'drivers_insurances_insurance_FK',
                columnNames: ['insurance_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'insurances',
                onUpdate: 'CASCADE',
            }),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('drivers_insurances')
    }

}
