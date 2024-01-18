import joi from 'joi';

const createTaskSchema = joi.object({
	title: joi.string().required(),
	todoDate: joi.date().optional(),
});

const updateTaskSchema = joi.object({
	title: joi.string().optional(),
	todoDate: joi.date().optional(),
	done: joi.boolean().required(),
});

export { createTaskSchema, updateTaskSchema };
