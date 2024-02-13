// ProfileDetails.js
import React from 'react';

const ProfileDetails = () => {
  return (
    <div className='body'>
    <h2 style={{fontFamily: 'normal normal normal 18px/21px Rubik;',fontWeight:'normal'}}>Account Settings</h2>
    <div className='register-container'>
      
      <div className='profile'>
      <div className='image'>
      <img className='ellipse114' src={require("./Ellipse 114.jpg")} alt=''/>
      <img className='group1585' src={require("./Group 1585.jpg")}/>
      </div>
      <div className='text'>
      <div className='name'>Marry doe</div>
      <div className='mail'>Marry@Gmail.com</div>
      </div>
      </div>
      <div className='content'>
      Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
      <div style={{letterSpacing:'2px',marginTop:'10px',color:'grey',opacity:'0.5'}}>--------------------------------------</div>
    </div>
    </div>
  );
};

export default ProfileDetails;
