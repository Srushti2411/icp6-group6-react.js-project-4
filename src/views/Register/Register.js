import React from 'react'
import './Register.css';

function Register() {
  return (
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

const RegistrationForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit} className='Register-form-container'>
        Enter username : <input type="text" name="username" placeholder="Username" className='input-box' /><br/><br/>
        Enter email :    <input type="email" name="email" placeholder="Email" className='input-box' /><br/><br/>
        Enter password : <input type="password" name="password" placeholder="Password" className='input-box'/><br/><br/>
        Confirm password : <input type="password" name="confirmPassword" placeholder="Confirm Password" className='input-box' /><br/><br/>
        <button type="submit" className='login-btn'>Register</button>
        <p>Already have an account? <a href=''>Login here</a></p>
      </form>
    );
  };

export default Register

