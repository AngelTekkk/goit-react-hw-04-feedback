import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(params) {
  return (
    <ul className={s.list}>
      {Object.entries(params).map(prop => (
        <li key={prop[0]} className={s[prop[0]]}>
          {prop[0] === 'positivePercentage'
            ? `positive feedback: ${prop[1]}%`
            : `${prop[0]}: ${prop[1]}`}
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
