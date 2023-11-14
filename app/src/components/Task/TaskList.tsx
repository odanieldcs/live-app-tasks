import { useState, useEffect } from 'react';
import { Task } from './Task';
import { useMyAppContext } from '@/contexts/TaskAppContext';
import { TaskType } from '@/contexts/TaskAppContextTypes';

export function TaskList() {
	const { state } = useMyAppContext();
	const [tasks, setTasks] = useState<TaskType[]>([]);

	useEffect(() => {
		setTasks(state.tasks);
	}, [state.tasks]);

	return (
		<ul className="flex flex-col w-full">
			{tasks.map((task) => (
				<li key={task.id} className="w-full">
					<Task
						category={task.category}
						dateToDo={task.dateToDo}
						isDone={task.isDone}
					>
						{task.title}
					</Task>
				</li>
			))}
		</ul>
	);
}
