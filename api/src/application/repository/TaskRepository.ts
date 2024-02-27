import Task from '@domain/entity/Task';
import { ListTaskResponse } from '@domain/interface/TaskList';

export interface TaskRepository {
	getOne(taskId: string): Promise<Task>;
	getAll(
		limit: Number,
		offset: Number,
		done: Boolean,
		startDate?: Date | null,
		endDate?: Date | null
	): Promise<ListTaskResponse>;
	create(task: Task): Promise<void>;
	complete(task: Task): Promise<void>;
	update(task: Task): Promise<void>;
}
