import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

function App() {
  // fetch('/api').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1232608893299093500').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1213973259244331000').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1150713127425589200').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1131925837228339200').then(data => data.json()).then(data => console.log(data));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
