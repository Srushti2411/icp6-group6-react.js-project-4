import React from 'react'
import './Login.css'
function Login() {
  return (
    <div>
      <form  className='form-container'><br/><br/><br/>
        Enter Username : <input type='text' placeholder='Enter Your Email or Phone No.' className='input-box' required/><br/><br/><br/>
        Enter Password : <input type='password' placeholder='Enter Password' className='input-box' required/><br/><br/><br/>
        <input type='submit' value='Log in' className='login-btn'/><br/><br/><br/>
        <p>Don't have account? <a href=''>Register Here</a></p>
      </form>
    </div>
  )
}

export default Login