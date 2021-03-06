import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { Auth0Provider } from "./react-auth0-spa";
import * as serviceWorker from './serviceWorker';
import {AppContextProvider} from "./context/application-context";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Auth0Provider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
