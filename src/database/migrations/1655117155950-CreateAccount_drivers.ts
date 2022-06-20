import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateAccountDrivers1655117155950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'account_drivers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'account_details_id',
            type: 'int',
          },
          {
            name: 'account_id',
            type: 'int',
          },
          {
            name: 'license_number',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'expiry_date',
            type: 'date',
          },
          {
            name: 'license_type',
            type: 'varchar',
          },
          {
            name: 'issue_state',
            type: 'varchar',
          },
          {
            name: 'issue_country',
            type: 'varchar',
          },
          {
            name: 'conditions',
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
        ],
      })
    )

    await queryRunner.createForeignKey(
      'account_drivers',
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
      'account_drivers',
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
    await queryRunner.dropForeignKey('account_drivers', 'account_id_FK')
    await queryRunner.dropColumn('account_drivers', 'account_id')

    await queryRunner.dropForeignKey('account_drivers', 'account_details_id_FK')
    await queryRunner.dropColumn('account_drivers', 'account_details_id')

    await queryRunner.dropTable('account_drivers')
  }
}
