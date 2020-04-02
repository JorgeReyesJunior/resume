import React, {useContext} from 'react';
import MainScreen from '../Layout/MainScreen';
import ThemeContext from '../Themes/Themes';

const AppLayout = () => {
  const activeTheme = useContext(ThemeContext);
  
  return (
    <div className={`${activeTheme.className} o-app-layout`}>
      <div className="o-app-layout__mainscreen">
        <MainScreen />
      </div>
    </div>
  )
};

export default AppLayout;