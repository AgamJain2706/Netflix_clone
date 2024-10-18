import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  const [signstate, setSignstate] = useState('Sign In')
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="loginlogo" />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign Up" ? <input type="text" placeholder='Name' required />
            : <></>
          }
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me </label>
            </div>
            <p>Need help? </p>
          </div>
        </form>
        <div className='form-switch' >
          {signstate === "Sign In" ? <p>New to Netflix ? <span onClick={()=>(setSignstate("Sign Up"))}>Sign Up Now </span></p> :  <p>Already have account ?  <span  onClick={()=>(setSignstate("Sign In"))}>Sign In Now  </span></p>  }
        </div>
      </div>
    </div>
  )
}

export default Login