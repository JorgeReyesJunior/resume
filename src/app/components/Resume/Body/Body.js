import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';
import Skillsets from './Skillsets';

const Body = (props) => {
  return (
    <main className="o-resume__body">
      <Profile profile={props.resume.profile} />
      <Contact contact={props.resume.contact} />
      <Education education={props.resume.education} />
      <Skillsets skills={props.resume.skills} />
      <Experience experience={props.resume.experience} />
    </main>
  )
};

export default Body;