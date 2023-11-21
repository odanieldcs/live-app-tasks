import joi from 'joi';

const createTaskSchema = joi.object({
	title: joi.string().required(),
	todoDate: joi.date().optional(),
});

export { createTaskSchema };
