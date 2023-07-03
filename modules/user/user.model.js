import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 30 },
  user: { type: String, required: true, maxlenght: 50, unique: true },
  password: { type: String, required: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
