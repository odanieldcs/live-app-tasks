// recebe o request
// chama o useCase
// responde o request
import { Request, Response } from 'express';
import { CreateTask, CompleteTask, AssignCategoryTask } from '../useCase/Task';

type TaskUseCases = {
	createTask: CreateTask;
	completeTask: CompleteTask;
	assignCategoryTask: AssignCategoryTask;
};

export class TaskController {
	constructor(readonly useCases: TaskUseCases) {}

	async create(req: Request, res: Response) {
		const { title } = req.body;
		const task = await this.useCases.createTask.execute(title);

		res.status(200).json({
			task: task,
		});
	}

	async complete(req: Request, res: Response) {
		const { id: taskId } = req.params;
		const task = await this.useCases.completeTask.execute(taskId);

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
