import React from 'react';
import { useQuery } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { QUERY_BREEDS } from '../utils/queries';

function BreedMenu({ setBreed }) {
  const { data: breedData } = useQuery(QUERY_BREEDS);
  const breeds = breedData?.breeds || [];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component='div'style={{backgroundColor: "whitesmoke", height: '100%'}}>Choose a Breed:</Typography>
        {breeds.map((info) => (
          <button
            key={info._id}
            onClick={() => {
              setBreed(info._id);
            }}
          >
            {info.name}
          </button>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default BreedMenu;
