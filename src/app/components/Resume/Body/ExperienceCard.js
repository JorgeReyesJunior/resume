import React, { Fragment, useContext } from 'react';
import ThemeContext from '../../Themes/Themes';
import utilities from '../../../utilities/utilities';

const ExperienceCard = (props) => {
  const activeTheme = useContext(ThemeContext);

  if (activeTheme.themeName === 'Operator') {
    return (
      <section className={'c-exp-card'}>
        <h4 className={'c-exp-card__position'}>{utilities.renderRedactedContent(props.experience.position)}</h4>
        <p className={'c-exp-card__employer'}>{utilities.renderRedactedContent(props.experience.organization)}</p> / <p className={'c-exp-card__dates'}>{utilities.renderRedactedContent(props.experience.startDate)} - {utilities.renderRedactedContent(props.experience.endDate)}</p>
        <p className={'c-exp-card__role'}>{utilities.renderRedactedContent(props.experience.role)}:</p>
        <details className={'c-detail c-detail--achievements'}>
          {
            (props.experience.achievements).map((achievement, i) => {
              return (
                <Fragment key={`fragment-${utilities.generateNewKey(i)}`}>
                  <summary key={`summary-${utilities.generateNewKey(i)}`} className={'c-detail__summary'}></summary>
                  <p key={`p-${utilities.generateNewKey(i)}`}>- {utilities.renderRedactedContent(achievement)}</p>
                </Fragment>
              )
            })
          }
        </details>
      </section>
    )
  } else {
    return (
      <section className={'c-exp-card'}>
        <h4 className={'c-exp-card__position'}>{props.experience.position}</h4>
        <p className={'c-exp-card__employer'}>{props.experience.organization}</p> / <p className={'c-exp-card__dates'}>{props.experience.startDate} - {props.experience.endDate}</p>
        <p className={'c-exp-card__role'}>{props.experience.role}:</p>
        <details className={'c-detail c-detail--achievements'}>
          {
            (props.experience.achievements).map((achievement, i) => {
              return (
                <Fragment key={`fragment-${utilities.generateNewKey(i)}`}>
                  <summary key={`summary-${utilities.generateNewKey(i)}`} className={'c-detail__summary'}></summary>
                  <p key={`p-${utilities.generateNewKey(i)}`}>- {achievement}</p>
                </Fragment>
              )
            })
          }
        </details>
      </section>
    )
  }
};

export default ExperienceCard;
