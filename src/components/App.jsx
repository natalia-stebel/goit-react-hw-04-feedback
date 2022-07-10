import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section  from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import css from "./GlobalStyles.module.css"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
  onLeaveFeedback = key => {
  this.setState(prevState =>{
    return{
      [key]: prevState[key] + 1,
    }
  }

  )
 };

totalFeedback() { 
  return Object.values(this.state).reduce((total,item)=>total+item,0)};

positiveFeedbackPercentage() {
  return Math.round((this.state.good / this.totalFeedback()) * 100);
}

  render() {
    const { good, neutral, bad } = this.state;
    
      return (
        <>
        <div className={css.container}>
          <Section title="Please leave feedback">
             <FeedbackOptions
             
                   options={Object.keys(this.state)}
                   onLeaveFeedback={this.onLeaveFeedback}
                   />
                </Section>
                <Section title="Statistics">

                {this.totalFeedback() === 0 ? (
            <Notification message={"There is no feedback"} />
          ) : (
            <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.totalFeedback()}
                  positivePercentage={this.positiveFeedbackPercentage()}
                  />
          )}

                </Section>
          </div>
         </>  
      );
  }
}
