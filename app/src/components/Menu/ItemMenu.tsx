import { useQueryClient } from 'react-query';
import { Icon, IconName } from '../Icon';
import Styles from './ItemMenu.module.css';
import { TaskType } from '@/contexts/TaskAppContextTypes';
import { useMyAppContext } from '@/contexts/TaskAppContext';
import { useEffect } from 'react';

type TaskQueryProps = {
	tasks?: TaskType[];
};

export function ItemMenu({
	icon,
	counter,
	children,
	filter,
	active,
}: {
	icon?: IconName;
	counter: string;
	children: React.ReactNode;
	filter: string;
	active?: boolean;
}) {
	const queryClient = useQueryClient();
	const { updateActiveFilter, state } = useMyAppContext();

	const handleClick = () => {
		updateActiveFilter(filter);
	};

	useEffect(() => {
		queryClient.invalidateQueries('tasks-false');
	}, [queryClient, state.activeFilter]);

	return (
		<button
			className={`${Styles.itemMenu} ${active ? Styles.active : ''}`}
			onClick={handleClick}
		>
			<div className="flex">
				{icon && <Icon icon={icon} />}
				{children}
			</div>
			<span>{counter}</span>
		</button>
	);
}
