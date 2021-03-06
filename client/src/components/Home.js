import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import wallpaper from "../components/images/wallpaper.jpg";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CreateAccount from '../components/CreateAccount';
import './Home.css';
import SharedContext from "./SharedContext";
import Auth from '../utils/auth';

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

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { createAccountOpen, setCreateAccountOpen, handleLoginOpen, handleCreateOpen, handleCreateClose } = React.useContext(SharedContext);
  const loggedIn = Auth.loggedIn();

  return (
    <React.Fragment>
      <SharedContext.Provider value={{ createAccountOpen, handleLoginOpen, setCreateAccountOpen, handleCreateClose, handleCreateOpen }} >
        <CssBaseline />
        <div className="homeContainer">
          <img src={wallpaper} alt="Wallpaper" className="homeImage" />
          <Container style={{ position: 'absolute' }} maxWidth="xl" className="homeText">
            <h3 className="homeTextName">You know...</h3>
            <h3 className="homeTextTitle">Wagging tails will never disappoint</h3>
            {loggedIn
              ? <Link style={{ textDecoration: 'none' }} to="petlist"><Button className={classes.button}>Find Fur fmaily</Button></Link>
              : <Button className={classes.button} onClick={handleCreateOpen}>Create Account</Button>
            }
          </Container>
          <Dialog
            onClose={handleCreateClose}
            aria-labelledby="customized-dialog-title"
            open={createAccountOpen}
            maxWidth="xs"
            fullScreen={fullScreen}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleCreateClose}>
              Create Account
            </DialogTitle>
            <DialogContent dividers>
              <CreateAccount />
            </DialogContent>
          </Dialog>
        </div>
      </SharedContext.Provider>
    </React.Fragment>
  );
}

export default Home;