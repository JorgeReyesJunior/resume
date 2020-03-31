import React from 'react';
import Name from './Name';
import Headline from './Headline';
import Headshot from './Headshot';

const Header = (props) => {
  if (props.omitHeadshotAndHeadline) {
    return (
      <header className="o-resume__header">
        <Name />
      </header>
    )
  } else if (props.includeHeadshotOnly) {
    return (
      <header className="o-resume__header--with-headshot">
        <Headshot />
        <Name />
      </header>
    )
  } else if (props.includeHeadshotAndHeadline) {
    return (
      <header className="o-resume__header--with-headshot-and-headline">
        <Headshot />
        <Name />
        <Headline />
      </header>
    )
  } else {
    return (
      <header className="o-resume__header">
        <Name />
      </header>
    )
  }
};

export default Header;