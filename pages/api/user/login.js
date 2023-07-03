import Joi from 'joi'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import validation from '../../../lib/middlewares/validation'
import { loginUser } from '../../../modules/user/user.service'

const loginSchema = Joi.object({
  //Função criada para validar se os dados do usuario estão corretos antes deste ser criado no banco de dados
  user: Joi.string().required(),
  password: Joi.string().required()
})

const signup = databaseHandler().post(validation({ body: loginSchema }), async (req, res) => {
  try {
    const user = await loginUser(req.body)
    res.send(user)
  } catch (error) {
    console.error(error)
    throw error
  }
})

export default signup
