import { TaskType } from '@/contexts/TaskAppContextTypes';
import { useState } from 'react';

type TaskInputEditorProps = {
	task: TaskType;
	onComplete: (task: TaskType) => void;
};

export function TaskInputEditor({ task, onComplete }: TaskInputEditorProps) {
	const [title, setTitle] = useState(task.title);
	const [isEditing, setIsEditing] = useState(false);

	const onBlurHandler = () => {
		onComplete({
			...task,
			title,
		});
		setIsEditing(false);
	};

	const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onComplete({
				...task,
				title,
			});
			setIsEditing(false);
		}
	};

	const onOpenEditor = () => {
		if (task.done) {
			console.log('Não é possível editar uma tarefa concluída');
			return;
		}
		setIsEditing(true);
	};

	return (
		<>
			{isEditing ? (
				<input
					type="text"
					onBlur={onBlurHandler}
					onKeyDown={onKeyPressHandler}
					onChange={(event) => setTitle(event.target.value)}
					defaultValue={title}
					className="bg-transparent border-none focus:ring-0 focus:outline-none w-full"
				/>
			) : (
				<p onClick={onOpenEditor}>{title}</p>
			)}
		</>
	);
}
