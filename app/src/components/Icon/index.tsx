import Image from 'next/image';
import Icons from './Base64Icons.json';

const IconSource = {
	Archive: Icons.Archive,
	Done: Icons.Done,
	List: Icons.List,
	Menu: Icons.Menu,
	NextWeek: Icons.NextWeek,
	Today: Icons.Today,
	Tomorrow: Icons.Tomorrow,
};

export type IconName = keyof typeof IconSource;

export function Icon({ icon }: { icon: IconName }) {
	const iconBase64 = `data:image/svg+xml;base64,${IconSource[icon]}`;

	return <Image src={iconBase64} width={24} height={24} alt="" />;
}
