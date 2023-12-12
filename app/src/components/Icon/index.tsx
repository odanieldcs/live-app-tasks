import Image from 'next/image';
import Icons from './Base64Icons.json';

const IconSource = {
	Archive: Icons.Archive,
	Calendar: Icons.Calendar,
	Done: Icons.Done,
	List: Icons.List,
	Menu: Icons.Menu,
	NextWeek: Icons.NextWeek,
	Today: Icons.Today,
	Tomorrow: Icons.Tomorrow,
};

export type IconName = keyof typeof IconSource;

type IconProps = {
	icon: IconName;
	width?: number;
	height?: number;
	alt?: string;
};

export function Icon(props: IconProps) {
	const iconBase64 = `data:image/svg+xml;base64,${IconSource[props.icon]}`;

	return (
		<Image
			src={iconBase64}
			width={props.width ?? 24}
			height={props.height ?? 24}
			alt={props.alt ?? ''}
		/>
	);
}
