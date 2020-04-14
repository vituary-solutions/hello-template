import React, {useState, useEffect} from 'react';
import {getGreetingName} from './service/hello-service'
import './App.css';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo-vertical-340w.png" className="App-logo" alt="logo" />
          <h3>Hello {name}!</h3>
      </header>
    </div>
  );
}

export default App;
