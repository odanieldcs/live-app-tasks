import express from 'express';
import { ControllerFactory } from '@application/factory';
import { validateBody, getPagination, getFilters } from './middleware';
import { createTaskSchema, updateTaskSchema } from './schemas/TaskSchema';

export default class Routes {
	constructor(readonly controllerFactory: ControllerFactory) {}

	routes(): express.Router {
		const router = express.Router();

		const { categoryController, taskController } =
			this.controllerFactory.controllers();

		router.get('/', (req, res) => res.sendStatus(200));

		router.get(
			'/task',
			getPagination,
			getFilters,
			taskController.getAll.bind(taskController)
		);
		router.get('/task/:id', taskController.getOne.bind(taskController));
		router.post(
			'/task',
			validateBody(createTaskSchema),
			taskController.create.bind(taskController)
		);
		router.put(
			'/task/:id',
			validateBody(updateTaskSchema),
			taskController.update.bind(taskController)
		);
		router.put(
			'/task/:id/assign',
			taskController.assignCategory.bind(taskController)
		);

		router.get('/category', categoryController.list.bind(categoryController));
		router.post(
			'/category',
			categoryController.create.bind(categoryController)
		);
		router.put(
			'/category/:id',
			categoryController.update.bind(categoryController)
		);

		return router;
	}
}
