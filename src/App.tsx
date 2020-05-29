import React from 'react';
import logo from './logo.png';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You are one step closer to launching your React App to GitHub pages!
        </p>
      </header>
      <body>
        <List />
      </body>
    </div>
  );
}

export default App;
