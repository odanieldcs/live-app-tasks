import IDGenerator from './IDGenerator';

export default class Task {
	done?: boolean = false;
	categoryId?: string;
	updatedAt?: Date;

	constructor(
		readonly id: string,
		readonly title: string,
		readonly createdAt: Date,
		readonly todoDate?: Date,
		updatedAt?: Date,
		categoryId?: string,
		done?: boolean
	) {}

	static create(title: string, todoDate?: Date) {
		const taskId = IDGenerator.generate();
		const todo = todoDate ?? new Date();

		return new Task(taskId, title, new Date(), todo);
	}

	complete(done: boolean) {
		this.done = done;
		this.updatedAt = new Date();
	}

	assignCategory(categoryId: string) {
		this.categoryId = categoryId;
		this.updatedAt = new Date();
	}
}
