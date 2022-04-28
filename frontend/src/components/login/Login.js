import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../redux/actions/users/userActions'
const Login = () => {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  
  const dispatch=useDispatch();

  const loginUser = (event) => {
		event.preventDefault()
    //send login params to loginuser action 
    dispatch(loginUserAction(email,password));
	
	}

  document.body.style = 'background-color: #114A71';


  return (
   <div >
     <form onSubmit={loginUser}>
       <div className='container position-absolute top-50 start-50 translate-middle'>
           <div className='artify-logo'/> 
           <img  className='artify-logo' src={require("../../assets/artifyLogo.png")} alt="Artify Logo" height="80" width="90" loading="lazy"></img>
           <h1 className='artify-ads-log-in'>ArtifyAds LogIn</h1>
           
           <h2 className='email'>Email</h2>
           <input className='input' 
                value={email}
               onChange={(e) => setEmail(e.target.value)}
               type= 'email'
              placeholder='Enter your email'/>

           <h2 className='password'>Password</h2>
           <input className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter your password'/>

           <input className='login-button' type='submit' value='LogIn'/>

            <p className='forgot-password-frame'><Link to="/RestPassword" className='forgot-password'>Forgot your Password ?</Link></p>
            <p className='new-here'>New Here? <Link to="/signup" className="signup">SignUp</Link></p>
       </div>
       </form>
   </div>
  )
}

export default Login