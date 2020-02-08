import React, { Fragment } from 'react';
// import jsSvg from '../assets/icons/javascript.svg';
// import SVG from 'react-inlinesvg';

const Skill = (props) => {
  const {title} = props;

  return (
    <Fragment>
      <div className='c-skill--icon'>
        <h3 className='c-skill--title'>{`${title}`}</h3>
        {/* <SVG className="c-skillset__icon" src={jsSvg} alt={`${title}`} /> */}
      </div>
      <ul className="c-skillset__list">
        <li className="c-skillset__listing">
          <div className="c-skillset__data">skillset Data</div>
        </li>
        <li className="c-skillset__listing">
          <div className="c-skillset__data">skillset Data</div>
        </li>
      </ul>
    </Fragment>
  )
};

export default Skill;