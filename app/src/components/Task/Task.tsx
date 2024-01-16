import { format } from 'date-fns';
import { FormCheckbox } from '../Form/FormCheckbox';
import Styles from './Task.module.css';

type TaskProps = {
	children: React.ReactNode;
	category?: string;
	todoDate?: Date;
	done?: boolean;
	taskId: string;
};

export function Task({
	children,
	category,
	todoDate,
	done,
	taskId,
}: TaskProps) {
	return (
		<div className={`${Styles.task} ${done ? Styles.taskDone : ''}`}>
			<div className="flex gap-x-[15px]">
				<FormCheckbox done={done ? done : false} taskId={taskId} />
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
