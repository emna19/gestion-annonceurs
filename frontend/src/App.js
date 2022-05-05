import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./components/signUp/signUp"
import Login from "./components/login/Login";
import Error from "./components/ErrorPage/Error";
import ResetPassword from "./components/ResetPassword";
import Profile from './components/Profile/Profile';
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Audience from './components/audiences/Audience';
import CreateAnnonce from './components/annonce/Annonce'
import AudView from './components/audiences/AudView'
import AnnView from './components/annonce/AnnView'



function App() {
  

  return (
    <Router>
      <Routes>
        <Route  exact path="/signup" element={ <SignUp/>} />
        <Route  exact path="/login" element={ <Login/>} />
        <Route  exact path="/home/audience/create" element={ <Audience/>} />
        <Route  exact path="/home/annonce/create" element={ <CreateAnnonce/>} />

        <Route  exact path="/home" element={ <div><Navbar /> <Home /></div>} />
        <Route exact path="/Profile" element={ <div> <Navbar /><br/> <Profile/></div> }/>
        <Route  exact path="/RestPassword" element={ <ResetPassword/>} />
        <Route exact path="*" element={<Error/>} />
       
      </Routes>
    </Router>
    
  )
}

export default App;



