import { useState } from 'react';
import Section from 'modules/Feedback/Section/Section';
import FeedbackOptions from 'modules/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'modules/Feedback/Statistics/Statistics';
import Notification from 'modules/Feedback/Notification/Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = propName => {
    setState(prevState => {
      return { ...prevState, [propName]: prevState[propName] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = state;
    const persentagePositeve = ((good / total) * 100).toFixed(1);
    return Number(persentagePositeve);
  };

  const { good, neutral, bad } = state;
  const total = countTotalFeedback();
  const persentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          leaveFeedback={leaveFeedback}
        />
      </Section>
      <Section>
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            persentage={persentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
