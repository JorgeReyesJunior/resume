import React, {useEffect, useState} from 'react';
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
    <div>
      {isDesktop ? (
        <SkillsetsCards />
      ) : (
        <SkillsetsBars />
      )}
    </div>
  );
}
export default Skillsets;