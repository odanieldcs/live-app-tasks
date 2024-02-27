import { CategoryRepository } from '../repository';
import {
	TaskRepositoryImpl,
	CategoryRepositoryImpl,
} from '@infra/database/repository';

export class RepositoryFactory {
	constructor(readonly dbConnection: any) {}

	repositories() {
		return {
			taskRepository: new TaskRepositoryImpl(this.dbConnection),
			categoryRepository: this.getCategoryRepository(),
		};
	}

	private getCategoryRepository(): CategoryRepository {
		return new CategoryRepositoryImpl(this.dbConnection);
	}
}
