import { ItemMenu } from './ItemMenu';

export function MainMenu() {
	return (
		<div className="grid gap-3">
			<ItemMenu icon="Today" counter="3" filter="today">
				Hoje
			</ItemMenu>
			<ItemMenu icon="Tomorrow" counter="2" filter="tomorrow">
				Amanhã
			</ItemMenu>
			<ItemMenu icon="NextWeek" counter="5" filter="nextWeek">
				Próximos 7 dias
			</ItemMenu>
		</div>
	);
}
