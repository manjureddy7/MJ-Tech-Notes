import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserModel = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model('user', UserModel);