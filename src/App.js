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

  increment = e => {
    switch (e.target.textContent) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        return;
    }
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
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.increment} />
        </Section>
        {good + neutral + bad > 0 ? (
          <Section title="Statictic">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section title="Statictic">
            <Notification message="No feedback given" />
          </Section>
        )}
      </>
    );
  }
}

export default App;
