import { describe, expect, test } from '@jest/globals';
import Task from '../../../../src/domain/entity/Task';

describe('Task Unit Test', () => {
	test('should create a new task', () => {
		const task = Task.create('Test');

		expect(task).toBeInstanceOf(Task);
		expect(task.title).toBe('Test');
		expect(task.id).toBeDefined();
		expect(task.createdAt).toBeInstanceOf(Date);
	});

	test('should create a new task and update it', () => {
		const task = Task.create('Test');
		const newTask = {
			title: 'Test Novo',
			todoDate: new Date(),
			done: true,
		};

		task.update(newTask.title, newTask.todoDate, newTask.done);

		expect(task).toBeInstanceOf(Task);
		expect(task.title).toBe(newTask.title);
		expect(task.todoDate).toBe(newTask.todoDate);
		expect(task.done).toBe(newTask.done);
		expect(task.id).toBeDefined();
		expect(task.createdAt).toBeInstanceOf(Date);
		expect(task.updatedAt).toBeInstanceOf(Date);
	});
});
