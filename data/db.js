const Film = require("../models/Film");
const Author = require("../models/Author");

const mongoDBMethods = {
  getAllFilms: async (condition = null) => condition === null ? await Film.find() : await Film.find(condition) ,
  getFilmById: async id => await Film.findById(id), 
  getAllAuthors: async () => await Author.find(),
  getAuthorById: async id => await Author.findById(id),
  createAuthor: async (args) => {
    const newAuthor = new Author(args)
    return await newAuthor.save()
  },
  createFilm: async (args) => {
    const newFilm = new Film(args);
    return newFilm.save();
  },
};

module.exports = mongoDBMethods;
