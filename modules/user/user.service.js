import User from './user.model'

export const signupUser = async (body) => {
  try {
    const user = {
      ...body
    }
    const dbUser = await User.create(user)
    return dbUser
  } catch (error) {
    console.error(error)
    throw error
  }
}
export const loginUser = async (body) => {
  try {
    const user = await User.findOne({
      user: body.user
    })
    if (!user) throw new Error('user not found')
    const password = body.password === user.password
    if (!password) throw new Error('incorrect password')

    return user
  }
  catch (error) {
    console.error(error)
    throw error
  }
}
