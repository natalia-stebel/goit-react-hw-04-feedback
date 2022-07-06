import { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };}

  
 handleClick = key => {
  this.setState(prevState =>{
    return{
      [key]: prevState[key] + 1,
    }
  }

  )
 };

  render() {
    const { good, neutral, bad } = this.state;
    const total = Object.values(this.state).reduce((total,item)=>total+item,0);
    const PositiveFeedbackPercentage= Math.round((this.state.good / this.countTotalFeedback()) * 100);
     
      return (
          <div className="Counter">
              <p>Please leave feedback</p>
                   {Object.keys(this.state).map(key =>(<button 
                   key={key} 
                   onClick={()=>this.handleClick(key)}>
                    {key}
                    </button>))}

                <div>
                  <p>Good:{good}</p>
                  <p>Neutral:{neutral}</p>
                  <p>Bad:{bad}</p>
                  <p>Total:{total}</p>
                  <p>Positive feedback:{PositiveFeedbackPercentage}%</p>

                </div>
          </div>
           
      )
  }

