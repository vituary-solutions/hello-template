import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Greeting from "./Greeting";
import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1,
    margin: theme.spacing(0, 1)
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  logo: {
    height: '2em'
  }
}));

function NavBar() {
  const classes = useStyles();
  const { authLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const authText = isAuthenticated ? "Logout" : "Login"
  const authAction = () => {
    if (isAuthenticated) {
      logout({returnTo: window.location.origin})
    }
    else {
      loginWithRedirect({})
    }
  }

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src="/logo-no-text.png" className={classes.logo} alt="logo" />
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          { !authLoading ? <Greeting /> : "Loading..." }
        </Typography>
        { isAuthenticated ?
            <nav>
              <Button color="inherit" component={Link} to="/" className={useStyles.link}>Home</Button>
              <Button color="inherit" component={Link} to="/profile" className={useStyles.link}>Profile</Button>
            </nav> : ""
        }
        { !authLoading ?
            <Button color="primary" variant="outlined" onClick={() => authAction()} className={useStyles.link}>
            {authText}
            </Button> : ""
        }
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;
