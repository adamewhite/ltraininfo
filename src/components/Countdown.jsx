import React, { Component } from 'react';
import '../stylesheets/Countdown.css';
import formatTime from '../timeUtility';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state =  { timeLeft:  {  months: 0, 
                                  weeks: 0, 
                                  days: 0, 
                                  hours: 0, 
                                  minutes: 0, 
                                  seconds: 0
                                },
                    secondsRemaining: 5
                  };
  }
  componentDidMount() {
    this.countDown(); //
    // this.setState({ timeLeft: timeLeftObj });
    setInterval(this.countDown.bind(this), 1000);
  }

  countDown() {
    const doomsday = new Date(2019, 3, 1, 0, 0, 0);
    const currentDate = Date.now();
    const timeUntil = doomsday - currentDate;
    const timeLeft = formatTime(timeUntil);

    // console.log("timeLeft", timeLeft);

    this.setState({ timeLeft: timeLeft });
    
    // Check if we're at zero.
    if (timeUntil === 0) { 
      clearInterval(this.countDown);
    }
  }

  render() {

    return (
      <div id="countdown">
        <h1>Countdown Until Shutdown</h1>
        <ul>
            <li>
              <h2>{this.state.timeLeft.months || 0}</h2>
              <h3>{this.state.timeLeft.months === 1 ? 'month' : 'months'}</h3>
            </li>
            <li>
              <h2>{this.state.timeLeft.weeks || 0}</h2>
              <h3>{this.state.timeLeft.weeks === 1 ? 'week' : 'weeks'}</h3>
            </li>
            <li>
              <h2>{this.state.timeLeft.days || 0}</h2>
              <h3>{this.state.timeLeft.days === 1 ? 'day' : 'days'}</h3>
            </li>
            <li>
              <h2>{this.state.timeLeft.hours || 0}</h2>
              <h3>{this.state.timeLeft.hours === 1 ? 'hour' : 'hours'}</h3>
            </li>
            <li>
              <h2>{this.state.timeLeft.minutes || 0}</h2>
              <h3>{this.state.timeLeft.minutes === 1 ? 'minute' : 'minutes'}</h3>
            </li>
            <li>
              <h2>{this.state.timeLeft.seconds || 0}</h2>
              <h3>{this.state.timeLeft.seconds === 1 ? 'second' : 'seconds'}</h3>
            </li>
        </ul>
      </div>
    );
  }
}

export default Countdown;




