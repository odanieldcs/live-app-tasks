import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'PUT') {
		const taskId = req.query.id;

		await fetch(`http://localhost:3001/task/${taskId}`, {
			method: 'PUT',
			body: JSON.stringify(req.body),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		res.json({ taskId });
	} else {
		res.status(405).json({ message: 'Método não permitido' });
	}
}
