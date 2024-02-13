// Login.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='body'>
    <div className='register-container'>
      <h1 >Signin to your PopX account</h1>
      <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

      <form >
      <div class="coolinput">
          <label for="input" class="text">Email address</label>
          <input type="email" placeholder="Email" name="Email" class="input" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div class="coolinput">
          <label for="input" class="text">Password</label>
          <input type="password" placeholder="Password" name="Password" class="input" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </div>  
        <NavLink to='/profile' className='button'><button className='create-account-button' style={{width:'98%',backgroundColor:'#CBCBCB'}} type="submit">Login</button></NavLink>
      </form>
    </div>
    </div>
  );
};

export default Login;
