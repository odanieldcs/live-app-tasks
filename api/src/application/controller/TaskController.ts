import { Request, Response } from 'express';
import { CreateTask, UpdateTask, AssignCategoryTask } from '../useCase/Task';
import { GetTask } from '../useCase/Task/GetTask';
import { ListTask } from '../useCase/Task/ListTask';

export type TaskUseCases = {
	createTask: CreateTask;
	updateTask: UpdateTask;
	assignCategoryTask: AssignCategoryTask;
	getOne: GetTask;
	getAll: ListTask;
};

export interface TaskController {
	getOne(req: Request, res: Response): Promise<void>;
	getAll(req: Request, res: Response): Promise<void>;
	create(req: Request, res: Response): Promise<void>;
	update(req: Request, res: Response): Promise<void>;
	assignCategory(req: Request, res: Response): Promise<void>;
}
