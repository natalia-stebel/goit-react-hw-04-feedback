import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section  from './Section/Section';

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
          <Section title="Please leave feedback">
             <FeedbackOptions
                   options={Object.keys(this.state)}
                   onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                <Section title="Statistics">
          
                  <p>Good:{good}</p>
                  <p>Neutral:{neutral}</p>
                  <p>Bad:{bad}</p>
                  <p>Total:{this.totalFeedback()}</p>
                  <p>Positive feedback:{this.positiveFeedbackPercentage()}%</p>

                </Section>
          
         </>  
      )
  }
}
