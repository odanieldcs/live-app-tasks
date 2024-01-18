import { Task } from './Task';
import { TaskType } from '@/contexts/TaskAppContextTypes';
import { useMutation, useQuery } from 'react-query';
import { Title } from '../Title/Title';
import { useMyAppContext } from '@/contexts/TaskAppContext';
import { useEffect, useState } from 'react';

type TaskListProps = {
	title: string;
	done: boolean;
};

type TaskQueryProps = {
	tasks?: TaskType[];
};

export function TaskList(props: TaskListProps) {
	const [taskList, setTaskList] = useState<TaskType[]>([]);
	const { state } = useMyAppContext();
	const queryName = props.done ? 'tasks-true' : 'tasks-false';

	const { data, error, isLoading } = useQuery<TaskQueryProps>(queryName, () =>
		fetch(`/api/task?done=${props.done}&filter=${state.activeFilter}`).then(
			(res) => res.json()
		)
	);

	// renderizar pela primeira vez meu componente,
	// ou quando o data mudar, eu vou atualizar a lista de tarefas
	useEffect(() => {
		if (data?.tasks) setTaskList(data.tasks);
	}, [data]);

	useEffect(() => {
		console.log('listTasks', taskList);
	}, [taskList]);

	const mutation = useMutation(async (task: TaskType) => {
		const payload = {
			title: task.title,
			done: task.done,
			todoDate: task.todoDate,
		};

		await fetch(`/api/task/${task.id}`, {
			method: 'PUT',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	});

	if (isLoading) return <p>Carregando...</p>;

	if (error) return <p>Ocorreu um erro ao carregar as tarefas!</p>;

	if (data?.tasks?.length === 0 && !props.done) return EmptyList();

	if (data?.tasks?.length === 0 && props.done) return null;

	const onHandlerComplete = (task: TaskType) => {
		mutation.mutate(task, {
			onSuccess: () => {
				setTaskList((prevList) =>
					prevList.map((item) => (task.id == item.id ? task : item))
				);
			},
		});
	};

	const onHandlerSelectDate = (task: TaskType) => {
		// chamada para o backend
		mutation.mutate(task, {
			onSuccess: () => {
				console.log('onHandlerSelectDate', task);
				setTaskList((prevList) =>
					prevList.map((item) => (task.id == item.id ? task : item))
				);
			},
		});
	};

	return (
		<>
			<Title heading="SmallTitle">{props.title}</Title>
			<ul className="flex flex-col w-full">
				{taskList?.map((task) => (
					<li key={task.id} className="w-full">
						<Task
							task={task}
							onComplete={onHandlerComplete}
							onSelectDate={onHandlerSelectDate}
						/>
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
