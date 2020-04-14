import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Guest');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HELLO_API}/hello`)
      .then(res => res.json())
      .then(
        (result) => {
          setName(result.name)
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
