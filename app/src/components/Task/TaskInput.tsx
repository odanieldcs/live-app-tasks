import { useState, useId } from 'react';
import { useMyAppContext } from '@/contexts/TaskAppContext';
import Styles from './TaskInput.module.css';
import { useMutation, useQueryClient } from 'react-query';
import { TaskType } from '@/contexts/TaskAppContextTypes';
import { CalendarButton } from '../CalendarButton/CalendarButton';

type TaskInputType = Omit<TaskType, 'id'>;

export function TaskInput() {
	// const { addTask } = useMyAppContext();
	const [task, setTask] = useState('');
	const [isInputActive, setIsInputActive] = useState(false);
	const { state } = useMyAppContext();
	const queryClient = useQueryClient();

	const mutation = useMutation(
		async (newTask: TaskInputType) =>
			await fetch('/api/task', {
				method: 'POST',
				body: JSON.stringify(newTask),
				headers: {
					'Content-Type': 'application/json',
				},
			})
	);

	// call fn context to add task to list when user press enter
	const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			mutation.mutate(
				{ title: task, todoDate: state.newTaskSelectedDate },
				{
					onSuccess: () => {
						setTask('');
						queryClient.invalidateQueries('tasks-false');
					},
				}
			);
		}
	};

	return (
		<>
			<div
				className={`${Styles.container} ${
					isInputActive ? Styles.containerActive : ''
				}`}
			>
				<input
					type="text"
					className={Styles.input}
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onFocus={() => setIsInputActive(true)}
					onBlur={() => setIsInputActive(false)}
					onKeyDown={handleAddTask}
					placeholder="+ Adicione uma tarefa a lista. Pressione Enter para salvar."
				/>
				<CalendarButton />
			</div>
		</>
	);
}
