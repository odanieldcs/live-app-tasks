import { CategoryUseCaseFactory, TaskUseCaseFactory } from './useCase';

export class UseCaseFactory {
	constructor(readonly repositories: any) {}

	useCases() {
		return {
			category: new CategoryUseCaseFactory(
				this.repositories.categoryRepository
			).useCases(),
			task: new TaskUseCaseFactory(this.repositories.taskRepository).useCases(),
		};
	}
}
