import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./components/signUp/signUp"
import Login from "./components/login/Login";
import Error from "./components/ErrorPage/Error";
import ResetPassword from "./components/ResetPassword";
import Profil from './components/Profil/Profil';
// import Home from './components/Home/Home';
// import Navbar from './components/navbar/navbar'




function App() {
  

  return (
    <Router>
      <Routes>
        <Route  exact path="/signup" element={ <SignUp/>} />
        <Route  exact path="/login" element={ <Login/>} />

        {/* <Route  exact path="/Home" element={ <div><Navbar /> <Home /></div>} /> */}
        <Route exact path="/Profil" element={ <Profil/>}/>
        <Route  exact path="/RestPassword" element={ <ResetPassword/>} />
        <Route exact path="*" element={<Error/>} />
       
      </Routes>
    </Router>
    
  )
}

export default App;



