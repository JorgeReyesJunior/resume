import React, { useState, useContext } from 'react';
import ThemeContext from '../../themes/Themes';

const ThemeSelector = (props) => {
  const allThemes = useContext(ThemeContext);
  const defaultTheme = applyDefaultTheme();
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

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

  function handleThemeChange(e) {
    const newTheme = applyNewTheme(e.target.value);
    setActiveTheme(newTheme)
  }
  
  return (
    <ThemeContext.Provider value={activeTheme}>
        <form className="o-theme-selection">
          <div className="radio">
            <label>
              <input type="radio" value="Default" checked={activeTheme.themeName === 'Default'} onChange={handleThemeChange} />
              Default
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Jurassic Park" checked={activeTheme.themeName === 'Jurassic Park'} onChange={handleThemeChange}/>
              Jurassic Park
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Operator" checked={activeTheme.themeName === 'Operator'} onChange={handleThemeChange}/>
              Operator
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Tron" checked={activeTheme.themeName === 'Tron'} onChange={handleThemeChange}/>
              Tron
            </label>
          </div>
        </form>
        { props.children }
    </ThemeContext.Provider>
  )
};

export default ThemeSelector;