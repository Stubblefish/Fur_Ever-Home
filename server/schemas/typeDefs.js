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
    price: Float
    breed: [Breed]
    age: Int
  }

  type Adoption {
    _id: ID
    adoptDate: String
    pets: [Pets]
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
    breed: [Breed]
    pets(breed: ID, name: String): [Pets]
    pets(_id: ID!): Pets
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
    addAdoption(pets: [ID]!): Adoption
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updatePets(_id: ID!, quantity: Int!): Pets
    login(email: String!, password: String!): Auth
    # Think my mutation needs work, not sure
  }
  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;
