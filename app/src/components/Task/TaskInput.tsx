import { useState, useId } from 'react';
import { useMyAppContext } from '@/contexts/TaskAppContext';
import Styles from './TaskInput.module.css';
import { useMutation } from 'react-query';
import { TaskType } from '@/contexts/TaskAppContextTypes';

export function TaskInput() {
	// const { addTask } = useMyAppContext();
	const [task, setTask] = useState('');

	const newId = useId();

	const mutation = useMutation(
		async (newTask: TaskType) =>
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
			mutation.mutate({ title: task });

			setTask('');
		}
	};

	return (
		<>
			<input
				type="text"
				className={Styles.input}
				value={task}
				onChange={(e) => setTask(e.target.value)}
				onKeyDown={handleAddTask}
				placeholder="+ Adicione uma tarefa a lista. Pressione Enter para salvar."
			/>
		</>
	);
}
