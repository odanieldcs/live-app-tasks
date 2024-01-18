import { useState } from 'react';
import { Calendar } from '../Calendar/Calendar';
import { Icon } from '../Icon';
import Styles from './CalendarButton.module.css';
import { format } from 'date-fns';
import { TaskType } from '@/contexts/TaskAppContextTypes';

type CalendarButtonProps = {
	enableIcon?: boolean;
	todoDate: Date;
	onSelectDate: (todoDate: Date) => void;
	pattern: string;
};

export function CalendarButton(props: CalendarButtonProps) {
	const [calendarIsOpen, setCalendarIsOpen] = useState(false);

	return (
		<div className={Styles.container}>
			<button
				onClick={() => setCalendarIsOpen(!calendarIsOpen)}
				className={Styles.calendarButton}
			>
				{props.enableIcon && <Icon icon="Calendar" width={18} height={18} />}
				<span className="flex font-normal">
					{format(new Date(props.todoDate), props.pattern)}
				</span>
			</button>
			<div className={Styles.calendar}>
				{calendarIsOpen && (
					<Calendar
						onSelectDate={props.onSelectDate}
						closeCalendar={() => setCalendarIsOpen(false)}
						todoDate={props.todoDate}
					/>
				)}
			</div>
		</div>
	);
}
