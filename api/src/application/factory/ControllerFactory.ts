import {
	CategoryControllerImpl,
	TaskControllerImpl,
} from '@infra/http/controller';

export class ControllerFactory {
	constructor(readonly useCasesFactory: any) {}

	controllers() {
		return {
			categoryController: this.getControllerCategory(),
			taskController: this.getControllerTask(),
		};
	}

	private getControllerTask() {
		const useCases = this.useCasesFactory.useCases().task;

		return new TaskControllerImpl({
			getOne: useCases.getOne,
			getAll: useCases.getAll,
			createTask: useCases.createTask,
			updateTask: useCases.updateTask,
			assignCategoryTask: useCases.assignCategoryTask,
		});
	}

	private getControllerCategory() {
		const useCases = this.useCasesFactory.useCases().category;

		return new CategoryControllerImpl({
			createCategory: useCases.createCategory,
			listCategory: useCases.listCategory,
			updateCategory: useCases.updateCategory,
		});
	}
}
