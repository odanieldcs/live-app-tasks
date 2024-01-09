import React, { useState } from 'react';
import { Icon } from '../Icon';
import {
	format,
	startOfToday,
	parse,
	eachDayOfInterval,
	endOfMonth,
	add,
	getDay,
	isEqual,
} from 'date-fns';
import { useMyAppContext } from '@/contexts/TaskAppContext';

export function Calendar() {
	const { updateNewTaskSelectedDate } = useMyAppContext();
	let today = startOfToday();
	let [selectedDay, setSelectedDay] = useState(today);
	let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
	let firstDayOfMonth = parse(currentMonth, 'MMM-yyyy', new Date());
	let endDayOfMonth = endOfMonth(firstDayOfMonth);

	let days = eachDayOfInterval({
		start: firstDayOfMonth,
		end: endDayOfMonth,
	});

	function nextMonth() {
		let firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
		setCurrentMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
	}

	function previousMonth() {
		let firstDayOfPreviousMonth = add(firstDayOfMonth, { months: -1 });
		setCurrentMonth(format(firstDayOfPreviousMonth, 'MMM-yyyy'));
	}

	function setNewTaskSelectedDate(day: Date) {
		updateNewTaskSelectedDate(day);
		setSelectedDay(day);
	}

	return (
		<div className="bg-white w-[310px] p-[20px] shadow-xl">
			<div className="flex justify-between mb-8">
				<h1>{format(firstDayOfMonth, 'MMMM yyyy')}</h1>
				<div className="flex gap-x-[10px]">
					<button
						onClick={previousMonth}
						className="opacity-60 hover:opacity-100 p-[4px]"
					>
						<span className="sr-only">Mês anterior</span>
						<Icon icon="Prev" height={14} width={7} />
					</button>
					<button
						onClick={nextMonth}
						className="opacity-60 hover:opacity-100 p-[4px]"
					>
						<span className="sr-only">Próximo mês</span>
						<Icon icon="Next" height={14} width={7} />
					</button>
				</div>
			</div>
			<div className="grid grid-cols-7 gap-x-[20px] justify-between mb-4 text-sm text-center text-gray-500 cursor-default">
				<div className="w-[26px]">S</div>
				<div className="w-[26px]">T</div>
				<div className="w-[26px]">Q</div>
				<div className="w-[26px]">Q</div>
				<div className="w-[26px]">S</div>
				<div className="w-[26px]">S</div>
				<div className="w-[26px]">D</div>
			</div>
			<div className="grid grid-cols-7 gap-y-3 gap-x-4 text-sm text-center text-gray-500">
				{days.map((day, dayIdx) => (
					<div
						key={dayIdx}
						className={classNames(
							dayIdx === 0 ? colsStart[getDay(day)] : '',
							''
						)}
					>
						<button
							type="button"
							onClick={() => setNewTaskSelectedDate(day)}
							className={classNames(
								isEqual(day, selectedDay) && 'bg-gray-500 text-white',
								isEqual(day, today) && 'bg-red-500 text-white',
								'w-[26px] h-[26px] rounded-full hover:bg-gray-500 hover:text-white transition-colors'
							)}
						>
							<time dateTime={format(day, 'yyyy-MM-dd')}>
								{format(day, 'd')}
							</time>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

// list cols-start
const colsStart = [
	'',
	'col-start-1',
	'col-start-2',
	'col-start-3',
	'col-start-4',
	'col-start-5',
	'col-start-6',
];
