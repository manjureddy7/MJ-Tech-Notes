// The resolvers.js file is used to create functions that will be used to
//  either query some data or modify some data.

import NoteModel from '../Mongoose_Models/note';

export const resolvers = {
  Query: { // QUERY is basically a GET request in REST
    async allNotes() {
      return await NoteModel.find();
    },
    async getNote(root, { _id }) {
      return await NoteModel.findById(_id)
    }
  },
  Mutation: { // MUTATION is Create, Update, Delete in REST
    async createNote(root, { input }) {
      return await NoteModel.create(input);
    },
    async updateNote(root, { _id, input }) {
      return await NoteModel.findOneAndUpdate({ _id }, input, { new: true })
    },
    async deleteNote(root, { _id }) {
      return await NoteModel.findOneAndRemove({ _id })
    }
  }
}