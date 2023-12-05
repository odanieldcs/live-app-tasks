import { NextApiRequest, NextApiResponse } from 'next';

const URL_API = 'http://localhost:3001';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const tasks = await getTasks();

		res.status(200).json({ tasks });
	} else if (req.method === 'POST') {
		await addTask(req.body);
		res.status(200).json({ message: 'Tarefa adicionada com sucesso!' });
	} else {
		res.status(405).json({ message: 'Método não permitido' });
	}
}

async function addTask(task: any) {
	console.log(task);
	await fetch(`${URL_API}/task`, {
		method: 'POST',
		body: JSON.stringify(task),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

async function getTasks() {
	const response = await fetch(`${URL_API}/task`);

	const { tasks } = await response.json();

	return tasks;
}
