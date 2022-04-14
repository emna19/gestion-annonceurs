// import logo from './logo.svg';
// import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

// eslint-disable-next-line no-lone-blocks
{/* <header className="App-header">
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
      </header> */}