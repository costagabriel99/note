import Post from './post.model'

export const createPost = async (body, user) => {
  try {
    return await Post.create({
      title: body.title,
      post: body.post,
      favorite: body.favorite,
      userid: user.id,
      color: 'white'
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

export const editPost = async (body, user) => {
  try {
    return await Post.findOneAndUpdate(
      { _id: body.id, userid: user.id },
      { post: body.txt },
      { new: true }
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editFavorite = async (body, user) => {
  try {
    return await Post.findOneAndUpdate(
      { _id: body.id, userid: user.id },
      { favorite: body.favorited },
      { new: true }
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const editColor = async (body, user) => {
  try {
    return await Post.findOneAndUpdate(
      { _id: body.id, userid: user.id },
      { color: body.bgColor },
      { new: true }
    )
  } catch (error) {
    console.error(error)
    throw error
  }
}
