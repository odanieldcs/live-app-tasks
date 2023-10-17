import Category from '../../domain/entity/Category';

// snake_case = utilizando underscore para separar as palavras
// PascalCase = utilizando a primeira letra de cada palavra em maiúsculo
// camelCase = utilizando a primeira letra da primeira palavra em minúsculo e a primeira letra das demais palavras em maiúsculo

export class CategoryRepository {
	constructor(readonly dbConnection: any) {}

	async create(category: Category): Promise<void> {
		await this.dbConnection('category').inser({
			id: category.id,
			name: category.name,
			created_at: category.createdAt,
		});
	}

	async update(category: Category): Promise<void> {
		await this.dbConnection('category')
			.where({
				id: category.id,
			})
			.update({
				name: category.name,
				updated_at: category.updatedAt,
			});
	}

	async list(): Promise<Category[]> {
		const list = this.dbConnection('category').select('*');

		const listFormatted = list.map((category: any) => {
			return new Category(category.id, category.name, category.createdAt);
		});

		return listFormatted;
	}

	async getOne(categoryId: string): Promise<Category> {
		const categoryData = await this.dbConnection('category')
			.where({ id: categoryId })
			.first();

		const category = new Category(
			categoryData.id,
			categoryData.name,
			categoryData.createdAt
		);

		return category;
	}
}
