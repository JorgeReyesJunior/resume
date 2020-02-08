import React from 'react';
import MainScreen from '../Layout/MainScreen';

const AppLayout = () => {
  return (
    <div className="o-app-layout">
      <div className="o-app-layout__mainscreen">
        <MainScreen />
      </div>
    </div>
  )
};

export default AppLayout;