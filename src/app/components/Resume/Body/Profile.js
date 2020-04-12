import React, { useContext } from 'react';
import ThemeContext from '../../Themes/Themes';
import utilities from '../../../utilities/utilities';

const Profile = (props) => {
  const activeTheme = useContext(ThemeContext);

  if (activeTheme.themeName === 'Redacted' || activeTheme.themeName === 'Operator') {
    return (
      <section className="o-resume__profile">
        <div className="c-profile">
          <div className="c-snapshot-panel">
            <h3 className="c-snapshot-panel__title">{props['profile--redacted'].title}</h3>
            <div className="c-snapshot-panel__content">{utilities.renderRedactedContent(props['profile--redacted'].content)}</div>
          </div>
        </div>
      </section>
    )
  } else { 
    return (
      <section className="o-resume__profile">
        <div className="c-profile">
          <div className="c-snapshot-panel">
            <h3 className="c-snapshot-panel__title">{props.profile.title}</h3>
            <p className="c-snapshot-panel__content">{props.profile.content}</p>
          </div>
        </div>
      </section>
    );
  }
};

export default Profile;