import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const ramdonNumber = Math.floor(Math.random() * 10) + 1;

	res.status(200).json({ ramdonNumber });
}
