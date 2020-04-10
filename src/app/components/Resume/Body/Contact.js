import React from 'react';

const Contact = (props) => {

  return (
    <section className="o-resume__contact">
      <div className={'c-contact'}>
        <div className="c-snapshot-panel">
          <h2 className="c-snapshot-panel__title">{props.contact.title}</h2>
          <p className="c-snapshot-panel__content">
            <h5>Email:</h5>{props.contact.email}
            <br></br>
            <br></br>
            <h5>LinkedIn:</h5>{props.contact.linkedin}
          </p>
        </div>
      </div>
    </section>
  )
};

export default Contact;