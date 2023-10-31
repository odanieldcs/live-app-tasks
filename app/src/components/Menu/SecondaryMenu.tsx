import { ItemMenu } from './ItemMenu';

export function SecondaryMenu() {
	return (
		<div>
			<h2 className="uppercase text-sm font-bold text-[#767798]">Categorias</h2>
			<div className="grid gap-3">
				<ItemMenu counter="3">Categoria A</ItemMenu>
				<ItemMenu counter="3">Categoria B</ItemMenu>
				<ItemMenu counter="3">Categoria C</ItemMenu>
			</div>
		</div>
	);
}
