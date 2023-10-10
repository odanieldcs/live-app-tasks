import { ListCategory } from '../../../../../src/application/useCase/Category';
import Category from '../../../../../src/domain/entity/Category';

describe('UseCase ListCategory', () => {
	let mockRepository: any;
	let listCategory: ListCategory;
	let list: Category[];

	beforeAll(() => {
		list = [Category.create('Title 1'), Category.create('Title 2')];

		mockRepository = {
			list: jest.fn().mockReturnValue(list),
		};

		listCategory = new ListCategory(mockRepository);
	});

	test('should list a category', async () => {
		const categories = await listCategory.execute();

		expect(mockRepository.list).toBeCalledTimes(1);
		expect(categories).toHaveLength(2);
		expect(categories).toEqual(list);
	});
});
