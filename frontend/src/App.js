import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./components/signUp"
import Login from "./components/login/Login";
import Error from "./components/ErrorPage/Error";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
// import logo from './logo.svg';
// import './App.css';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/SignUp" element={<SignUp />}/>
        <Route  exact path="/login" element={ <Login/>} />
        <Route  exact path="/signup" element={ <Signup/>} />
        <Route  exact path="/RestPassword" element={ <ResetPassword/>} />
        <Route exact path="*" element={<Error/>} />
       
      </Routes>
    </Router>
    
  )
}

export default App;



// const [backendData, setBackendData] = useState([{}])

//   useEffect(() => {
//     fetch("/api")
//       .then(response => response.json())
//       .then( data => { setBackendData(data)})
//   }, [])


// eslint-disable-next-line no-lone-blocks
{/* <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => 
        <p key={i}> {user} </p>)
      )}
      
    </div> */}