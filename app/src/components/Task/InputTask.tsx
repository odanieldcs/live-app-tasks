import { useState } from 'react';
import Styles from './InputTask.module.css';

export function InputTask() {
	const [task, setTask] = useState('');

	// call fn context to add task to list when user press enter
	const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			console.log('Input Enter: ', task);
			// TODO: call fn context to add task to list
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
