import React from 'react';

const Bio = (props) => {
  console.log(props.bio)
  const fullName = `${props.bio.first} ${props.bio.last} ${props.bio.suffix}`;

  return (
    <section className={`o-resume__bio`}>
      <div className={`c-resume-bio`}>
        <h1 className={`c-resume-bio__name`}>{fullName}</h1>
        <hr className={`c-resume-bio__accent`}></hr>
        <h5 className={`c-resume-bio__profession`}>{props.bio.profession}</h5>
      </div>
    </section>
  )
};

export default Bio;