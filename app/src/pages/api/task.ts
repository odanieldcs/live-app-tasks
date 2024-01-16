import { NextApiRequest, NextApiResponse } from 'next';
import { format, add } from 'date-fns';

const URL_API = 'http://localhost:3001';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const done = req.query.done === 'true' || false;
		const filter = `${req.query.filter}` || 'today';

		const tasks = await getTasks(done, filter);

		res.status(200).json({ tasks });
	} else if (req.method === 'POST') {
		await addTask(req.body);
		res.status(200).json({ message: 'Tarefa adicionada com sucesso!' });
	} else {
		res.status(405).json({ message: 'Método não permitido' });
	}
}

async function addTask(task: any) {
	await fetch(`${URL_API}/task`, {
		method: 'POST',
		body: JSON.stringify(task),
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

async function getTasks(done: boolean, filter: string) {
	const { startDate, endDate } = getIntervalDate(filter);
	const url = `${URL_API}/task?done=${done}&startDate=${startDate}&endDate=${endDate}`;

	const response = await fetch(url);

	const { tasks } = await response.json();

	return tasks;
}

function getIntervalDate(filter: string) {
	console.log(filter);
	let startDate = format(new Date(), 'MM-dd-yyyy'); // mm-dd-yyyy
	let endDate = format(new Date(), 'MM-dd-yyyy'); // mm-dd-yyyy

	if (filter === 'tomorrow') {
		startDate = format(add(new Date(), { days: 1 }), 'MM-dd-yyyy'); // mm-dd-yyyy
		endDate = format(add(new Date(), { days: 1 }), 'MM-dd-yyyy'); // mm-dd-yyyy
	}

	if (filter === 'nextWeek') {
		startDate = format(new Date(), 'MM-dd-yyyy'); // mm-dd-yyyy
		endDate = format(add(new Date(), { days: 7 }), 'MM-dd-yyyy'); // mm-dd-yyyy
	}

	console.log(startDate, endDate);

	return {
		startDate,
		endDate,
	};
}
