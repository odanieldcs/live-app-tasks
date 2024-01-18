import { format } from 'date-fns';
import { FormCheckbox } from '../Form/FormCheckbox';
import Styles from './Task.module.css';
import { TaskInputEditor } from './TaskInputEditor';
import { TaskType } from '@/contexts/TaskAppContextTypes';
import { CalendarButton } from '../CalendarButton/CalendarButton';

type TaskProps = {
	task: TaskType;
	onComplete: (task: TaskType) => void;
	onSelectDate: (task: TaskType) => void;
};

export function Task({ task, onComplete, onSelectDate }: TaskProps) {
	const handleSelectDate = (date: Date) => {
		onSelectDate({ ...task, todoDate: date });
	};
	return (
		<div className={`${Styles.task} ${task.done ? Styles.taskDone : ''}`}>
			<div className="flex gap-x-[15px] items-center">
				<FormCheckbox done={task.done ? task.done : false} taskId={task.id} />
				<TaskInputEditor task={task} onComplete={onComplete} />
			</div>
			<div className={Styles.props}>
				<CalendarButton
					pattern="d 'de' MMM'.'"
					todoDate={task.todoDate}
					onSelectDate={handleSelectDate}
				/>
			</div>
		</div>
	);
}
