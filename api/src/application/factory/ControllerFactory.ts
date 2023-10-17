import { CategoryController, TaskController } from '../controller';

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

		return new TaskController({
			createTask: useCases.createTask,
			completeTask: useCases.completeTask,
			assignCategoryTask: useCases.assignCategoryTask,
		});
	}

	private getControllerCategory() {
		const useCases = this.useCasesFactory.useCases().category;

		return new CategoryController({
			createCategory: useCases.createCategory,
			listCategory: useCases.listCategory,
			updateCategory: useCases.updateCategory,
		});
	}
}
