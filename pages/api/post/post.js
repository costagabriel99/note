import { withIronSessionApiRoute } from 'iron-session/next'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import { createPost, getPosts, deletePost } from '../../../modules/post/post.service'
import validation from '../../../lib/middlewares/validation'
import { PostSchema, deletePostSchema } from '../../../modules/post/post.schema'
import { ironConfig } from '../../../lib/middlewares/ironSession'

const post = databaseHandler()
  .post(validation({ body: PostSchema }), async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send()
      const newPost = await createPost(req.body, req.session.user)
      res.status(201).send(newPost)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

  .get(async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send()
      const posts = await getPosts(req.session.user)
      res.status(200).send(posts)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

  .delete(validation(deletePostSchema), async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send()
      const deletedPost = await deletePost(req.query.id, req.session.user)
      if (deletedPost) return res.status(200).send({ ok: true })
      return res.status(400).send('post not found')
    } catch (error) {
      return res.status(500).send(error.message), console.log('Veio direto')
    }
  })

export default withIronSessionApiRoute(post, ironConfig)
