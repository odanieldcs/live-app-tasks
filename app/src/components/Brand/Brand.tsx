import React from 'react';
import Styles from './Brand.module.css';
import Image from 'next/image';

export default function Brand() {
	return (
		<div className={Styles.brand}>
			<Image src="/brand-icon.png" alt="Logo" width={36} height={36} />
			<span>MyTask</span>
		</div>
	);
}
