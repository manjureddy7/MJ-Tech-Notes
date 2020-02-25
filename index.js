import express from 'express';
import mongoose from 'mongoose';
import graphlHTTP from 'express-graphql';
import cors from 'cors';

import Note_Schema from './Graphql/schema';

// Connect MongoDB using Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log("connected to database"));


const app = express();
const PORT = 4300;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to MJ_TECH_NOTES"
  })
});

// A GraphQL schema is at the center of any GraphQL server as it helps 
// describes the functionality available to the clients that connect to it. 
// GraphQL queries are used by the client to request the data it needs from the server
// while a GraphQL mutation is a way of creating, updating and deleting existing data.

app.use("/graphql", graphlHTTP({ // This middleware gets called whenever we requests for queries & mutations
  schema: Note_Schema,
  graphiql: true
}));


app.listen(PORT, () => {
  console.log("APP IS RUNNING ON PORT", PORT);
});