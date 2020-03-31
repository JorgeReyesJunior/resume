import React from 'react';
import ProgressRing from './ProgressRing';
import Skill from './Skill';

const SkillsetsCards = () => {
  return (
    <section className="o-resume__skillset o-resume__skillset--cards">
      <div className="c-data-panel">
        <h2 className="c-data-panel__title">Skillsets</h2>
        <div className="c-data-panel__content">
          <div className="c-snapshot-panel">
            <div className="c-snapshot-panel__content">
              {/* SKILLSET CARDS */}
              <div className="c-skillset__card">
                <h3 className="c-skillset__title">c-skillset__card</h3>
                <div className="c-skillset__content">
                  <ProgressRing
                    height="200"
                    width="200"
                    stroke="white"
                    // 4
                    strokeWidth="8"
                    fill="transparent"
                    targetProgress="75" />
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

export default SkillsetsCards;
