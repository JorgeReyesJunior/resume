import React from 'react';
import Resume from './Resume'
import ThemeSelector from '../../themes/ThemeSelector';

const ThemeSelectorWrapper = () => {
  return (
    <ThemeSelector >
      <Resume />
    </ThemeSelector>
  )
};

export default ThemeSelectorWrapper;