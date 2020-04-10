import React from 'react';
import utilities from '../../../utilities/utilities';

const Experience = (props) => {
  return (
    <section className="o-resume__experience">
      <div className="c-experience">
        <div className="c-snapshot-panel">
          <h2 className="c-snapshot-panel__title">{props.experience.title}</h2>
          <div className="c-snapshot-panel__content">
            <ul>
              {
                (props.experience.employmentHistory).map((experience, i) => {
                  return (
                    <li key={utilities.generateNewKey(i)} >{experience.position}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Experience;