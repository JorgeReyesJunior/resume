import React, { useContext } from 'react';
import ThemeContext from '../../Themes/Themes';
import utilities from '../../../utilities/utilities';

const Bio = (props) => {
  const activeTheme = useContext(ThemeContext);

  const fullName = `${props.bio.first} ${props.bio.last} ${props.bio.suffix}`;

  const redactedFullName = `${props['bio--redacted'].first} ${props['bio--redacted'].last} ${props['bio--redacted'].suffix}`;

  if (activeTheme.themeName === 'Operator') {
    return (
      <section className={`o-resume__bio`}>
        <div className={`c-resume-bio`}>
          <h1 className={`c-resume-bio__name`}>{utilities.renderRedactedContent(redactedFullName)}</h1>
          <hr className={`c-resume-bio__accent`}></hr>
          <h5 className={`c-resume-bio__profession`}>{utilities.renderRedactedContent(props['bio--redacted'].profession)}</h5>
        </div>
      </section>
    )
  } else {
    return (
      <section className={`o-resume__bio`}>
        <div className={`c-resume-bio`}>
          <h1 className={`c-resume-bio__name`}>{fullName}</h1>
          <hr className={`c-resume-bio__accent`}></hr>
          <h5 className={`c-resume-bio__profession`}>{props.bio.profession}</h5>
        </div>
      </section>
    )
  }
};

export default Bio;