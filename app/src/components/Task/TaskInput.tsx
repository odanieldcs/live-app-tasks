import { useState, useId } from 'react';
import { useMyAppContext } from '@/contexts/TaskAppContext';
import Styles from './TaskInput.module.css';

export function TaskInput() {
	const { addTask } = useMyAppContext();
	const [task, setTask] = useState('');

	const newId = useId();

	// call fn context to add task to list when user press enter
	const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addTask({
				id: newId,
				title: task,
				category: 'category',
				dateToDo: new Date(),
				isDone: false,
			});

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
