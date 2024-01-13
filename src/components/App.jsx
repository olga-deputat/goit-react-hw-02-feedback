import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedBack } from 'components/FeedBack/FeedBack';
import { Statistics } from 'components/Statistics/Statistics';
import { Nofeedback } from './Nofeedback/Nofeedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedBack = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedBack = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedBackPercentage = () => {
    const total = this.countTotalFeedBack();
    const { good } = this.state;
    return Math.round((good * 100) / total);
  };

  render() {
    const total = this.countTotalFeedBack();
    const positiveFeedback = this.countPositiveFeedBackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBack
            options={Object.keys(this.state)}
            handleFeedBack={this.handleFeedBack}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Nofeedback>No feedback</Nofeedback>
          )}
        </Section>
      </>
    );
  }
}
