import React from 'react';

const Headline = () => {
  return (
    <section className="o-resume__headline">
      <div className="c-headline">
        <div className="c-data-panel">
          <div className="c-snapshot-panel c-snapshot-panel--primary">
            <div className="c-snapshot-panel__content">
              {/* idea: give the 'hightlight' an arrray of values to cycle and display */}
              <p className="c-data-panel__title">I'm a <span className="c-headline__highlight">[</span><span className="c-headline__accent"> Software Engineer </span><span className="c-headline__highlight">]</span> with a passion for unraveling and understanding complex systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Headline;