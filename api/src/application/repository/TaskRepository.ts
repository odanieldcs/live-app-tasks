import Task from '../../domain/entity/Task';

export class TaskRepository {
	constructor(readonly dbConnection: any) {}

	async getOne(taskId: string): Promise<Task> {
		const taskData = await this.dbConnection('task')
			.where({ id: taskId })
			.first();
		const task = new Task(
			taskData.id,
			taskData.title,
			taskData.created_at,
			taskData.updated_at,
			taskData.category_id ?? null,
			taskData.done
		);

		return task;
	}

	async getAll(): Promise<Task[]> {
		const taskData = await this.dbConnection('task').select('*');

		const tasks: Task[] = taskData.map((task: any) => ({
			id: task.id,
			title: task.title,
			createdAt: task.created_at,
			updatedAt: task.updated_at,
			categoryId: task.category_id ?? null,
			done: task.done,
		}));

		return tasks;
	}

	async create(task: Task): Promise<void> {
		await this.dbConnection('task').insert({
			id: task.id,
			title: task.title,
			created_at: task.createdAt,
		});
	}

	async complete(task: Task): Promise<void> {
		await this.dbConnection('task').where({ id: task.id }).update({
			done: task.done,
			updated_at: task.updatedAt,
		});
	}

	async update(task: Task): Promise<void> {
		await this.dbConnection('task').where({ id: task.id }).update({
			title: task.title,
			categoryId: task.categoryId,
			done: task.done,
			updated_at: task.updatedAt,
		});
	}
}
