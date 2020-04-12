import React, { Fragment } from 'react';

function generateNewKey(val) {
  let newKey; 

  if (val) {
    newKey = `${val}-${new Date().getTime()}`;
  } else {
    newKey = `${new Date().getTime()}`;
  }

  return newKey;
}

/**
 * 
 * Render redacted content.
 * @constructor
 * @param {string} redactedContent - The content to be rendered (contains [REDACTIONS]).
 * 
 */
function renderRedactedContent(redactedContent) {
  // Identify a `[REDACTION]`.
  const redaction = new RegExp(/(\[REDACTED])/, 'g')

  // Separate all identified `[REDACTION]`'s from the `redactedContent`. 
  const redactions = redactedContent.split(redaction);

  function redactWord(word, i) {
    return word.match(redaction) ? <b className={`o-redaction`} key={`redact-${generateNewKey(i)}`}>{word}</b> : word
  }

  return (
    <Fragment>
      {
        redactions.map(
          (redaction, i) => (
            redactWord(redaction, i)
          )
        )
      }
    </Fragment>
  );
}

export default {
  generateNewKey,
  renderRedactedContent
};