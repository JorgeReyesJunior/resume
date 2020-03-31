import React from 'react';
import Name from './Name';
import Headline from './Headline';
import Headshot from './Headshot';

const Header = (props) => {
  if (props.omitHeadshotAndHeadline) {
    return (
      <div className="o-resume__header">
        <Name />
      </div>
    )
  } else if (props.includeHeadshotOnly) {
    return (
      <div className="o-resume__header--with-headshot">
        <Headshot />
        <Name />
      </div>
    )
  } else if (props.includeHeadshotAndHeadline) {
    return (
      <div className="o-resume__header--with-headshot-and-headline">
        <Headshot />
        <Name />
        <Headline />
      </div>
    )
  } else {
    return (
      <div className="o-resume__header">
        <Name />
      </div>
    )
  }
};

export default Header;