import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    // Print data to console
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    alert('Registration Successful !!');

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm
        handleRegistration={handleRegistration}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />
    </div>
  );
}

const RegistrationForm = ({
  handleRegistration,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration();
  };

  return (
    <form onSubmit={handleSubmit} className='Register-form-container'>
      Enter username : <input
        type="text"
        name="username"
        placeholder="Username"
        className='input-box'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      /><br/><br/>
      Enter email :    <input
        type="email"
        name="email"
        placeholder="Email"
        className='input-box'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br/><br/>
      Enter password : <input
        type="password"
        name="password"
        placeholder="Password"
        className='input-box'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br/><br/>
      Confirm password : <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className='input-box'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      /><br/><br/>
      <button type="submit" className='login-btn'>Register</button>
      <p>Already have an account? <Link to='/login'>Login Here</Link></p>
    </form>
  );
};

export default Register;
