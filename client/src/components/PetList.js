import React from 'react';
import { useQuery } from '@apollo/client';
import SinglePet from './SinglePet';
import { QUERY_PETS } from '../utils/queries';
import BreedMenu from '../components/BreedMenu';

function PetList({ currentBreed }) {
  const { data } = useQuery(QUERY_PETS);

  const pets = data?.pets || [];

  function filterPets() {
    if (!currentBreed) {
      return pets;
    }

    return pets.filter(
      (pet) => pet.breed._id === currentBreed
    );
  }

  return (
    <>
      <BreedMenu />
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
          <h3>Your family to-be is not ready yet!!</h3>
        )}
      </div>
    </>
  );
}

export default PetList;
