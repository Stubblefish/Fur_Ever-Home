import React from 'react';
import { CssBaseline } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import wallpaperTwo from "../components/images/wallpaper2.jpg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import './Reject.css';

const useStyles = makeStyles(() => ({
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
  },
}));

const Reject = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="rejectContainer">
        <img src={wallpaperTwo} alt="Wallpaper" className="rejectImage" />
        <Container style={{ position: 'absolute' }} maxWidth="xl" className="rejectText">
          <h3 className="rejectTextName">Hey you...</h3>
          <h3 className="rejectTextTitle">Create Account and Come back</h3>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Button className={classes.button}>Back to Start</Button>
          </Link>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Reject;