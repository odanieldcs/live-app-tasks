import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	// adicionar um novo campo chamado data para fazer da tarefa
	await knex.schema.alterTable('task', (table) => {
		table.date('todo_date').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('task', (table) => {
		table.dropColumn('todo_date');
	});
}
