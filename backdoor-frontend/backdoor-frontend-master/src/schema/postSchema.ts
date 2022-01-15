import Joi from 'joi';

const postSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(120)
        .required(),
    description: Joi.string()
        .min(10)
        .max(2000)
        .required(),
    threads: Joi.array()
        .min(1)
        .label("Tags")
        .required()
});

export default postSchema;