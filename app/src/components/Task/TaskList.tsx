import { useState, useEffect } from 'react';
import { Task } from './Task';
import { useMyAppContext } from '@/contexts/TaskAppContext';
import { TaskType } from '@/contexts/TaskAppContextTypes';

export function TaskList() {
	const { state, getTasks } = useMyAppContext();
	const [tasks, setTasks] = useState<TaskType[]>([]);

	useEffect(() => {
		getTasks();
	}, []);

	useEffect(() => {
		setTasks(state.tasks);
	}, [state.tasks]);

	return tasks.length ? List(tasks) : EmptyList();
}

const EmptyList = () => {
	return (
		<p className="text-sm text-gray-600 py-4">Nenhuma tarefa foi adicionada!</p>
	);
};

const List = (tasks: TaskType[]) => {
	return (
		<ul className="flex flex-col w-full">
			{tasks.map((task) => (
				<li key={task.id} className="w-full">
					<Task
						category={task.category}
						todoDate={task.todoDate}
						isDone={task.isDone}
					>
						{task.title}
					</Task>
				</li>
			))}
		</ul>
	);
};
