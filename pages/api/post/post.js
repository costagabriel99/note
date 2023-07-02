import Joi from 'joi'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import { createPost } from '../../../modules/post/post.service'
import validation from '../../../lib/middlewares/validation'

const postSchema = Joi.object({
  //Função criada para validar se os dados do post estão corretos antes deste ser criado no banco de dados
  title: Joi.string().required().max(120),
  post: Joi.string().required().max(720).min(3),
  favorite: Joi.boolean().required()
})

const post = databaseHandler().post(validation({ body: postSchema }), (req, res) => {
  createPost(req.body)
  res.status(200).json({ teste: 'ok' })
})

export default post
