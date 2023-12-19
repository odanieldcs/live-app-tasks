import { format } from 'date-fns';
import { FormCheckbox } from '../Form/FormCheckbox';
import Styles from './Task.module.css';

type TaskProps = {
	children: React.ReactNode;
	category?: string;
	todoDate?: Date;
	isDone?: boolean;
};

export function Task({ children, category, todoDate, isDone }: TaskProps) {
	console.log(todoDate);
	return (
		<div className={`${Styles.task} ${isDone ? Styles.taskDone : ''}`}>
			<div className="flex gap-x-[15px]">
				<FormCheckbox isDone={isDone ? isDone : false} />
				<p>{children}</p>
			</div>
			<div className={Styles.props}>
				<p>{category}</p>
				<time dateTime={todoDate?.toString()}>
					{todoDate ? format(new Date(todoDate), "d 'de' MMM'.'") : ''}
				</time>
			</div>
		</div>
	);
}
