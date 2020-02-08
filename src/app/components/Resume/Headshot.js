import React from 'react';
import ProgressRing from './ProgressRing';

const Headshot = () => {
  return (
    <section className="o-resume__headshot">
      <div className="c-headshot">
        <figure className="c-headshot__figure">
          <ProgressRing height="200" width="200" stroke="white" strokeWidth="2" fill="transparent" targetProgress="100" headshot={true} />
          <ProgressRing height="200" width="200" stroke="white" strokeWidth="2" fill="transparent" targetProgress="75" headshot={true} />
          <ProgressRing height="200" width="200" stroke="#0af7f4" strokeWidth="32" fill="transparent" targetProgress="50" headshot={true} />
          <ProgressRing height="200" width="200" stroke="#0ff7f4" strokeWidth="2" fill="transparent" targetProgress="0" headshot={true} />
          <img className="c-headshot__image" src="https://icon-library.net/images/headshot-icon/headshot-icon-26.jpg"/>
        </figure>
        <a href="https://jorgereyesjunior.github.io/">jorgereyesjunior.github.io</a>
      </div>
    </section>
  )
};

export default Headshot;