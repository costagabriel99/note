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

export const getPosts = async (user) => {
  try {
    return await Post.find({ userid: user.id }).populate('userid', 'user').limit(128)
  } catch (error) {
    console.error(error)

    throw error
  }
}

export const deletePost = async (id, user) => {
  try {
    return await Post.findOneAndDelete({ _id: id, userid: user.id })
  } catch (error) {
    console.error(error)
    throw error
  }
}
