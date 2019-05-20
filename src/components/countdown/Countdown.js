import React, { Component } from 'react';


class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.time
    }

  }
  // https://codepen.io/rebeccaeilering/pen/dRxzvR
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        {count: newCount >= 0 ? newCount : 0}
      );

      if (newCount === 0) {
        this.props.resetMinutes();
      }
    }, 1000);
  }
  //^- husk at genbruge, når du skal lave funktionalitet til billedskift
  //^- skriv 5000 i stedet for
  //

  render () {
    const {count} = this.state;
    return (
      <div className="displayedTime">
        <h1>{this.format(count)}</h1>

      </div>

    )
  }
}


export default Countdown;