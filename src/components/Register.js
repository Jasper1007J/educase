// Register.js
import { Radio } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
  const[phoneNumber,setNumber] = useState('');
  const[Company,setCompany] = useState('');
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  return (
    <div className='body'>
    <div className='register-container'>
      <form >
      <header>
        <h1>Create your PopX account</h1>
      </header>
      <div class="coolinput">
          <label for="input" class="text">Full name<label style={{color:'red'}}>*</label></label>
          <input type="text" placeholder="Full Name" name="Full Name" class="input" value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div class="coolinput">
          <label for="input" class="text">Phone number<label style={{color:'red'}}>*</label></label>
          <input type="text" placeholder="Phone Number" name="Phone Number" class="input" value={phoneNumber} onChange={(e)=>setNumber(e.target.value)} required/>
      </div>
      <div class="coolinput">
          <label for="input" class="text">Email address<label style={{color:'red'}}>*</label></label>
          <input type="email" placeholder="Email" name="Email" class="input" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div class="coolinput">
          <label for="input" class="text">Password<label style={{color:'red'}}>*</label></label>
          <input type="password" placeholder="Password" name="Password" class="input" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </div>
        
        <div class="coolinput">
          <label for="input" class="text">Company name<label style={{color:'red'}}>*</label></label>
          <input type="text" placeholder="Company Name" name="Company Name" class="input" value={Company} onChange={(e)=>setCompany(e.target.value)} required/>
      </div>
      <div className='radio-text'>Are you an Agency?<label style={{color:'red'}}>*</label></div>
      <Radio.Group onChange={onChange} value={value} >
      <Radio value={1} className='radio'>Yes</Radio>
      <Radio value={2}>No</Radio>
    </Radio.Group>
      
      <NavLink to='/profile'><button className='create-account-button'>Create Account</button></NavLink>
      </form>
    </div>
    </div>
  );
};

export default Register;
