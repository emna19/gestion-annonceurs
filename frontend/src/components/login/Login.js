import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
   <div >
       <div className='container'>
           {/* <img className='Artify-logo' src='./../assets/artifyLogo.png' alt='beep'/> */}
           <div className='artify-logo'/> 
           <h1 className='artify-ads-log-in'>ArtifyAds LogIn</h1>
           <h2 className='email'>Email</h2>
           <input className='input' type={'email'} placeholder='Enter your email'/>
           <h2 className='password'>Password</h2>
           <input className='input' type={'password'} placeholder='Enter your password'/>
           <button type='submit' className='login-button'>
               <div className='login'>LogIn</div>
           </button>
            <p className='forgot-password-frame'><Link to="/RestPassword" className='forgot-password'>Forgot your Password ?</Link></p>
            <p className='new-here'>New Here? <Link to="/signup" className="signup">SignUp</Link></p>
             


           
       </div>
       
   </div>
  )
}

export default Login