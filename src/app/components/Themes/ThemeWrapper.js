import React, { useState, useContext } from 'react';
import ThemeContext from './Themes';
import utilities from '../../utilities/utilities';

const ThemeSelector = (props) => {
  const allThemes = useContext(ThemeContext);
  const [activeTheme, setActiveTheme] = useState(applyDefaultTheme());

  function applyDefaultTheme() {
    for(let i = 0; i < Object.keys(allThemes).length; i++) {
      let registeredTheme = Object.entries(allThemes)[i];

      if(registeredTheme[1].themeName === 'Default') {
        return registeredTheme[1]
      }
    } 
  }

  function applyNewTheme(selectedName) {
    const selectedTheme = selectedName.replace(/\s+/g, '');

    for(let i = 0; i < Object.keys(allThemes).length; i++) {
      let registeredTheme = Object.entries(allThemes)[i];

      if(registeredTheme[1].themeName.replace(/\s+/g, '') === selectedTheme) {
        return registeredTheme[1];
      }
    } 
  }

  function handleThemeChange(e) {
    const newTheme = applyNewTheme(e.target.value);
    
    setActiveTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={activeTheme}
    >
      <div className={`o-theme-wrapper`}>
        <form className={`c-theme-wrapper`}>
          <h4 className={`c-theme-wrapper__title`}>Available Themes:</h4>
          <div className={`o-theme`}>
            {
              Object.entries(allThemes).map((theme) => {
                return (
                  <div className={`o-theme__option`} key={`${theme[0]}-${utilities.generateNewKey()}`}>
                    <label className={`o-theme__label c-label c-lable--theme`}>
                      <input className={`o-theme__radio c-radio c-radio--theme`} type="radio" value={theme[0]} checked={activeTheme.themeName === `${theme[0]}`} onChange={handleThemeChange} />
                      {theme[0]}
                    </label>
                  </div>
                )
              })
            }
          </div>
        </form>
      </div>
      { props.children }
    </ThemeContext.Provider>
  )
};

export default ThemeSelector;