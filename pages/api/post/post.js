import { withIronSessionApiRoute } from 'iron-session/next'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import { createPost, getPosts } from '../../../modules/post/post.service'
import validation from '../../../lib/middlewares/validation'
import { PostSchema } from '../../../modules/post/post.schema'
import { ironConfig } from '../../../lib/middlewares/ironSession'

const post = databaseHandler()
  .post(validation({ body: PostSchema }), async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send
      const newPost = await createPost(req.body, req.session.user)
      res.status(201).send(newPost)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

  .get(async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send()
      const posts = await getPosts()
      res.status(200).send(posts)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

export default withIronSessionApiRoute(post, ironConfig)
