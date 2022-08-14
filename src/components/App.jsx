import React, { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onCountFeedback = ({ target: { id } }) => {
    switch (id) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        throw new Error(`Unsuported action type ${id}`);
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.floor((good / total) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good: good, neutral: neutral, bad: bad }}
          onLeaveFeedback={onCountFeedback}
        />
      </Section>
      <Section title="Statistic">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
