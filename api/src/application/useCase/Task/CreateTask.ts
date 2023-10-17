import Task from '../../../domain/entity/Task';
import { TaskRepository } from '../../repository';

export class CreateTask {
	constructor(private readonly taskRepository: TaskRepository) {}

	async execute(title: string): Promise<Task> {
		// criar uma instância de task
		const task = Task.create(title);
		// chamar o repository para salvar a task
		await this.taskRepository.create(task);
		// retornar a task criada
		return task;
	}
}
