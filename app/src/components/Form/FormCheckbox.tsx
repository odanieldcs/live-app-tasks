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
				{isDone && <Icon name="done" />}
				<input type="checkbox" defaultChecked={isDone} />
			</div>
		</div>
	);
}
