import { Task } from './Task';
import { TaskType } from '@/contexts/TaskAppContextTypes';
import { useQuery } from 'react-query';

type TaskListProps = {
	tasks?: TaskType[];
};

export function TaskList() {
	const { data, error, isLoading } = useQuery<TaskListProps>('tasks', () =>
		fetch('/api/task').then((res) => res.json())
	);

	if (isLoading) return <p>Carregando...</p>;

	if (error) return <p>Ocorreu um erro ao carregar as tarefas!</p>;

	if (data === undefined) return EmptyList();

	return (
		<ul className="flex flex-col w-full">
			{data.tasks?.map((task) => (
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
