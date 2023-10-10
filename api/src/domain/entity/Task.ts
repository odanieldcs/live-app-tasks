import IDGenerator from './IDGenerator';

export default class Task {
	done?: boolean = false;
	categoryId?: string;
	updatedAt?: Date;

	constructor(
		readonly id: string,
		readonly title: string,
		readonly createdAt: Date,
		updatedAt?: Date
	) {}

	static create(title: string) {
		const taskId = IDGenerator.generate();

		return new Task(taskId, title, new Date());
	}

	complete() {
		this.done = true;
		this.updatedAt = new Date();
	}

	assignCategory(categoryId: string) {
		this.categoryId = categoryId;
		this.updatedAt = new Date();
	}
}
