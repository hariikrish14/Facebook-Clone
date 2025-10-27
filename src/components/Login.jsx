import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'


function Login() {
    const navigate=useNavigate();
    const[email, setEmail]=useState('');
    const[pass, setPass]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
    

        const validEmail='harii123@gmail.com';
        const validPass='hari@123'

        if (email===validEmail && pass===validPass){
            navigate('/homepage');
        }
        else{
            alert('Invalid credentials. Try Again.')
        }
    };
    const handleRegister=()=>{
      navigate('/register');
    };

  return (
     <div className="fb-login-wrapper">
  <div className="fb-login-container">
    <div className="fb-login-left">
      <h1>facebook</h1>
      <p>Facebook helps you connect and share with friends and loved ones.</p>
    </div>
    <div className="fb-login-right">
      <form className="fb-login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Log In</button>
        <a href="#">Forgot your password?</a>
        <hr />
        <button 
        className="create-btn"
        type='button'
        onClick={handleRegister}
        >
          Create new account
        </button>
      </form>
      <p className="fb-footer-link">
        <a href="#"><strong>Create a page</strong></a> for a famous person, brand or business.
      </p>
    </div>
  </div>
</div>
  );

}
export default Login;
