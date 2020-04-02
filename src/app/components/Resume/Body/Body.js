import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';
import Skillsets from './Skillsets';

const Body = (props) => {
  const resume = props.data.resume;

  return (
    <div className="o-resume__body">
      <Profile profile={resume.profile} />
      <Contact contact={resume.contact} />
      <Education education={resume.education} />
      <Skillsets skills={resume.skills} />
      <Experience experience={resume.experience} />
    </div>
  )
};

export default Body;