import Category from '../../../../src/domain/entity/Category';

describe('Category Unit Test', () => {
	test('should create a new category', () => {
		const category = Category.create('Test');

		expect(category).toBeInstanceOf(Category);
		expect(category.name).toBe('Test');
		expect(category.id).toBeDefined();
		expect(category.createdAt).toBeInstanceOf(Date);
	});

	test('should create a new category and update it', () => {
		const category = Category.create('Test');

		category.update('Test2');

		expect(category).toBeInstanceOf(Category);
		expect(category.name).toBe('Test2');
		expect(category.id).toBeDefined();
		expect(category.createdAt).toBeInstanceOf(Date);
		expect(category.updatedAt).toBeInstanceOf(Date);
	});
});
