import CategoryRepository from '../../repository/CategoryRepository';
import Category from '../../../domain/entity/Category';

export class CreateCategory {
	constructor(private readonly categoryRepository: CategoryRepository) {}

	async execute(name: string): Promise<Category> {
		const category = Category.create(name);

		// chamar o repository para salvar a categoria
		await this.categoryRepository.create(category);

		return category;
	}
}
