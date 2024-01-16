import { TaskRepository } from '../../repository';

export class CompleteTask {
	constructor(readonly taskRepository: TaskRepository) {}

	async execute(taskId: string, done: boolean) {
		// get task de um repository/direto do banco de dados.
		const task = await this.taskRepository.getOne(taskId);
		task.complete(done);
		this.taskRepository.complete(task);

		return task;
	}
}
