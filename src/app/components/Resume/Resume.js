import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Name from './Name';
import Headshot from './Headshot';
import Headline from './Headline';
import Profile from './Profile';
import Skillsets from './Skillsets';

const Resume = () => {
  return (
    <div className="o-resume">
      <Headshot />
      <Name />
      <Headline />
      <Contact />
      <Profile />
      <Education />
      <Skillsets />
      <Experience />
    </div>
  )
};

export default Resume;