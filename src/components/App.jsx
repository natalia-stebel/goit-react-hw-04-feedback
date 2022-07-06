import { Component } from 'react';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
getTotalFeedback=()=>{

  return Object.values(this.state).reduce((total,item)=>total+item,0);
}

handleIncrement  = event => {
  const { name } = event.target;
  this.setState(prevState => {
    return { [name]: prevState[name] + 1 };
  });
};

 
  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      < div className="FeedbackCounter">
          <p>Please leave feedback</p>

          <div className="FeadbackButtons">
            <button type="button" key={id} name={button} onClick={()=>handleIncrement(id)}>Good</button>
            <button type="button"  name={button} onClick={this.handleIncrement}>Neutral</button>
            <button type="button"  name={button} onClick={this.handleIncrement}>Bad</button>
          </div>
              
              <div className="Statistics">
              <p>Statistics</p>
                <span className="Statistics__item">Good:{good}</span>
                <span className="Statistics__item">Neutral:{neutral}</span>
                <span className="Statistics__item">Bad:{bad}</span>

              </div>

      </div>

    )
  }
}

