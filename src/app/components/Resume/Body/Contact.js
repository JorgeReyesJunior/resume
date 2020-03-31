import React from 'react';

const Contact = () => {
  return (
    <section className="o-resume__contact">
      <div className="c-contact">
        <div className="c-data-panel">
          <h2 className="c-data-panel__title">Contact</h2>
          <div className="c-data-panel__content">
            <div className="c-snapshot-panel">
              <div className="c-snapshot-panel__content">
                <ul className="c-contact__list">
                  {/* open a new tab with google maps? */}
                  <li className="c-contact__listing">Area of Operations: <span className="c-contact__listing-anchor">Austin, TX</span></li>
                  <li className="c-contact__listing">Github: <span className="c-contact__listing-anchor">https://github.com/JorgeReyesJunior</span></li>
                  <li className="c-contact__listing">Github.io: <span className="c-link c-link--githubio" href="https://jorgereyesjunior.github.io/">jorgereyesjunior.github.io</span></li>
                  <li className="c-contact__listing">LinkedIn: <span className="c-contact__listing-anchor">linkedin.com/in/jareyesjr</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;