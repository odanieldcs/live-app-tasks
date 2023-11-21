import Task from '../../../domain/entity/Task';
import { TaskRepository } from '../../repository';

export class GetTask {
	constructor(private readonly taskRepository: TaskRepository) {}

	async execute(taskId: string): Promise<Task> {
		// chamar o repository para buscar a task
		const task = await this.taskRepository.getOne(taskId);
		// retornar a task
		return task;
	}
}
