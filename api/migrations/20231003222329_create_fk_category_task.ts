import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	// adicionar um campo category_id na tabela task e deixar opcional
	await knex.schema.alterTable('task', (table) => {
		table.uuid('category_id').nullable().references('id').inTable('category');
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('task', (table) => {
		table.dropColumn('category_id');
	});
}
