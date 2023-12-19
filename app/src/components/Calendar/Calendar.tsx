import React from 'react';
import { Icon } from '../Icon';
import { format } from 'date-fns';

export function Calendar() {
	const daysOfDecember = Array.from({ length: 31 }, (_, i) => i + 1);

	return (
		<div className="bg-white w-[310px] p-[20px] shadow-xl">
			<div className="flex justify-between mb-8">
				<h1>Dezembro 2023</h1>
				<div className="flex gap-x-[10px]">
					<button className="opacity-60 hover:opacity-100 p-[4px]">
						<span className="sr-only">Mês anterior</span>
						<Icon icon="Prev" height={14} width={7} />
					</button>
					<button className="opacity-60 hover:opacity-100 p-[4px]">
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
			<div className="grid grid-cols-7 gap-y-3 gap-x-4">
				{daysOfDecember.map((day, dayIdx) => (
					<button
						key={dayIdx}
						className="w-[26px] h-[26px] text-sm text-center text-gray-500 hover:bg-gray-500 hover:text-white rounded-full"
					>
						<time dateTime={format(day, 'yyyy-MM-dd')}>{day}</time>
					</button>
				))}
			</div>
		</div>
	);
}
