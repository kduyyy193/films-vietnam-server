const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { ServerApiVersion } = require("mongodb");

// Load schema & resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load data methods
const mongoDBMethods = require("./data/db");

// Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kduyyy:190303@literary-vietnam.cxrshty.mongodb.net/?retryWrites=true&w=majority",
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

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
