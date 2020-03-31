import React, {useContext} from 'react';
import ThemeContext from '../../themes/Themes' 

const Name = () => {
  const activeTheme = useContext(ThemeContext);
  return (
    <section className={`${activeTheme.className} o-resume__name`}>
      <div className="c-bio">
        <h1 className="c-bio__name">Jorge Reyes Jr.</h1>
        <hr className="c-bio__accent"></hr>
        <div className="c-bio__profession">
          <p className="c-profession">Software Engineer</p>
        </div>
      </div>
    </section>
  )
};

export default Name;