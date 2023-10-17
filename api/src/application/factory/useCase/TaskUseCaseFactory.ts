import {
	AssignCategoryTask,
	CreateTask,
	CompleteTask,
} from '../../useCase/Task';

export class TaskUseCaseFactory {
	constructor(readonly taskRepository: any) {}

	useCases() {
		return {
			createTask: new CreateTask(this.taskRepository),
			completeTask: new CompleteTask(this.taskRepository),
			assignCategoryTask: new AssignCategoryTask(this.taskRepository),
		};
	}
}
