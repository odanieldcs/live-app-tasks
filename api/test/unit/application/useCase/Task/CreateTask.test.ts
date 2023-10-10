import { CreateTask } from '../../../../../src/application/useCase/Task';
import Task from '../../../../../src/domain/entity/Task';

describe('UseCase CreateTask', () => {
	let mockRepository: any;
	let createTask: CreateTask;

	beforeAll(() => {
		mockRepository = {
			create: jest.fn(),
		};

		createTask = new CreateTask(mockRepository);
	});

	test('should create a task', async () => {
		const task = await createTask.execute('any_title');

		expect(mockRepository.create).toBeCalledTimes(1);
		expect(mockRepository.create).toBeCalledWith(task);

		expect(task).toBeInstanceOf(Task);
		expect(task).toHaveProperty('id');
		expect(task).toHaveProperty('title');
		expect(task).toHaveProperty('done');
		expect(task).toHaveProperty('createdAt');
	});
});
