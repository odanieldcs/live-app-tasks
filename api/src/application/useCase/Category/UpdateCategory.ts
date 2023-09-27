import CategoryRepository from '../../repository/CategoryRepository';

export class UpdateCategory {
	constructor(private readonly categoryRepository: CategoryRepository) {}

	async execute(id: string, name: string): Promise<void> {
		// verificar se a categoria existe
		const categoryToUpdate = await this.categoryRepository.getOne(id);

		categoryToUpdate.update(name);

		await this.categoryRepository.update(categoryToUpdate);
	}
}
