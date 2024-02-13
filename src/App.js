// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import Login from './components/Login';
import ProfileDetails from './components/ProfileDetails';
import Register from './components/Register';

export default class App extends React.Component{
  constructor(){
    super();

}
  render(){
    
    
  return (
    

    <div>
    <Routes>
    <Route exact path='/' element={<HomePage/>}/>
      <Route path="/signin" element={<Login/>} />
      <Route path="/create-account" element={<Register />} />
      <Route path="/profile" element={ <ProfileDetails />} />
 
  </Routes>
    </div>
  );
  }
};

