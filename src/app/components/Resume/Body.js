import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';
import Skillsets from './Skillsets';

const Body = () => {  
  return (
    <div className="o-resume__body">
      <Profile />
      <Contact />
      <Education />
      <Skillsets />
      <Experience />
    </div>
  )
};

export default Body;