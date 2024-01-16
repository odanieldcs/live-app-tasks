import { useState } from 'react';
import { Icon } from '../Icon';
import Styles from './FormChecbox.module.css';
import { useMutation, useQueryClient } from 'react-query';

export function FormCheckbox({
	done,
	taskId,
}: {
	done: boolean;
	taskId: string;
}) {
	const [checked, setChecked] = useState(done);
	const queryClient = useQueryClient();

	const mutation = useMutation(
		async (updatedTask: { done: boolean }) => {
			await fetch(`/api/task/${taskId}`, {
				method: 'PUT',
				body: JSON.stringify(updatedTask),
				headers: {
					'Content-Type': 'application/json',
				},
			});
		},
		{
			onSuccess: () => {
				console.log('success');
				queryClient.invalidateQueries();
			},
		}
	);

	const handleClick = () => {
		// put request to update task
		console.log({ done: !checked });
		mutation.mutate({ done: !checked });
		setChecked(!checked);
	};

	return (
		<div className="flex cursor-pointer" onClick={handleClick}>
			<div className={`${Styles.checkbox} ${checked ? Styles.checked : ''}`}>
				{checked && <Icon icon="Done" />}
				<input type="checkbox" defaultChecked={done} />
			</div>
		</div>
	);
}
