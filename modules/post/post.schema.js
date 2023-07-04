import Joi from 'joi'
import joiObjectid from 'joi-objectid'
Joi.objectId = joiObjectid(Joi)

export const PostSchema = Joi.object({
  title: Joi.string().required().max(120),
  post: Joi.string().required().max(720),
  favorite: Joi.boolean().required()
})

export const deletePostSchema = Joi.object({
  id: Joi.objectId().required()
})

export const editPostSchema = Joi.object({
  post: Joi.string().required().max(720),
  id: Joi.objectId().required(),
  favorite: Joi.boolean(),
  color: Joi.string()
})
