import { useState } from 'react';
import { Icon } from '../Icon';
import Styles from './FormChecbox.module.css';

export function FormCheckbox({ isDone }: { isDone: boolean }) {
	const [checked, setChecked] = useState(isDone);
	const handleClick = () => {
		setChecked(!checked);
	};

	return (
		<div className="flex cursor-pointer" onClick={handleClick}>
			<div className={`${Styles.checkbox} ${checked ? Styles.checked : ''}`}>
				{checked && <Icon icon="Done" />}
				<input type="checkbox" defaultChecked={isDone} />
			</div>
		</div>
	);
}
