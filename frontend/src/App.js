// import logo from './logo.svg';
// import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'

function App() {
  const i=0

  return (
    <div>
      
      <Router>
        <Routes>
          <Route exact path="/Home" element={<div><Navbar /> <Home /></div>}>
          </Route>
        </Routes>
      </Router>
    </div>
    
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