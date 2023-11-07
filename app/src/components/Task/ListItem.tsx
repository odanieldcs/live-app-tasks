import { FormCheckbox } from '../Form/FormCheckbox';
import Styles from './ListItem.module.css';

type ListItemProps = {
	children: React.ReactNode;
	category: string;
	dateToDo: string;
	isDone: boolean;
};

export function ListItem({
	children,
	category,
	dateToDo,
	isDone,
}: ListItemProps) {
	return (
		<div className={Styles.item}>
			<div className="flex">
				<FormCheckbox isDone={isDone} />
				<span>{children}</span>
			</div>
			<div className={Styles.props}>
				<div className="flex">{category}</div>
				<div className="break-keep">{dateToDo}</div>
			</div>
		</div>
	);
}
