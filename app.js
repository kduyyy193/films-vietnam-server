const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { ServerApiVersion } = require("mongodb");

// Load schema & resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load data methods
const mongoDBMethods = require("./data/db");


require('dotenv').config()


// Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
      }
    );
    
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDBMethods }),
});

const app = express();


server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen({ port: process.env.PORT }, () =>
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  );
});