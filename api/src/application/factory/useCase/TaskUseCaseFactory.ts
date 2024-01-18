import {
	AssignCategoryTask,
	CreateTask,
	UpdateTask,
	GetTask,
	ListTask,
} from '../../useCase/Task';

export class TaskUseCaseFactory {
	constructor(readonly taskRepository: any) {}

	useCases() {
		return {
			getOne: new GetTask(this.taskRepository),
			getAll: new ListTask(this.taskRepository),
			createTask: new CreateTask(this.taskRepository),
			updateTask: new UpdateTask(this.taskRepository),
			assignCategoryTask: new AssignCategoryTask(this.taskRepository),
		};
	}
}
