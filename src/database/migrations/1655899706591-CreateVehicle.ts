import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateVehicle1655899706591 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'vehicle_status_id',
            type: 'int',
            default: 1,
          },
          {
            name: 'vehicle_details_id',
            type: 'int',
          },
          {
            name: 'registration_number',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'registration_status',
            type: 'varchar',
          },
          {
            name: 'VIN',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'make',
            type: 'varchar',
          },
          {
            name: 'body',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'varchar',
          },
          {
            name: 'engine',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'transmission',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'fuel',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'color',
            type: 'varchar',
            isNullable: true,
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
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles')
  }
}
