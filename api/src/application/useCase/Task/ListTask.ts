import Task from '../../../domain/entity/Task';
import { TaskRepository } from '../../repository';
import { ListTaskResponse } from '../../../domain/interface/TaskList';

export class ListTask {
	constructor(private readonly taskRepository: TaskRepository) {}

	async execute(
		limit: Number,
		offset: Number,
		done: Boolean,
		startDate?: Date | null,
		endDate?: Date | null
	): Promise<ListTaskResponse> {
		// chamar o repository para buscar a task
		const tasks = await this.taskRepository.getAll(
			limit,
			offset,
			done,
			startDate,
			endDate
		);
		// retornar a task
		return tasks;
	}
}
