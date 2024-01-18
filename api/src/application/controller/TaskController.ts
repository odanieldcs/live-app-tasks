// recebe o request
// chama o useCase
// responde o request
import { Request, Response } from 'express';
import { CreateTask, UpdateTask, AssignCategoryTask } from '../useCase/Task';
import { GetTask } from '../useCase/Task/GetTask';
import { ListTask } from '../useCase/Task/ListTask';

type TaskUseCases = {
	createTask: CreateTask;
	updateTask: UpdateTask;
	assignCategoryTask: AssignCategoryTask;
	getOne: GetTask;
	getAll: ListTask;
};

export class TaskController {
	constructor(readonly useCases: TaskUseCases) {}

	async getOne(req: Request, res: Response) {
		const { id } = req.params;

		// chamar o useCase
		const task = await this.useCases.getOne.execute(id);

		// retornar o response
		res.status(200).json({
			task,
		});
	}

	async getAll(req: Request, res: Response) {
		const { limit, offset } = req.pagination;
		const { startDate, endDate } = req.filters;
		const done = req.query.done === 'true' || false;

		const tasks = await this.useCases.getAll.execute(
			limit,
			offset,
			done,
			startDate,
			endDate
		);

		res.status(200).json(tasks);
	}

	async create(req: Request, res: Response) {
		const { title, todoDate } = req.body;
		const task = await this.useCases.createTask.execute(title, todoDate);

		res.status(200).json({
			task: task,
		});
	}

	async update(req: Request, res: Response) {
		const { id: taskId } = req.params;
		const { title, todoDate, done } = req.body;
		const task = await this.useCases.updateTask.execute(
			taskId,
			title,
			todoDate,
			done
		);

		res.status(201).json({ task: task });
	}

	async assignCategory(req: Request, res: Response) {
		const { id: taskId } = req.params;
		const { categoryId } = req.body;
		const task = await this.useCases.assignCategoryTask.execute(
			taskId,
			categoryId
		);

		res.status(201).json({ task: task });
	}
}
