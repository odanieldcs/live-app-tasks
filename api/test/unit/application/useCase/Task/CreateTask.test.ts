import { describe, expect, test, beforeAll } from '@jest/globals';
import { CreateTask } from '../../../../../src/application/useCase/Task';
import Task from '../../../../../src/domain/entity/Task';

describe('UseCase CreateTask', () => {
	let mockRepository: any;
	let createTask: CreateTask;

	beforeAll(() => {
		mockRepository = {
			create: (title: string, todoDate: string) => {},
		};

		createTask = new CreateTask(mockRepository);
	});

	test('should create a task', async () => {
		const task = await createTask.execute('any_title');

		expect(task).toBeInstanceOf(Task);
		expect(task).toHaveProperty('id');
		expect(task).toHaveProperty('title');
		expect(task).toHaveProperty('done');
		expect(task).toHaveProperty('createdAt');
	});
});
