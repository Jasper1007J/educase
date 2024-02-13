import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
const HomePage = () => {
  return (
    <div className='body'>
    <div className="container">
      <header>
        <h1>Welcome to PopX</h1>
      </header>
      <main>
        <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <NavLink to='/create-account' className='button'><button className='create-account-button'>Create Account</button></NavLink>
        <NavLink to='/signin' className='button'><button className='login-button' id='button'>Already Registered ?Login</button></NavLink>

      </main>
    </div>
    </div>
  );
};

export default HomePage;