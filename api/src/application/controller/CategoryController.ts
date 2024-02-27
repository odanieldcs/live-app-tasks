import { Request, Response } from 'express';
import {
	CreateCategory,
	ListCategory,
	UpdateCategory,
} from '../useCase/Category';

export type CategoryUseCase = {
	createCategory: CreateCategory;
	listCategory: ListCategory;
	updateCategory: UpdateCategory;
};

export interface CategoryController {
	create(req: Request, res: Response): Promise<void>;
	list(req: Request, res: Response): Promise<void>;
	update(req: Request, res: Response): Promise<void>;
}
