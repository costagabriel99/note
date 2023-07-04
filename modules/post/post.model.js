import mongoose from 'mongoose'

import User from '../user/user.model'

const MongoPostSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 120 },
  post: { type: String, required: true, maxlenght: 720 },
  favorite: { type: Boolean, required: true },
  userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: User }
})

export default mongoose.models.Post || mongoose.model('Post', MongoPostSchema)
