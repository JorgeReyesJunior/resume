import React from 'react';
import ExperienceCard from './ExperienceCard';
import utilities from '../../../utilities/utilities';

const Experience = (props) => {
  return (
    <section className="o-resume__experience">
      <div className="c-experience">
        <div className="c-snapshot-panel">
          <h3 className="c-snapshot-panel__title">{props.experience.title}</h3>
          <div className="c-snapshot-panel__content">
            <ul>
              {
                (props.experience.employmentHistory).map((experience, i) => {
                  return (
                    <li key={utilities.generateNewKey(i)} >
                      <ExperienceCard experience={experience} />
                    </li>
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