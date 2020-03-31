import React, { useState, useContext } from 'react';
import ThemeContext from './Themes';

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
    const selectedTheme = selectedName.replace(/\s+/g, '')

    for(let i = 0; i < Object.keys(allThemes).length; i++) {
      let registeredTheme = Object.entries(allThemes)[i];

      if(registeredTheme[1].themeName.replace(/\s+/g, '') === selectedTheme) {
        return registeredTheme[1]
      }
    } 
  }

  function generateNewKey() {
    const limit = 100;
    const newKey = Math.floor(Math.random() * Math.floor(limit));

    return newKey;
  }

  function handleThemeChange(e) {
    const newTheme = applyNewTheme(e.target.value);
    
    setActiveTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={activeTheme}
    >
        <form className="o-theme-selector">
          {
            Object.entries(allThemes).map((theme) => {
              return (
                <div className="o-theme-selector__radio" key={`${theme[0]}-${generateNewKey()}`}>
                  <label className="o-theme-selector__label">
                    <input className="o-theme-selector__input" type="radio" value={theme[0]} checked={activeTheme.themeName === `${theme[0]}`} onChange={handleThemeChange} />
                    {theme[0]}
                  </label>
                </div>
              )
            })
          }
        </form>
        { props.children }
    </ThemeContext.Provider>
  )
};

export default ThemeSelector;