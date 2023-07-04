import { withIronSessionApiRoute } from 'iron-session/next'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import validation from '../../../lib/middlewares/validation'
import { signupUser } from '../../../modules/user/user.service'
import { ironConfig } from '../../../lib/middlewares/ironSession'
import { signupSchema } from '../../../modules/user/user.schema'

const signup = databaseHandler().post(validation({ body: signupSchema }), async (req, res) => {
  try {
    const user = await signupUser(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save()
    res.status(201).json({ signupOk: true })
  } catch (error) {
    // quando o usuário tenta criar um novo cadastro com mesmo "user" o codígo retornado é 11000 e ele mostra o que está duplicado na objeto keyPattern
    if (error.code === 11000) {
      return res.status(400).send({
        code: 11000,
        duplicatedKey: Object.keys(error.keyPattern)[0]
      })
    }
    console.error(error)
    throw error
  }
})

export default withIronSessionApiRoute(signup, ironConfig)
