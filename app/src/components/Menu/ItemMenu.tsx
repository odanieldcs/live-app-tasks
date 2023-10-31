import Styles from './ItemMenu.module.css';

export function ItemMenu({
	icon,
	counter,
	children,
}: {
	icon?: string;
	counter: string;
	children: React.ReactNode;
}) {
	return (
		<div className={Styles.itemMenu}>
			<div className="flex">
				<span className="w-6 h-6 bg-slate-600 rounded-md mr-4"></span>
				{children}
			</div>
			<div className="text-gray-500">{counter}</div>
		</div>
	);
}
