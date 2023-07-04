import Joi from 'joi'

export const signupSchema = Joi.object({
  //Função criada para validar se os dados do usuario estão corretos antes deste ser criado no banco de dados
  name: Joi.string().required().max(30),
  user: Joi.string().required().max(50),
  password: Joi.string().required().max(64).min(6)
})

export const loginSchema = Joi.object({
  //Função criada para validar se os dados do usuario estão corretos antes de buscar no banco de dados
  user: Joi.string().required(),
  password: Joi.string().required()
})
