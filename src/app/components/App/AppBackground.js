import React, {useContext} from 'react';
// import Image from '../../../assets/media/images/white-triangles-background.png';
// import Video from '../../../assets/media/videos/white-triangles-background.mp4';
import ThemeContext from '../Themes/Themes';

const AppBackground = () => {
  const activeTheme = useContext(ThemeContext);

  return (
    <div className={`${activeTheme.className} o-app-background`}>
      <div className="o-app-background__overlay"></div>
      {/* // NOTE: for 'master': 'https://jorgereyesjunior.github.io/src/assets/media/images/white-triangles-background.png' */}
      {/* // NOTE: for 'development': <img className="o-app-background__image" src={Image} alt="Full screen background image of abstract white triangles"></img> */}
      <img className="o-app-background__image" src={'https://jorgereyesjunior.github.io/src/assets/media/images/white-triangles-background.png'} alt="Full screen abstract white triangles background"></img>
      <video className="o-app-background__video" preload="preload" autoPlay="autoplay" loop="loop" muted >
        {/* // NOTE: for 'master': https://jorgereyesjunior.github.io/src/assets/media/videos/white-triangles-background.mp4 */}
        {/* // NOTE: for 'development': <source src={Video} type="video/mp4"></source> */}
        <source src={'https://jorgereyesjunior.github.io/src/assets/media/videos/white-triangles-background.mp4'} type="video/mp4"></source>
      </video>
    </div>
  )
};

export default AppBackground;