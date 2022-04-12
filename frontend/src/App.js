import { BrowserRouter , Link, Route , Routes } from "react-router-dom";
import Login from "./components/login/Login";

// import logo from './logo.svg';
// import './App.css';
// import React, {useEffect, useState} from 'react';

function App() {
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api")
  //     .then(response => response.json())
  //     .then( data => { setBackendData(data)})
  // }, [])

  return (
    // <div>
    //   {/* {(typeof backendData.users === 'undefined') ? (
    //     <p>Loading...</p>
    //   ) : (
    //     backendData.users.map((user, i) => 
    //     <p key={i}> {user} </p>)
    //   )} */}

      
    // </div>
    
    <BrowserRouter>
    <Routes>
      {/* login route */}
     <Route  path="/login" element={ <Login/>} />
    </Routes>
   </BrowserRouter>

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