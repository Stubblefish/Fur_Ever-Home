import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Save = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container fixed maxWidth='xl' style={{ backgroundColor: "whitesmoke", height:'60vw' }}>
      <Typography component='div' style={{ fontWeight: "bold", backgroundColor: "whitesmoke" }}>I'm ready</Typography>
      {/* { ? (
        <Grid container spacing={1} style={{ display: "flex", justifyContent: "flex-start", alignItems: 'center' }}>
   
        </Grid>
      ) : ( */}
        <Typography>Please Choose.. they are waiting...</Typography>
      {/* )} */}
    </Container>
  </React.Fragment>
  );
}

export default Save;