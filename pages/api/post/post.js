import { withIronSessionApiRoute } from 'iron-session/next'

import databaseHandler from '../../../lib/middlewares/nextConnect'
import {
  createPost,
  getPosts,
  deletePost,
  editPost,
  editFavorite,
  editColor
} from '../../../modules/post/post.service'
import validation from '../../../lib/middlewares/validation'
import { PostSchema, deletePostSchema, editPostSchema } from '../../../modules/post/post.schema'
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
      return res.status(500).send(error.message)
    }
  })

  .patch(validation(editPostSchema), async (req, res) => {
    try {
      if (!req.session.user) return res.status(401).send()
      const refreshPost = await editPost(req.body, req.session.user)
      const favoritePost = await editFavorite(req.body, req.session.user)
      const colorPost = await editColor(req.body, req.session.user)
      if (refreshPost) return res.status(200).send({ editPostOk: true })
      else if (favoritePost) return res.status(200).send({ favoriteOk: true })
      else if (colorPost) return res.status(200).send({ colorOk: true })
      return res.status(400).send('post not found')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  })

export default withIronSessionApiRoute(post, ironConfig)
