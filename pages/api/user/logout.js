import { withIronSessionApiRoute } from 'iron-session/next'

import { ironConfig } from '../../../lib/middlewares/ironSession'
import databaseHandler from '../../../lib/middlewares/nextConnect'

const logout = databaseHandler().post(async (req, res) => {
  req.session.destroy()
  res.send({ ok: true })
})

export default withIronSessionApiRoute(logout, ironConfig)
