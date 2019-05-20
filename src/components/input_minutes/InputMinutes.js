import React, { Component } from 'react';

class Minutes extends Component {
  constructor(props) {
    super(props);

    this.state = {     
    };

  }

  render() {
    return(
      <button className="btn" onClick={() => this.props.selectMinutesBtn(this.props.time)}>{this.props.label}</button>
    );
  }
}

export default Minutes;
