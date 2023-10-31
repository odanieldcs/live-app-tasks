import { MainMenu } from '@/components/Menu/MainMenu';
import { SecondaryMenu } from '@/components/Menu/SecondaryMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export default function Main() {
	return (
		<main className="p-7">
			<div className="container mx-auto bg-white flex rounded-[20px] shadow-md overflow-hidden">
				<Sidebar>
					<div className="flex items-center mb-7">
						<span className="w-9 h-9 bg-slate-800 rounded-md mr-4"></span>{' '}
						MyTask
					</div>

					<div className="grid ">
						<div className="grid gap-10">
							<MainMenu />
							<SecondaryMenu />
						</div>
						<div className="flex items-center">
							<span className="w-16 h-16 bg-neutral-50 border-4 border-emerald-400 rounded-full mr-4"></span>
							<p className="text-[#56577E] font-bold text-cl">Bia Silva</p>
						</div>
					</div>
				</Sidebar>

				<div className="p-7">Tarefas</div>
			</div>
		</main>
	);
}
