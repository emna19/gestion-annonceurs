import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./components/signUp/signUp"
import Login from "./components/login/Login";
import Error from "./components/ErrorPage/Error";
import ResetPassword from "./components/ResetPassword";



function App() {
  

  return (
    <Router>
      <Routes>
        <Route exact path="/SignUp" element={<SignUp />}/>
        <Route  exact path="/login" element={ <Login/>} />
        <Route  exact path="/signup" element={ <SignUp/>} />
        <Route  exact path="/RestPassword" element={ <ResetPassword/>} />
        <Route exact path="*" element={<Error/>} />
       
      </Routes>
    </Router>
    
  )
}

export default App;



