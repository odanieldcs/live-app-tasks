import Task from '../../../domain/entity/Task';
import { TaskRepository } from '../../repository';

export class ListTask {
	constructor(private readonly taskRepository: TaskRepository) {}

	async execute(): Promise<Task[]> {
		// chamar o repository para buscar a task
		const tasks = await this.taskRepository.getAll();
		// retornar a task
		return tasks;
	}
}
