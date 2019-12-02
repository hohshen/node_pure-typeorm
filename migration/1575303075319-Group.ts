import { MigrationInterface, QueryRunner, TableIndex, Table } from "typeorm";

export class Group1575303075319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "group",
            columns: [
                {
                    name: "id",
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                }
            ]
        }))

        await queryRunner.createIndex("group", new TableIndex({
            name: 'MAKE_GROUPID_BE_INDEX',
            columnNames: ['id']
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("group");
    }

}
