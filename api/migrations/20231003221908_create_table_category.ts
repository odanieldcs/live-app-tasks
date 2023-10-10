import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	const exists = await knex.schema.hasTable('category');
	if (exists) return;
	await knex.schema.createTable('category', (table) => {
		table.uuid('id').primary();
		table.string('name').notNullable();
		table.timestamp('created_at').notNullable();
		table.timestamp('updated_at');
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('category');
}
