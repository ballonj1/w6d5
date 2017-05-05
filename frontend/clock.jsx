import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time : new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick(){
    this.setState({ time : new Date() });
  }

  render(){
    const { time } = this.state;
    return(
      <div className="clock">
        <div id="clock-left">
          <h2>Date</h2>
          <h2>Time</h2>
        </div>
        <div id="clock-right">
          <h2>{time.toLocaleDateString()}</h2>
          <h2>{time.toLocaleTimeString()}</h2>
        </div>
      </div>
    );
  }
}

export default Clock;
