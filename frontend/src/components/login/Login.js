import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
   <div >
       <div className='container'>
           <div className='artify-logo'/> 
           <img  className='artify-logo' src="https://pictures.artify.tn/app/artify_logo_yellow_white.png" alt="Artify Logo" height="50" width="200" loading="lazy"></img>
           <h1 className='artify-ads-log-in'>ArtifyAds LogIn</h1>
           <h2 className='email'>Email</h2>
           <input className='input' type={'email'} placeholder='Enter your email'/>
           <h2 className='password'>Password</h2>
           <input className='input' type={'password'} placeholder='Enter your password'/>
           <input className='login-button' type='submit' value='LogIn'/>
            <p className='forgot-password-frame'><Link to="/RestPassword" className='forgot-password'>Forgot your Password ?</Link></p>
            <p className='new-here'>New Here? <Link to="/signup" className="signup">SignUp</Link></p>
    
       </div>
       
   </div>
  )
}

export default Login