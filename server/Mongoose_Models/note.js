import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Mongoose schemas are used to define the structure of the MongoDB document.

const NoteModel = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('note', NoteModel);