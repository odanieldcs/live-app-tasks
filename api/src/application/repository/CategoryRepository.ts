import Category from '@domain/entity/Category';

// snake_case = utilizando underscore para separar as palavras
// PascalCase = utilizando a primeira letra de cada palavra em maiúsculo
// camelCase = utilizando a primeira letra da primeira palavra em minúsculo e a primeira letra das demais palavras em maiúsculo

export interface CategoryRepository {
	create(category: Category): Promise<void>;
	update(category: Category): Promise<void>;
	list(): Promise<Category[]>;
	getOne(categoryId: string): Promise<Category>;
}
