import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateVehicleStatus1655983790327 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicle_status',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'status',
            type: 'varchar',
          },
        ],
      })
    )

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('vehicle_status', ['status'])
      .values([
        { status: 'AVAILABLE' },
        { status: 'BOOKED' },
        { status: 'UNAVAILABLE' },
        { status: 'SERVICING' },
      ])
      .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicle_status')
  }
}
