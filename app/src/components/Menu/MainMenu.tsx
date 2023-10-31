import { ItemMenu } from './ItemMenu';

export function MainMenu() {
	return (
		<div className="grid gap-3">
			<ItemMenu counter="3">Hoje</ItemMenu>
			<ItemMenu counter="2">Amanhã</ItemMenu>
			<ItemMenu counter="5">Próximos 7 dias</ItemMenu>
		</div>
	);
}
