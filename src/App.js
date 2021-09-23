import React from 'react';
import Statistic from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Section';
import Notification from './Components/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  incrementNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  incrementBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;
    if (good > 0 || neutral > 0 || bad > 0) {
      return (
        <Section title="Please leave feedback">
          <FeedbackOptions
            incGood={this.incrementGoodFeedback}
            incNeutral={this.incrementNeutralFeedback}
            incBad={this.incrementBadFeedback}
          />
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      );
    } else {
      return (
        <Section title="Please leave feedback">
          <FeedbackOptions
            incGood={this.incrementGoodFeedback}
            incNeutral={this.incrementNeutralFeedback}
            incBad={this.incrementBadFeedback}
          />
          <Notification message="No feedback given" />
        </Section>
      );
    }
  }
}

export default App;
