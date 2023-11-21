import {
	AssignCategoryTask,
	CreateTask,
	CompleteTask,
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
			completeTask: new CompleteTask(this.taskRepository),
			assignCategoryTask: new AssignCategoryTask(this.taskRepository),
		};
	}
}
