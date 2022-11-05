const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FilmSchema = new Schema ({
    name: {
        type: String
    },
    genre: {
        type: String
    },
    yearOfRelease: {
        type: Number
    },
    authorId: {
        type: String
    }
})

module.exports = mongoose.model('film', FilmSchema)