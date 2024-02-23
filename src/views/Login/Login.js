import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    alert('Login Successful !!');

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin} className='form-container'>
        <br/><br/><br/>
        Enter Username : <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Email or Phone No.' className='input-box' required/><br/><br/><br/>
        Enter Password : <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='input-box' required/><br/><br/><br/>
        <input type='submit' value='Log in' className='login-btn'/><br/><br/><br/>
      
        <p>Don't have account? <Link to='/register'>Register Here</Link></p>
      </form>
    </div>
  );
}

export default Login;
