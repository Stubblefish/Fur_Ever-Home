import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    }
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    color: 'white',
    fontFamily: 'Nunito',
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "black" }} elevation={0} position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title} as={Link} to='/'>
            {mobile ? <IconButton className={classes.button}><PetsIcon /> </IconButton> : <Button style={{ color: "white", fontFamily: "Nunito", fontSize: '1.5rem', fontWeight: 'bolder' }}>fur-ever Home <PetsIcon style={{ fontSize: '1.5rem', margin: '0.5vw' }} /></Button>}
          </Typography>
          {mobile ? <IconButton className={classes.button}><SearchIcon /> </IconButton> : <Button className={classes.button} color="inherit">Search fur family</Button>}
          {mobile ? <IconButton className={classes.button}><FavoriteBorderIcon /> </IconButton> : <Button className={classes.button} color="inherit">Who's ready?</Button>}
          {mobile ? <IconButton className={classes.button}><LockOpenIcon /> </IconButton> : <Button className={classes.button} color="inherit">log in</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
