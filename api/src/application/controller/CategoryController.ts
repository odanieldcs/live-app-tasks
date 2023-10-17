import { Request, Response } from 'express';
import {
	CreateCategory,
	ListCategory,
	UpdateCategory,
} from '../useCase/Category';

type CategoryUseCase = {
	createCategory: CreateCategory;
	listCategory: ListCategory;
	updateCategory: UpdateCategory;
};

export class CategoryController {
	constructor(readonly useCases: CategoryUseCase) {}

	async create(req: Request, res: Response) {
		const { name } = req.body;
		const category = await this.useCases.createCategory.execute(name);

		res.status(200).json({
			category: category,
		});
	}

	async list(req: Request, res: Response) {
		const categories = await this.useCases.listCategory.execute();

		res.status(200).json({
			categories: categories,
		});
	}

	async update(req: Request, res: Response) {
		const { id, name } = req.body;

		const category = await this.useCases.updateCategory.execute(id, name);

		res.status(200).json({
			category: category,
		});
	}
}
