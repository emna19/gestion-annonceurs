import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/Home'
		} else {
			alert('Please check your Email and password')
		}
	}




  return (
   <div >
     <form onSubmit={loginUser}>
       <div className='container'>
           <div className='artify-logo'/> 
           <img  className='artify-logo' src="https://pictures.artify.tn/app/artify_logo_yellow_white.png" alt="Artify Logo" height="50" width="200" loading="lazy"></img>
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