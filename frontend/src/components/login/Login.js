import React from 'react'
import './Login.css'
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
           
       </div>
       
   </div>
  )
}

export default Login