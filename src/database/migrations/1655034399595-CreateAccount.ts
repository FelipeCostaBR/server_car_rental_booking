import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAccount1655034399595 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'accounts',
                columns: [
                    {
                        name: 'account_id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',

                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                    },
                    {
                        name: 'gender',
                        type: 'varchar',
                    },
                    {
                        name: 'date_birth',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'address_line_1',
                        type: 'varchar',
                    },
                    {
                        name: 'address_line_2',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                    },
                    {
                        name: 'country',
                        type: 'varchar',
                    },
                    {
                        name: 'post_code',
                        type: 'varchar',
                    },
                    {
                        name: 'is_active',
                        type: 'boolean',
                        default: 'true',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "accounts"`)
    }

}
