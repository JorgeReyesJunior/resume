import React, { Fragment } from 'react';
import utilities from '../../../utilities/utilities';

const ExperienceCard = (props) => {
  console.log("Experience Card: ", props)
  return (
    <section className={'c-exp-card'}>
      <h4 className={'c-exp-card__position'}>{props.experience.position}</h4>
      <p className={'c-exp-card__employer'}>{props.experience.organization}</p> / <p className={'c-exp-card__dates'}>{props.experience.startDate} - {props.experience.endDate}</p>
      <p className={'c-exp-card__role'}>{props.experience.role}:</p>
      <details className={'c-detail c-detail--achievements'}>
        {
          (props.experience.achievements).map((achievement, i) => {
            return (
              <Fragment>
                <summary key={utilities.generateNewKey(i)} className={'c-detail__summary'}></summary>
                  <p>- {achievement}</p>
              </Fragment>
            )
          })
        }
      </details>
    </section>
  )
};

export default ExperienceCard;
