import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';
import Skillsets from './Skillsets';

const Body = (props) => {
  return (
    <main className="o-resume__body">
      <Profile profile={props.resume.profile} profile--redacted={props.resume['profile--redacted']} />
      <Contact contact={props.resume.contact}contact--redacted={props.resume['contact--redacted']} />
      <Education education={props.resume.education} education--redacted={props.resume['education--redacted']} />
      <Skillsets skills={props.resume.skills} skills--redacted={props.resume['skills--redacted']} />
      <Experience experience={props.resume.experience} experience--redacted={props.resume['experience--redacted']} />
    </main>
  )
};

export default Body;