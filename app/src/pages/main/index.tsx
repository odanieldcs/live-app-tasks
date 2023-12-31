import { Icon } from '@/components/Icon';
import { MainMenu } from '@/components/Menu/MainMenu';
import { SecondaryMenu } from '@/components/Menu/SecondaryMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { TaskInput } from '@/components/Task/TaskInput';
import { Task } from '@/components/Task/Task';
import { Title } from '@/components/Title/Title';
import { User } from '@/components/User/User';
import { TaskList } from '@/components/Task/TaskList';
import Brand from '@/components/Brand/Brand';

export default function Main() {
	return (
		<main className="p-7">
			<div className="container mx-auto bg-white flex rounded-[20px] shadow-md overflow-hidden">
				<Sidebar>
					<Brand />

					<div className="grid ">
						<div className="grid gap-10 mb-10">
							<MainMenu />
							<SecondaryMenu />
						</div>
						<User />
					</div>
				</Sidebar>

				<div className="p-7 flex flex-col w-full gap-y-[30px]">
					<div className="flex gap-x-[10px]">
						<Icon icon="List" />
						<Title heading="Title">Hoje</Title>
					</div>
					<TaskInput />
					<div className="flex flex-col w-full">
						<Title heading="SmallTitle">Para fazer</Title>
						<TaskList />
					</div>
				</div>
			</div>
		</main>
	);
}
