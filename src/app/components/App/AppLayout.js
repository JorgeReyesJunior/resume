import React, { useContext } from 'react';
import Layout from '../Layout/Layout';
import ThemeContext from '../Themes/Themes';

const AppLayout = () => {
  const activeTheme = useContext(ThemeContext);
  
  return (
    <div className={`${activeTheme.className} o-app-layout`}>
      <Layout />
    </div>
  )
};

export default AppLayout;