import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateInsurance1656164785316 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'insurances',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'vehicle_id',
                        type: 'int',
                    },
                    {
                        name: 'policy_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'broker',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'expiry_date',
                        type: 'date',
                        isNullable: true,
                    },
                ]
            })
        )

        await queryRunner.createForeignKey('insurances',
            new TableForeignKey({
                name: 'insurance_driver_FK',
                columnNames: ['vehicle_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'vehicles',
                onUpdate: 'CASCADE',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('insurances', 'insurance_driver_FK')
        await queryRunner.dropColumn('insurances', 'vehicle_id')

        await queryRunner.dropTable('insurances')
    }

}
