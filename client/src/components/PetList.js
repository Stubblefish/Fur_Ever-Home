import React from 'react';
import { useQuery } from '@apollo/client';
import SinglePet from './SinglePet';
import { QUERY_PETS } from '../utils/queries';

function PetList({ currentBreed }) {
  const { data } = useQuery(QUERY_PETS);

  const pets = data?.products || [];

  function filterPets() {
    if (!currentBreed) {
      return pets;
    }

    return pets.filter(
      (pet) => pet.breed._id === currentBreed
    );
  }

  return (
    <div className="my-2">
      <h2>Standing By:</h2>
      {pets.length ? (
        <div className="flex-row">
          {filterPets().map((pet) => (
            <SinglePet
              key={pet._id}
              _id={pet._id}
              image={pet.image}
              name={pet.name}
              price={pet.price}
              age={pet.age}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any family yet!</h3>
      )}
    </div>
  );
}

export default PetList;
