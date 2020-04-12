import React, { useContext } from 'react';
import ThemeContext from '../../Themes/Themes';
import utilities from '../../../utilities/utilities';

const Education = (props) => {
  const activeTheme = useContext(ThemeContext);

  if (activeTheme.themeName === 'Redacted' || activeTheme.themeName === 'Operator') {
    return (
      <section className="o-resume__education">
        <div className="c-education">
          <div className="c-snapshot-panel">
            <h3 className="c-snapshot-panel__title">{utilities.renderRedactedContent(props['education--redacted'].title)}</h3>
            <div className="c-snapshot-panel__content">
              <h5>{utilities.renderRedactedContent(props['education--redacted'].school)}</h5>
              <p>{utilities.renderRedactedContent(props['education--redacted'].location)}</p>
              <p>{utilities.renderRedactedContent(props['education--redacted'].degree)}, {utilities.renderRedactedContent(props['education--redacted'].graduationYear)}</p>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
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
  }
};

export default Education;