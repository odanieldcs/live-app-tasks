import { Icon } from '@/components/Icon';
import { MainMenu } from '@/components/Menu/MainMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { TaskInput } from '@/components/Task/TaskInput';
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

					<div className="flex flex-col min-h-[90%] justify-between">
						<div className="grid gap-10 mb-10">
							<MainMenu />
						</div>
						<User />
					</div>
				</Sidebar>

				<div className="p-7 flex flex-col w-full gap-y-[30px] h-[720px]">
					<div className="flex gap-x-[10px]">
						<Icon icon="List" />
						<Title heading="Title">Hoje</Title>
					</div>
					<TaskInput />
					<div className="flex flex-col w-full">
						<TaskList title="Para fazer" done={false} />
						<TaskList title="Concluídas" done={true} />
					</div>
				</div>
			</div>
		</main>
	);
}
