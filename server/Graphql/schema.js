// Creating a schema essentially consists of three things:
// Referencing mongoose.
// Defining the model.
// Exporting the model.

import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

// defined our type definitions. GraphQL implements a human-readable schema syntax known as 
// its Schema Definition Language, or “SDL”. 
// The SDL is used to express the types available within a schema and
// how those types relate to each other.

// The basic components of a schema are object types that represent
//  an object you can fetch from the DB and the kind of fields to expect.


const typeDefs = `

  type Note {
    _id: ID!
    title: String!
    content: String!
    date: Date
  }

  type User {
    _id: ID!
    email: String!
    password: String!
  }

  scalar Date

  type Query {
    getNote(_id: ID!) : Note
    allNotes: [Note]
  }

  input NoteInput {
    title: String!
    content: String!
  }

  input NoteUpdateInput {
    title: String
    content: String
  }

  input UserInput {
    email: String
    password: String
  }

  type Mutation {
    createNote(input: NoteInput) : Note
    updateNote(_id:ID!,input: NoteUpdateInput) : Note
    deleteNote(_id:ID!) : Note
    createUser(input: UserInput) : User
    authenticateUser(input: UserInput): User
  }

`;

const Note_Schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default Note_Schema;