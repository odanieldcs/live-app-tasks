import { Request, Response } from 'express';
import {
	CreateCategory,
	ListCategory,
	UpdateCategory,
} from '../useCase/Category';

export default class CategoryController {
	constructor(
		readonly createCategory: CreateCategory,
		readonly listCategory: ListCategory,
		readonly updateCategory: UpdateCategory
	) {}

	async create(req: Request, res: Response) {
		const { name } = req.body;
		const category = await this.createCategory.execute(name);

		res.status(200).json({
			category: category,
		});
	}

	async list(req: Request, res: Response) {
		const categories = await this.listCategory.execute();

		res.status(200).json({
			categories: categories,
		});
	}

	async update(req: Request, res: Response) {
		const { id, name } = req.body;

		const category = await this.updateCategory.execute(id, name);

		res.status(200).json({
			category: category,
		});
	}
}
