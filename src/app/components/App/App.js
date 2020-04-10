import React, { useContext } from 'react';
import AppBackground from './AppBackground';
import AppLayout from './AppLayout';
import ThemeContext from '../Themes/Themes';

const App = () => {
  const activeTheme = useContext(ThemeContext);

  return (
    <div className={`${activeTheme.className} o-app`}>
      <AppBackground />
      <AppLayout />
    </div>
  )
};

export default App;