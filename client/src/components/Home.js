import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import wallpaper from "../components/images/wallpaper.jpeg";
import Button from '@material-ui/core/Button';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    fontSize: '1vw',
    borderRadius: '2vw',
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    }
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="homeContainer">
        <img src={wallpaper} alt="Wallpaper" className="homeImage" />
        <Container style={{ position: 'realative' }} maxWidth="xl" className="homeText">
          <h3 className="homeTextName">You know...</h3>
          <h3 className="homeTextTitle">Wagging tails will never disappoint</h3>
          <Button className={classes.button}>Create Account</Button>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Home;