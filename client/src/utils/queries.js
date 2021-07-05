import { gql } from '@apollo/client';

export const QUERY_PETS = gql`
query getPets($breed: ID) {
  pets(breed: $breed) {
    _id
    name
    description
    price
    image
    breed {
      _id
    }
  }
}
`;

export const QUERY_ALL_PETS = gql`
{
  pets {
    _id
    name
    description
    price
    breed {
      name
    }
  }
}
`;

export const QUERY_BREED = gql`
  {
    breeds {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    adoptions {
      _id
      adoptDate
      pets {
        _id
        name
        description
        price
        image     
      }
    }
  }
}
`;