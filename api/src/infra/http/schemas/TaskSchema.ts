import joi from 'joi';

const createTaskSchema = joi.object({
	title: joi.string().required(),
});

export { createTaskSchema };
