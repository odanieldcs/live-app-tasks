import {
	CreateCategory,
	ListCategory,
	UpdateCategory,
} from '../../useCase/Category';

export class CategoryUseCaseFactory {
	constructor(readonly categoryRepository: any) {}

	useCases() {
		return {
			createCategory: this.getUseCaseCreateCategory(),
			listCategory: new ListCategory(this.categoryRepository),
			updateCategory: new UpdateCategory(this.categoryRepository),
		};
	}

	private getUseCaseCreateCategory(): CreateCategory {
		return new CreateCategory(this.categoryRepository);
	}
}
