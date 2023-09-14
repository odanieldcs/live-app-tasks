import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // verificar se a tabela existe
  const exists = await knex.schema.hasTable("task");
  if (exists) return;
  // criação da nossa tabela
  await knex.schema.createTable("task", (table) => {
    table.uuid("id").primary();
    table.string("title").notNullable();
    table.boolean("done").defaultTo(false).notNullable();
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("task");
}
