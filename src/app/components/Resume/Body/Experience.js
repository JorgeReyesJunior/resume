import React, { useContext } from 'react';
import ExperienceCard from './ExperienceCard';
import ThemeContext from '../../Themes/Themes';
import utilities from '../../../utilities/utilities';

const Experience = (props) => {
  const activeTheme = useContext(ThemeContext);

  if (activeTheme.themeName === 'Operator') {
    return (
      <section className="o-resume__experience">
        <div className="c-experience">
          <div className="c-snapshot-panel">
            <h3 className="c-snapshot-panel__title">{props['experience--redacted'].title}</h3>
            <div className="c-snapshot-panel__content">
              <ul>
                {
                  (props['experience--redacted'].employmentHistory).map((experience, i) => {
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
  } else {
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
  }
};

export default Experience;