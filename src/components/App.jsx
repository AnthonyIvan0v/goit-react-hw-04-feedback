import { Component } from 'react';
import Section from 'modules/Feedback/Section/Section';
import FeedbackOptions from 'modules/Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'modules/Feedback/Statistics/Statistics';
import Notification from 'modules/Feedback/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = propName => {
    this.setState(prevState => {
      return { [propName]: prevState[propName] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    const persentagePositeve = ((good / total) * 100).toFixed(1);
    return Number(persentagePositeve);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const persentage = this.countPositiveFeedbackPercentage();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          leaveFeedback={this.leaveFeedback}
        />

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
    );
  }
}
export default App;
