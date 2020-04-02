import React, {Fragment, useEffect, useState} from 'react';
import SkillsetsBars from './SkillSetsBars';
import SkillsetsCards from './SkillSetsCards';

const Skillsets = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Fragment>
      {
        isDesktop ? (
          <SkillsetsCards />
        ) : (
          <SkillsetsBars />
        )}
    </Fragment>
  );
}
export default Skillsets;