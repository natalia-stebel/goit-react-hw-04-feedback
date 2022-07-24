import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import css from './GlobalStyles.module.css';

export default function App() {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statesName = {
    good,
    neutral,
    bad,
  };

  const feedbackName = Object.keys(statesName);
  const onLeaveFeedback = option => {
    console.log(option);
    switch (option) {
      case 'good':
        setGoog(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  function totalFeedback() {
    return Object.values(statesName).reduce((total, item) => total + item, 0);
  }

  function positiveFeedbackPercentage() {
    return Math.round((good / totalFeedback()) * 100);
  }

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackName}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
