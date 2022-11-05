const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema ({
    name: {
        type: String
    },
    address: {
        type: String
    },
    date: {
        type: String
    },
    
})

module.exports = mongoose.model('author', AuthorSchema)