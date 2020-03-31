import React, {useContext} from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import ThemeContext from '../../themes/Themes' 

const Resume = () => {
  const activeTheme = useContext(ThemeContext);

  return (
      <div className={`${activeTheme.className} o-resume`}>>
        <Header
          /* if `omitHeadshotAndHeadline` is true, `includeHeadshotOnly` and `includeHeadshotAndHeadline` will not render */
          omitHeadshotAndHeadline={true}
          /* if `omitHeadshotAndHeadline` is true, `includeHeadshotOnly` will not render */
          includeHeadshotOnly={false}
          /* if `omitHeadshotAndHeadline` or `includeHeadshotOnly` are true, includeHeadshotAndHeadline` will not render */
          includeHeadshotAndHeadline={false}
        />
        <Body />
      </div>
  )
};

export default Resume;