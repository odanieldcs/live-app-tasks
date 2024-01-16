import { Task } from './Task';
import { TaskType } from '@/contexts/TaskAppContextTypes';
import { useQuery } from 'react-query';
import { Title } from '../Title/Title';
import { useMyAppContext } from '@/contexts/TaskAppContext';

type TaskListProps = {
	title: string;
	done: boolean;
};

type TaskQueryProps = {
	tasks?: TaskType[];
};

export function TaskList(props: TaskListProps) {
	const { state } = useMyAppContext();
	const queryName = props.done ? 'tasks-true' : 'tasks-false';

	const { data, error, isLoading } = useQuery<TaskQueryProps>(queryName, () =>
		fetch(`/api/task?done=${props.done}&filter=${state.activeFilter}`).then(
			(res) => res.json()
		)
	);

	if (isLoading) return <p>Carregando...</p>;

	if (error) return <p>Ocorreu um erro ao carregar as tarefas!</p>;

	if (data?.tasks?.length === 0 && !props.done) return EmptyList();

	if (data?.tasks?.length === 0 && props.done) return null;

	return (
		<>
			<Title heading="SmallTitle">{props.title}</Title>
			<ul className="flex flex-col w-full">
				{data?.tasks?.map((task) => (
					<li key={task.id} className="w-full">
						<Task
							category={task.category}
							todoDate={task.todoDate}
							done={task.done}
							taskId={task.id}
						>
							{task.title}
						</Task>
					</li>
				))}
			</ul>
		</>
	);
}

const EmptyList = () => {
	return (
		<p className="text-sm text-gray-600 py-4">
			Nenhuma tarefa adicionada para fazer!
		</p>
	);
};
