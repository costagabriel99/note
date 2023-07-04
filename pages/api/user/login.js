import { withIronSessionApiRoute } from 'iron-session/next'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import validation from '../../../lib/middlewares/validation'
import { loginUser } from '../../../modules/user/user.service'
import { ironConfig } from '../../../lib/middlewares/ironSession'
import { loginSchema } from '../../../modules/user/user.schema'

const login = databaseHandler().post(validation({ body: loginSchema }), async (req, res) => {
  try {
    const user = await loginUser(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save()
    res.send({ loginOk: true })
  } catch (error) {
    console.error(error)
    throw error
  }
})

export default withIronSessionApiRoute(login, ironConfig)
