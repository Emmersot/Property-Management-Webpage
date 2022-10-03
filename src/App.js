import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import logo from './companyLogo.png';

function App() {
  return (
    <div className="app">
      <img src={logo} className="App-companyLogo" alt="Logo" />
      <Header />
      <Home />
    </div>
  );
}

export default App;
