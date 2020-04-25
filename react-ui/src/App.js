import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa";

import './App.css';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <div className="App-header">
          <img src="/logo-vertical-340w.png" className="App-logo" alt="logo" />
        </div>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
