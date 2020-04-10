import React from 'react';
import Bio from './Bio';
import Headline from './Headline';
import Headshot from './Headshot';

const Header = (props) => {
  if (props.omitHeadshotAndHeadline) {
    return (
      <header className={`o-resume__header`}>
        <div className={`c-resume__header`}>
          <Bio bio={props.resume.bio}/>
        </div>
      </header>
    )
  } else if (props.includeHeadshotOnly) {
    return (
      <header className={`o-resume__header--with-headshot`}>
        <div className={`c-resume__header--with-headshot`}>
          <Headshot />
          <Bio bio={props.resume.bio} />
        </div>
      </header>
    )
  } else if (props.includeHeadshotAndHeadline) {
    return (
      <header className={`o-resume__header--with-headshot-and-headline`}>
        <div className={`c-resume__header--with-headshot-and-headline`}>
        <Headshot />
        <Bio bio={props.resume.bio} />
        <Headline />
      </div>
      </header>
    )
  } else {
    return (
      <header className={`o-resume__header`}>
        <div className={`c-resume__header`}>
          <Bio bio={props.resume.bio} />
        </div>
      </header>
    )
  }
};

export default Header;