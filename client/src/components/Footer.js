import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    fontSize: '1vw',
    borderRadius: '2vw',
    fontWeight: 'bold',
    color: '#fff',
    '&:hover': {
      textDecoration: 'underline',
      color: '#000',
    }
  },

  contactsContainer: {
    backgroundColor: 'black',
    borderStyle: 'soild',
    borderColor: 'black',
    borderWidth: '1vw',
  },

  contactsText: {
    color: 'white',
    fontSize: '15px',
    textAlign: 'center',
    borderTop: '2vw solid black'
  }

}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactsContainer}>
      <br />
      <Grid container spacing={0}>
        <Grid item xs={6} sm={3} align="center">
          <Button
            className={classes.button}
            color="inherit"
            startIcon={<GitHubIcon />}
            style={{ color: "white", textTransform: "none" }}
            onClick={() => window.open('https://github.com/richardyjkim')}
            size="large"
          >
            RICHARD KIM
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} align="center">
          <Button
            className={classes.button}
            color="inherit"
            startIcon={<GitHubIcon />}
            style={{ color: "white", textTransform: "none" }}
            onClick={() => window.open('https://github.com/nmchristianson')}
            size="large"
          >
            NICOLE CHRISTIANSON
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} align="center">
          <Button
            className={classes.button}
            color="inherit"
            startIcon={<GitHubIcon />}
            style={{ color: "white", textTransform: "none" }}
            onClick={() => window.open('https://github.com/Stubblefish')}
            size="large"
          >
            GEORGE WISE
          </Button>
        </Grid>
        <Grid item xs={6} sm={3} align="center">
          <Button
            className={classes.button}
            color="inherit"
            startIcon={<GitHubIcon />}
            style={{ color: "white", textTransform: "none" }}
            onClick={() => window.open('https://github.com/')}
            size="large"
          >
            ANTHONY HALL
          </Button>
        </Grid>
      </Grid>
      <div className={classes.contactsText}>
        Copyright © UCB Bootcamp Fur-Ever Home 2021
        <br />
        All Rights Reserved.
      </div>
      <br />
    </div>
  )
}

export default Footer;