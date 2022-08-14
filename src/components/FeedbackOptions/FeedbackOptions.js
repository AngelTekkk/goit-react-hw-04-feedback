import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonsList}>
      {Object.keys(options).map(mark => (
        <button
          type="button"
          key={mark}
          id={mark}
          className={s[mark]}
          onClick={onLeaveFeedback}
        >
          {mark}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
