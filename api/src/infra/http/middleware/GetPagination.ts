import { Response, Request, NextFunction } from 'express';

/**
 * Get limit and offset from query params
 * @param req
 * @param res
 * @param next
 */
export async function getPagination(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { limit, offset } = req.query;
	const MAX_LIMIT = 30;

	if (limit && Number(limit) > MAX_LIMIT) {
		return res.status(422).json({
			message: `Limit must be less than ${MAX_LIMIT}`,
		});
	} else {
		req.pagination = {
			limit: Number(limit) || MAX_LIMIT,
			offset: Number(offset) || 0,
		};

		next();
	}
}
