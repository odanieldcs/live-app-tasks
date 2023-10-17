import { CategoryRepository, TaskRepository } from '../repository';

export class RepositoryFactory {
	constructor(readonly dbConnection: any) {}

	repositories() {
		return {
			taskRepository: new TaskRepository(this.dbConnection),
			categoryRepository: this.getCategoryRepository(),
		};
	}

	private getCategoryRepository(): CategoryRepository {
		return new CategoryRepository(this.dbConnection);
	}
}
