import React from 'react';
import Skill from './Skill';

const SkillsetsBars = (props) => {
  console.log("SkillBars: ", props)
  return (
    <section className="o-resume__skillset o-resume__skillset--bars">
      <div className="c-data-panel">
        <h2 className="c-data-panel__title">Skillsets</h2>
        <div className="c-data-panel__content">
          <div className="c-snapshot-panel">
            <div className="c-snapshot-panel__content">
              {/* SKILLSET CARDS */}
              <div className="c-skillset__card">
                <h3 className="c-skillset__title">c-skillset__card</h3>
                <div className="c-skillset__content">
                  
                  <Skill title={`JS`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SkillsetsBars;
