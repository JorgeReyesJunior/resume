import React, { useContext } from 'react';
import ThemeContext from '../Themes/Themes';

// NOTE: For development only
import Image from '../../../assets/media/images/white-triangles-background.png';
import Video from '../../../assets/media/videos/white-triangles-background.mp4';

const AppBackground = () => {
  const activeTheme = useContext(ThemeContext);

  return (
    <div className={`${activeTheme.className} o-app-background`}>
      <div className={`o-app-background__overlay`}></div>
      {/* NOTE: for 'production' only: */}
      {/* <img className="o-app-background__image" src={'https://jorgereyesjunior.github.io/src/assets/media/images/white-triangles-background.png'} alt="Full screen abstract white triangles background"></img> */}
      {/* NOTE: for 'development' only: */}
      <img className={`o-app-background__image`} src={Image} alt="Full screen abstract white triangles background"></img>
      <video className={`o-app-background__video`} preload="preload" autoPlay="autoplay" loop="loop" muted >
        {/* NOTE: for 'production' only: */}
        {/* <source src={'https://jorgereyesjunior.github.io/src/assets/media/videos/white-triangles-background.mp4'} type="video/mp4"></source> */}
        {/* NOTE: for 'development' only: */}
        <source src={Video} type="video/mp4"></source>
      </video>
    </div>
  )
};

export default AppBackground;