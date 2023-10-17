import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export function validateBody(schema: ObjectSchema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req.body);

		if (error) {
			return res.status(422).json({
				message: error.details[0].message,
			});
		}

		next();
	};
}

// função que valida o body do Request, do express
