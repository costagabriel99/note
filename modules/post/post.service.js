import Post from './post.model'

export const createPost = async (body, user) => {
  try {
    return await Post.create({
      title: body.title,
      post: body.post,
      favorite: body.favorite,
      userid: user.id
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getPosts = async (limit = 128) => {
  try {
    return await Post.find().populate('userid', 'user').limit(limit)
  } catch (error) {
    console.error(error)
    throw error
  }
}
