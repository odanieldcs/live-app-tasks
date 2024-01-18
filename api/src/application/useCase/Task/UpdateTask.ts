import { TaskRepository } from '../../repository';

export class UpdateTask {
	constructor(readonly taskRepository: TaskRepository) {}

	async execute(taskId: string, title: string, todoDate: Date, done: boolean) {
		const task = await this.taskRepository.getOne(taskId);
		task.update(title ?? task.title, todoDate ?? task.todoDate, done);
		await this.taskRepository.update(task);

		return task;
	}
}
