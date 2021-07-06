const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Breed {
    _id: ID
    name: String
  }

  type Pet {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    breed: [Breed]
    age: Int
  }

  type Adoption {
    _id: ID
    adoptDate: String

    pets: [Pet]

  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    adoptions: [Adoption]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {

    breeds: [Breed]
    pets(breed: ID, name: String): [Pet]
    pet(_id: ID!): Pet
    user: User
    adoption(_id: ID!): Adoption
    checkout(pets: [ID]!): Checkout

  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addAdoption(pet: [ID]!): Adoption
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    updatePet(_id: ID!) Pet

    login(email: String!, password: String!): Auth
  }

  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;