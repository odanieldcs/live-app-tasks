import IDGenerator from './IDGenerator';

export default class Task {
	done?: boolean = false;
	categoryId?: string;
	updatedAt?: Date;
	todoDate?: Date;
	title?: string;

	constructor(
		readonly id: string,
		readonly createdAt: Date,
		title?: string,
		todoDate?: Date,
		updatedAt?: Date,
		categoryId?: string,
		done?: boolean
	) {
		this.title = title;
		this.todoDate = todoDate;
		this.updatedAt = updatedAt;
		this.categoryId = categoryId;
		this.done = done;
	}

	static create(title: string, todoDate?: Date) {
		const taskId = IDGenerator.generate();
		const todo = todoDate ?? new Date();

		return new Task(taskId, new Date(), title, todo);
	}

	update(title: string, todoDate: Date, done: boolean) {
		this.title = title;
		this.todoDate = todoDate;
		this.done = done;
		this.updatedAt = new Date();
	}

	assignCategory(categoryId: string) {
		this.categoryId = categoryId;
		this.updatedAt = new Date();
	}
}
