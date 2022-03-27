import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class userMigration1648384515976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"User",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"cpf",
                        type:"varchar"
                    },
                    {
                        name:"endereco",
                        type:"varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
