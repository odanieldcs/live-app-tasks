import { useEffect, useState } from 'react';
import { Calendar } from '../Calendar/Calendar';
import { Icon } from '../Icon';
import Styles from './CalendarButton.module.css';
import { format } from 'date-fns';
import { useMyAppContext } from '@/contexts/TaskAppContext';

export function CalendarButton() {
	const { state } = useMyAppContext();
	const [calendarIsOpen, setCalendarIsOpen] = useState(false);

	useEffect(() => {
		if (state.newTaskSelectedDate) {
			setCalendarIsOpen(false);
		}
	}, [state.newTaskSelectedDate]);

	return (
		<div className={Styles.container}>
			<button
				onClick={() => setCalendarIsOpen(!calendarIsOpen)}
				className={Styles.calendarButton}
			>
				<Icon icon="Calendar" width={18} height={18} />
				<span className="flex">
					{format(state.newTaskSelectedDate, 'dd MMM yy')}
				</span>
			</button>
			<div className={Styles.calendar}>{calendarIsOpen && <Calendar />}</div>
		</div>
	);
}
