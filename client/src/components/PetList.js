import React from 'react';
import { useQuery } from '@apollo/client';
import SinglePet from './SinglePet';
import { QUERY_ALL_PETS } from '../utils/queries';
import BreedMenu from '../components/BreedMenu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function PetList() {
  const { data: petData } = useQuery(QUERY_ALL_PETS);
  console.log(petData);

  const pets = petData?.pets || [];
  let currentBreed;

  function filterPets() {
    if (!currentBreed) {
      return pets;
    }

    return pets.filter(
      (pet) => pet.breed._id === currentBreed
    );
  }
  const setBreed = (breed) => {
    currentBreed = breed
    console.log(currentBreed)
    // update current breed state
    // use useContext
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl' style={{ height: '50vw', backgroundColor: "whitesmoke" }}>
        <BreedMenu setBreed={setBreed} />
        <Typography component='div' style={{ fontWeight: "bold", backgroundColor: "whitesmoke" }}>Standing By:</Typography>
        {pets.length ? (
          <Grid container spacing={1}>
            <Grid item xl={12} style={{ display: "flex", justifyContent: "center", alignItems: 'center', margin: '1vw' }}>
              {filterPets().map((pet) => (
                <SinglePet
                  key={pet._id}
                  _id={pet._id}
                  image={pet.image}
                  name={pet.name}
                  price={pet.price}
                  breed={pet.breed.name}
                  description={pet.description}
                />
              ))}
            </Grid>
          </Grid>
        ) : (
          <Typography>Your family to-be is not ready yet!!</Typography>
        )}
      </Container>
    </React.Fragment>
  );
}

export default PetList;
