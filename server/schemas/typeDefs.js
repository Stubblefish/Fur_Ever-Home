const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Breed {
        _id: ID
        name: String
    }

    type Pets {
        _id: ID
        name: String
        description: String
        image: String
        cost: Float
        breed: [Breed]
        age: Int
    }

    type Adoption {

    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        adoption: [Adoption]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {

    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
    type Checkout {

    }


`;

module.exports = typeDefs;
