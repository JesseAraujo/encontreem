import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1607470459434 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "stores",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "adress",
            type: "varchar",
          },
          {
            name: "adress_number",
            type: "varchar",
          },
          {
            name: "adress_district",
            type: "varchar",
          },
          {
            name: "adress_city",
            type: "varchar",
          },
          {
            name: "adress_state",
            type: "varchar",
          },
          {
            name: "adress_code",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text",
          },
          {
            name: "opening_hours",
            type: "varchar",
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },
          {
            name: "whatsapp",
            type: "varchar",
          },
          {
            name: "store_link",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("stores");
  }
}
