import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class FKsVehicles1656067953385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKeys('vehicles', [
            new TableForeignKey({
                name: 'vehicle_status_id_FK',
                columnNames: ['vehicle_status_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'vehicle_status',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'vehicle_details_id_FK',
                columnNames: ['vehicle_details_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'vehicle_details',
                onUpdate: 'CASCADE',
            }),
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('vehicles', 'vehicle_status_id_FK')
        await queryRunner.dropColumn('vehicles', 'vehicle_status_id')

        await queryRunner.dropForeignKey('vehicles', 'vehicle_details_id_FK')
        await queryRunner.dropColumn('vehicles', 'vehicle_details_id')

    }

}
