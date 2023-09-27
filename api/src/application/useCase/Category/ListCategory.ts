import CategoryRepository from '../../repository/CategoryRepository';
import Category from '../../../domain/entity/Category';

export class ListCategory {
	constructor(private readonly categoryRepository: CategoryRepository) {}

	async execute(): Promise<Category[]> {
		const categories = this.categoryRepository.list();

		return categories;
	}
}
