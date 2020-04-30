import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  content: {
    display: 'flex',
    flex: '1 1 auto',
  }
}));

function App() {
  const { authLoading } = useAuth0()
  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Router history={history}>
        <NavBar />
        <div className={classes.content}>
          { !authLoading ?
              <Switch>
                <Route path="/" exact component={Dashboard}/>
                <PrivateRoute path="/profile" component={Profile}/>
              </Switch> : ""
          }
        </div>
      </Router>
    </div>
  );
}

export default App;
