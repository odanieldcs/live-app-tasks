import Image from 'next/image';
import Styles from './User.module.css';

export function User() {
	return (
		<div className={Styles.user}>
			<span>
				<Image src="/UserPicture.png" width={70} height={70} alt="Bia Silva" />
			</span>
			<p>Bia Silva</p>
		</div>
	);
}
