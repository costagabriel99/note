import Joi from 'joi'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import validation from '../../../lib/middlewares/validation'
import { signupUser } from '../../../modules/user/user.service'

const userSchema = Joi.object({
  //Função criada para validar se os dados do usuario estão corretos antes deste ser criado no banco de dados
  name: Joi.string().required().max(30),
  user: Joi.string().required().max(50),
  password: Joi.string().required().max(64).min(6)
})

const signup = databaseHandler().post(validation({ body: userSchema }), async (req, res) => {
  try {
    const user = await signupUser(req.body)
    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    throw error
  }
})

export default signup
