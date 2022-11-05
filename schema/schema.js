 const {gql} = require('apollo-server-express')

 const typeDefs = gql`
    type Film {
        id: ID 
        name: String
        genre: String
        yearOfRelease: Int,
        author: Author
    }

    type Author {
        id: ID! 
        name: String
        address: String
        date: String 
        films: [Film]
    }

    #ROOT TYPE 

    type Query {
        films: [Film]
        film (id: ID!): Film 
        authors: [Author]
        author (id: ID!): Author
    }

    type Mutation {
        createAuthor( name: String, address: String, date: String): Author
        createFilm( name: String, genre: String, yearOfRelease: Int, authorId: ID!): Film
    }
 `

 module.exports = typeDefs