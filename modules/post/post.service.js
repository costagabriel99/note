import Post from './post.model'

export const createPost = async (body) => {
  try {
    console.log(body)
    const dbPost = await Post.create(body)
    return dbPost
  } catch (error) {
    console.error(error)
    throw error
  }
}
