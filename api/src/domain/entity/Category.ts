import IDGenerator from './IDGenerator';

export default class Category {
	name?: string;
	updatedAt?: Date;

	constructor(readonly id: string, name: string, readonly createdAt: Date) {
		this.name = name;
	}

	static create(name: string) {
		const taskId = IDGenerator.generate();

		return new Category(taskId, name, new Date());
	}

	update(name?: string) {
		this.name = name;
		this.updatedAt = new Date();
	}
}
