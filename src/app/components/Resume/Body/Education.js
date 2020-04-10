import React from 'react';

const Education = (props) => {
  return (
    <section className="o-resume__education">
      <div className="c-education">
        <div className="c-snapshot-panel">
          <h3 className="c-snapshot-panel__title">{props.education.title}</h3>
          <div className="c-snapshot-panel__content">
            <h5>{props.education.school}</h5>
            <p>{props.education.location}</p>
            <p>{props.education.degree}, {props.education.graduationYear}</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Education;