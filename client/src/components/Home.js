import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import wallpaper from "../components/images/wallpaper.jpeg";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CreateAccount from '../components/CreateAccount';
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="homeContainer">
        <img src={wallpaper} alt="Wallpaper" className="homeImage" />
        <Container style={{ position: 'realative' }} maxWidth="lg" className="homeText">
          <h3 className="homeTextName">You know...</h3>
          <h3 className="homeTextTitle">Wagging tails will never disappoint</h3>
          <Button className={classes.button} onClick={handleClickOpen}>Create Account</Button>
        </Container>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth="sm"
          fullScreen={fullScreen}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Create Account
          </DialogTitle>
          <DialogContent dividers>
            <CreateAccount />
          </DialogContent>
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default Home;