import mongoose from 'mongoose'

const MongoPostSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 50 },
  post: { type: String, required: true, maxlenght: 50 },
  favorite: { type: Boolean, required: true }
})

export default mongoose.models.Post || mongoose.model('Post', MongoPostSchema)
