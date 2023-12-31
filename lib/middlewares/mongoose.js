import mongoose from 'mongoose'

const MONGODB_URI = process.env.DB_URI

const databaseMiddleware = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('database error')
  }
  return next()
}

export default databaseMiddleware
