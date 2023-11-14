import { ItemMenu } from './ItemMenu';

export function MainMenu() {
	return (
		<div className="grid gap-3">
			<ItemMenu icon="Today" counter="3" active={true}>
				Hoje
			</ItemMenu>
			<ItemMenu icon="Tomorrow" counter="2">
				Amanhã
			</ItemMenu>
			<ItemMenu icon="NextWeek" counter="5">
				Próximos 7 dias
			</ItemMenu>
		</div>
	);
}
