import Joi from 'joi'

export const PostSchema = Joi.object({
  title: Joi.string().required().max(120),
  post: Joi.string().required().max(720),
  favorite: Joi.boolean().required()
})
