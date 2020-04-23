import React, {useState, useEffect} from 'react';
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import {getGreetingName} from './service/hello-service'
import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa";

import './App.css';

function App() {
  const { loading } = useAuth0();
  const [name, setName] = useState('Guest');

  useEffect(() => {
    getGreetingName()
      .then(
        (result) => {
          setName(result)
        },
        (error) => {
          console.error("Failed to load from API!", error)
        }
      )
  },[]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
        <header className="App-header">
          <NavBar />
          <img src="/logo-vertical-340w.png" className="App-logo" alt="logo" />
          <h3>Hello {name}!</h3>
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
