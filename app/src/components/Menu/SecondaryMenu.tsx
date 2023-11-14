import { Title } from '../Title/Title';
import { ItemMenu } from './ItemMenu';

export function SecondaryMenu() {
	return (
		<div>
			<Title heading="Subtitle">Categorias</Title>
			<div className="grid gap-3">
				<ItemMenu icon="Menu" counter="3">
					Categoria A
				</ItemMenu>
				<ItemMenu icon="Menu" counter="3">
					Categoria B
				</ItemMenu>
				<ItemMenu icon="Menu" counter="3">
					Categoria C
				</ItemMenu>
			</div>
		</div>
	);
}
