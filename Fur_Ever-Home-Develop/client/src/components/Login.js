import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOpenOutlined from "@material-ui/icons/LockOpenOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SharedContext from "./SharedContext";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Fur-Ever Home
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      <br />
      All Rights Reserved
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const {
    createAccountOpen,
    setCreateAccountOpen,
    handleCreateOpen,
    handleLoginClose,
  } = React.useContext(SharedContext);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <SharedContext.Provider
        value={{
          createAccountOpen,
          setCreateAccountOpen,
          handleCreateOpen,
          handleLoginClose,
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenOutlined className={classes.icon} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              onSubmit={handleFormSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  component="button"
                  onClick={() => {
                    handleLoginClose();
                    handleCreateOpen();
                  }}
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {error ? (
              <div>
                <p style={{ color: "red" }}>Please Provide Vaild Information</p>
              </div>
            ) : null}
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </SharedContext.Provider>
    </Container>
  );
};
export default Login;
