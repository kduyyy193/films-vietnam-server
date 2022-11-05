
const resolvers = {

  // Query
  Query: {
    films: async (parent, args, { mongoDBMethods }) => await mongoDBMethods.getAllFilms(),
    film: async (parent, {id}, {mongoDBMethods}) => await mongoDBMethods.getFilmById(id),
    authors: async (parent, args, {mongoDBMethods}) => await mongoDBMethods.getAllAuthors(),
    author: async (parent, {id}, {mongoDBMethods}) => await mongoDBMethods.getAuthorById(id)
  },
  Film: {
    author: async ({authorId}, args, {mongoDBMethods}) =>
      await mongoDBMethods.getAuthorById(authorId)
  },
  Author: {
    films:async  ({id}, args, {mongoDBMethods}) =>
     await mongoDBMethods.getAllFilms({authorId: id}),
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args, {mongoDBMethods}) => await mongoDBMethods.createAuthor(args),
    createFilm: async (parent, args, {mongoDBMethods}) => await mongoDBMethods.createFilm(args),
  },
};

module.exports = resolvers;
