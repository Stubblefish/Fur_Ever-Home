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
    pet: [Pet]
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
    pet(breed: ID, name: String): [Pet]
    pet(_id: ID!): Pet
    user: User
    adoption(_id: ID!): Adoption
    checkout(pet: [ID]!): Checkout
    # Think query might be wrong / missing things
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
    updatePet(_id: ID!, quantity: Int!): Pet
    login(email: String!, password: String!): Auth
    # Think my mutation needs work, not sure
  }
  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;
