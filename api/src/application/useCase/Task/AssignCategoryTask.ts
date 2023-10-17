import { TaskRepository } from '../../repository';

export class AssignCategoryTask {
	constructor(readonly taskRepository: TaskRepository) {}

	async execute(taskId: string, categoryId: string) {
		const task = await this.taskRepository.getOne(taskId);

		task.assignCategory(categoryId);

		this.taskRepository.update(task);

		return task;
	}
}
