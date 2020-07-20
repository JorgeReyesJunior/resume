import React, { useContext } from 'react';
import ThemeContext from '../Themes/Themes';

const AppBackground = () => {
  const activeTheme = useContext(ThemeContext);

  return (
    <div className={`${activeTheme.className} o-app-background`}>
      <div className={`o-app-background__overlay`}></div>
      <img className="o-app-background__image" src={'https://jorgeareyesjr.github.io/src/assets/media/images/white-triangles-background.webp'} alt="Full screen abstract white triangles background"></img>
      <video className={`o-app-background__video`} preload="preload" autoPlay="autoplay" loop="loop" muted >
        <source src={'https://jorgeareyesjr.github.io/src/assets/media/videos/white-triangles-background.mp4'} type="video/mp4"></source>
      </video>
    </div>
  )
};

export default AppBackground;