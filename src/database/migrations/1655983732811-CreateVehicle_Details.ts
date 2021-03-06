import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateVehicleDetails1655983732811 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicle_details',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'odometer',
            type: 'int',
          },
          {
            name: 'next_services_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'decimal',
            isNullable: true,
          },
          {
            name: 'notes',
            type: 'varchar',
            isNullable: true,
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicle_details')
  }
}
