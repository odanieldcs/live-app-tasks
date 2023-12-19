import { useState } from 'react';
import { Calendar } from '../Calendar/calendar';
import { Icon } from '../Icon';
import Styles from './CalendarButton.module.css';
import { format } from 'date-fns';

export function CalendarButton() {
	const [calendarIsOpen, setCalendarIsOpen] = useState(false);

	return (
		<div className={Styles.container}>
			<button
				onClick={() => setCalendarIsOpen(!calendarIsOpen)}
				className={Styles.calendarButton}
			>
				<Icon icon="Calendar" width={18} height={18} />
				<span className="flex">{format(new Date(), 'dd MMM yy')}</span>
			</button>
			<div className={Styles.calendar}>{calendarIsOpen && <Calendar />}</div>
		</div>
	);
}
