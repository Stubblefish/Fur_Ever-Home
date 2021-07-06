import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
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
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Login from '../components/Login';
import SharedContext from './SharedContext';
import Auth from '../utils/auth';



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

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


const Nav = () => {
  const { loginOpen, setLoginOpen, handleCreateOpen, handleLoginOpen, handleLoginClose } = React.useContext(SharedContext);
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const loggedIn = Auth.loggedIn();

  return (
    <div className={classes.root}>
      <SharedContext.Provider value={{ loginOpen, handleCreateOpen, setLoginOpen, handleLoginClose, handleLoginOpen }}>
        <AppBar style={{ backgroundColor: "black" }} elevation={0} position="static">
          <Toolbar>
            <Typography variant="h3" className={classes.title} as={Link} to='/'>
              {mobile ? <IconButton className={classes.button}><PetsIcon /> </IconButton> : <Button style={{ color: "white", fontFamily: "Nunito", fontSize: '1.5rem', fontWeight: 'bolder' }}>fur-ever Home <PetsIcon style={{ fontSize: '1.5rem', margin: '0.5vw' }} /></Button>}
            </Typography>
            {mobile ? <IconButton className={classes.button}><SearchIcon /> </IconButton> : <Button className={classes.button} color="inherit">Search fur family</Button>}
            {mobile ? <IconButton className={classes.button}><FavoriteBorderIcon /> </IconButton> : <Button className={classes.button} color="inherit">Who's ready?</Button>}
            
            
            {loggedIn 
              ? mobile 
                ? <IconButton className = {classes.button} onClick={Auth.logout}> <LockOpenIcon /> </IconButton> 
                : <Button className={classes.button} color="inherit" onClick={Auth.logout}>log out</Button>
              : mobile 
                ? <IconButton className={classes.button} onClick={handleLoginOpen}><LockOpenIcon /> </IconButton> 
              : <Button className={classes.button} color="inherit" onClick={handleLoginOpen}>log in</Button>
            }


          <Dialog
            onClose={handleLoginClose}
            aria-labelledby="customized-dialog-title"
            open={loginOpen}
            maxWidth="xs"
            fullScreen={mobile}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleLoginClose}>
              Log in
            </DialogTitle>
            <DialogContent dividers>
              <Login />
            </DialogContent>
          </Dialog>

          </Toolbar>
        </AppBar>
      </SharedContext.Provider>
    </div >
  );
}

export default Nav;