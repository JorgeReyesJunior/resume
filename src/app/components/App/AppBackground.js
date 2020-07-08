import React, { useContext } from 'react';
import ThemeContext from '../Themes/Themes';

// NOTE: For development only
// import Image from '../../../assets/media/images/white-triangles-background.png';
// import Video from '../../../assets/media/videos/white-triangles-background.mp4';

const AppBackground = () => {
  const activeTheme = useContext(ThemeContext);

  return (
    <div className={`${activeTheme.className} o-app-background`}>
      <div className={`o-app-background__overlay`}></div>
      <img className="o-app-background__image" src={'https://jorgereyesjunior.github.io/src/assets/media/images/white-triangles-background.webp'} alt="Full screen abstract white triangles background"></img>
      <video className={`o-app-background__video`} preload="preload" autoPlay="autoplay" loop="loop" muted >
        <source src={'https://jorgereyesjunior.github.io/src/assets/media/videos/white-triangles-background.mp4'} type="video/mp4"></source>
      </video>
    </div>
  )
};

export default AppBackground;